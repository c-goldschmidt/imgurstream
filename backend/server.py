import json
from BaseHTTPServer import BaseHTTPRequestHandler
from imgurapi import ImgurAPI

class HttpReqHandler(BaseHTTPRequestHandler):
	def do_HEAD(self):
		self.send_response(200)
		self.send_header("Content-type", "application/json")
		self.end_headers()
		
	def _get_params_from_path(self):
		path = self.path.split('/')[1:]
		
		gallery_ok = ('hot', 'top', 'user')
		sort_ok = ('viral', 'top', 'time')
		
		gallery = 'user'
		sort = 'time'
		showViral = False
		
		try:
			if path[0] in gallery_ok:
				gallery = path[0]
				
			if path[1] in sort_ok:
				sort_ok = path[1]
				
			showViral = path[2] == 'true'
		except IndexError:
			pass
			
		return gallery, sort, showViral
	
	def do_GET(self):
		imgur = ImgurAPI()
		
		self.do_HEAD()
		
		gallery, sort, showViral = self._get_params_from_path()
				
		ret = {
			'path': self.path,
			'url': imgur.query_newest_image(gallery, sort, showViral)
		}
		
		self.wfile.write(json.dumps(ret))
		