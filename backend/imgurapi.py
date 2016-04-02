import json
import time
import datetime
from requesthelper import RequestHelper
from _exceptions import RateLimitException
from config import Configuration
from cache import Cache

class ImgurAPI(RequestHelper):
	API_URL = 'https://api.imgur.com/3/'
	CONFIG_FILE = 'settings.ini'
	CACHE_FILE = 'cache.ini'
		
	def __init__(self):
		self.rates = {
			'avail_user': 50,
			'remain_user': 50,
			'avail_app': 50,
			'remain_app': 50,
			'timestamp': 0
		}
		self.verbose = False
		self.init_config()
		self.init_cache()
	
	def has_remaining_rates(self):
		date = datetime.datetime.fromtimestamp(self.rates['timestamp']).strftime('%Y-%m-%d %H:%M:%S')
		
		self.print_debug(str(self.rates['remain_app']) + ' / ' + str(self.rates['avail_app']) + ' app calls remaining')
		self.print_debug(str(self.rates['remain_user']) + ' / ' + str(self.rates['avail_user']) + ' user calls remaining')
		self.print_debug('next user reset at ' + date)
	
		if self.rates['remain_user'] > 10 and \
		   self.rates['remain_app'] > 10:
			return True
		elif self.rates['timestamp'] < int(time.time()):
			return True
		
		return False
	
	def init_config(self):
		self.config = Configuration(self.CONFIG_FILE)
				
		try:
			self.client_id = self.config.get('credentials', 'client_id')
			self.client_secret = self.config.get('credentials', 'client_secret')
		except:
			raise NoCredentialsException('please check credentials in ' + CONFIG_FILE)
		
		self.rates['avail_user'] = self.config.getint('rates', 'avail_user', 50)
		self.rates['remain_user'] = self.config.getint('rates', 'remain_user', 50)
		self.rates['avail_app'] = self.config.getint('rates', 'avail_app', 50)
		self.rates['remain_app'] = self.config.getint('rates', 'remain_app', 50)
		self.rates['timestamp'] = self.config.getint('rates', 'timestamp', 0)
		self.verbose = self.config.getboolean('settings', 'verbose', False)
	
	def init_cache(self):
		self.cache = Cache(self.CACHE_FILE)
		
	def update_config(self):
		if not self.config.has_section('rates'):
			self.config.add_section('rates')

		self.config.set('rates', 'avail_user', self.rates['avail_user'])
		self.config.set('rates', 'remain_user', self.rates['remain_user'])
		self.config.set('rates', 'avail_app', self.rates['avail_app'])
		self.config.set('rates', 'remain_app', self.rates['remain_app'])
		self.config.set('rates', 'timestamp', self.rates['timestamp'])
				
		self.config.save()
		
	def update_from_headers(self, headers):
		try:
			if self.verbose:
				print '=============Headers============='
				for field in headers:
					print field + ': ' + headers[field]
				print '=============/Headers============='
		
			self.rates['remain_user'] = int(headers['X-RateLimit-UserRemaining'])
			self.rates['avail_user'] = headers['X-RateLimit-UserLimit']
			self.rates['remain_app'] = int(headers['X-RateLimit-ClientRemaining'])
			self.rates['avail_app'] = headers['X-RateLimit-ClientLimit']
			self.rates['timestamp'] = headers['X-RateLimit-UserReset']
			self.update_config()
		except KeyError:
			print 'couldn\'t update from headers'
	
	"""	
	def save_refresh_token():
		pass
	
	def get_auth_url(self, client_id, response_type='pin'):
		route = '{}oauth2/authorize?client_id={}&response_type={}'
        return route.format(self.API_URL, client_id, response_type)
		
	def get_oauth_token(self):
		pass
	"""
	
	def get_default_headers(self):
		return {
			'Authorization': 'Client-ID {}'.format(self.client_id)
		}		
		
	def print_debug(self, text):
		if self.verbose:
			print text
		
	def query_newest_image(self, gallery='user', sort='time', showViral=False):
		viral = 'true' if showViral else 'false'	
		headers = None
		params = ['latest', gallery, sort, viral]
		etag = self.cache.get('etag', *params)
		cached_url = self.cache.get('url', *params)
		last_check = self.cache.get('timestamp', *params)
		
		self.print_debug(gallery + '/' + sort + '/' + viral)
						
		if last_check:
			time_since_last = int(time.time()) - int(last_check)
			
			self.print_debug('last check was ' + str(time_since_last) + ' sec ago')
				
			if time_since_last < 60:
				self.print_debug('won\'t check again')
				return cached_url
			
				
		if etag:
			headers = {
				'If-None-Match': etag
			}
			
		try:
			ret = self.get('gallery/{}/{}?showViral={}'.format(gallery, sort, viral), headers=headers)
			self.cache.set(ret.headers['ETag'], 'etag', *params)
			imgurl = json.loads(ret.text)['data'][0]['link']
		except:
			imgurl = cached_url
				
		if imgurl != cached_url:
			self.cache.set(imgurl, 'url', *params)
			self.cache.set(int(time.time()), 'timestamp', *params)
			
		return imgurl