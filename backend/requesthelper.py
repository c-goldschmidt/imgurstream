"""
dumb, but easy ;)
"""
import requests
from _exceptions import RateLimitException

class RequestHelper(object):
	API_URL = None
	
	def get_default_headers(self):
		raise NotImplementedError
		
	def update_from_headers(self):
		raise NotImplementedError
		
	def has_remaining_rates(self):
		raise NotImplementedError
		
	def print_debug(self, text):
		pass
		
	def _update_request(fnc):
		def _call_updated(self, url, headers=None, **kwargs):
			self.print_debug('call: ' + url)
			send_headers = self.get_default_headers()
			
			if headers is not None:
				send_headers.update(headers)
				
			if self.has_remaining_rates():
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