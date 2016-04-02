import json
from requesthelper import RequestHelper
from _exceptions import RateLimitException
from config import Configuration

class ImgurAPI(RequestHelper):
	API_URL = 'https://api.imgur.com/3/'
	CONFIG_FILE = 'settings.ini'
		
	def __init__(self):
		self.rates = {
			'avail': 50,
			'remain': 50,
			'timestamp': 0
		}
		self.verbose = False
		self.init_config()
		
	def init_config(self):
		self.config = Configuration(self.CONFIG_FILE)
				
		if self.config.has_section('credentials'):
			self.client_id = self.config.get('credentials', 'client_id')
			self.client_secret = self.config.get('credentials', 'client_secret')
		else:
			raise NoCredentialsException('please check credentials in ' + CONFIG_FILE)
		
		self.rates['avail'] = self.config.getint('rates', 'avail', 50)
		self.rates['remain'] = self.config.getint('rates', 'remain', 50)
		self.rates['timestamp'] = self.config.getint('rates', 'timestamp', 0)
		self.verbose = self.config.getboolean('settings', 'verbose', False)
		self.last_image = self.config.get('misc', 'last_image', '')
		
	def save_config(self):
		with open(self.CONFIG_FILE, 'w') as cfg:
			self.config.write(cfg)
		
	def update_config(self):
		if not self.config.has_section('rates'):
			self.config.add_section('rates')

		self.config.set('rates', 'avail', self.rates['avail'])
		self.config.set('rates', 'remain', self.rates['remain'])
		self.config.set('rates', 'timestamp', self.rates['timestamp'])
		
		if not self.config.has_section('misc'):
			self.config.add_section('misc')
			
		self.config.set('misc', 'last_image', self.last_image)
		
		self.save_config()
		
	def update_from_headers(self, headers):
		try:
			if self.verbose:
				print '=============Headers============='
				for field in headers:
					print field + ': ' + headers[field]
				print '=============/Headers============='
		
			self.rates['remain'] = int(headers['X-RateLimit-UserRemaining'])
			self.rates['avail'] = headers['X-RateLimit-UserLimit']
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
		
	def query_newest_image(self, gallery='user', sort='time', showViral=False):
		viral = 'true' if showViral else 'false'	
		ret = self.get('gallery/{}/{}?showViral={}'.format(gallery, sort, viral))
		
		print str(self.rates['remain']) + ' / ' + str(self.rates['avail']) + ' calls remaining'
		
		imgurl = json.loads(ret.text)['data'][0]['link']
		
		if imgurl != self.last_image:
			self.last_image = imgurl
			self.update_config()
		
		return imgurl