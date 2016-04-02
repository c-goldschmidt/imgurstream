"""
dumb, but easy ;)
"""
import requests
import time
from _exceptions import RateLimitException

class RequestHelper(object):
	API_URL = None
	
	def get_default_headers(self):
		raise NotImplementedError
		
	def update_from_headers(self):
		raise NotImplementedError
		
	def _update_request(fnc):
		def _call_updated(self, url, headers=None, **kwargs):
			send_headers = self.get_default_headers()
			
			if headers is not None:
				send_headers.update(headers)
				
			if self.rates['remain'] > 20 or time.time() > self.rates['timestamp']:
				ret = fnc(self, self.API_URL + url, headers=send_headers)
				self.update_from_headers(ret.headers)
			else:
				raise RateLimitException('only ' + str(self.rates['remain']) + ' calls remaining!')
			
			return ret
		return _call_updated		
		
	@_update_request
	def get(self, url, **kwargs):
		return requests.get(url, **kwargs)
		
	@_update_request
	def options(self, url, **kwargs):
		return requests.options(url, **kwargs)
		
	@_update_request
	def head(self, url, **kwargs):
		return requests.head(url, **kwargs)
		
	@_update_request
	def post(self, url, **kwargs):
		return requests.post(url, **kwargs)
		
	@_update_request
	def put(self, url, **kwargs):
		return requests.put(url, **kwargs)
		
	@_update_request
	def patch(self, url, **kwargs):
		return requests.patch(url, **kwargs)
		
	@_update_request
	def delete(self, url, **kwargs):
		return requests.patch(url, **kwargs)