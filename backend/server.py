import json
from BaseHTTPServer import BaseHTTPRequestHandler
from imgurapi import ImgurAPI

class HttpReqHandler(BaseHTTPRequestHandler):
	def do_HEAD(self):
		self.send_response(200)
		self.send_header("Content-type", "application/json")
		self.end_headers()
	
	def do_GET(self):
		imgur = ImgurAPI()
		
		self.do_HEAD()
		
		path = self.path.split('/')[1:]
				
		gallery = 'user'
		sort = 'time'
		showViral = False
		
		try:
			gallery = path[0] if not path[0] == '' else 'user'
			sort = path[1] if not path[1] == '' else 'time'
			showViral = path[2] == 'true'
		except IndexError:
			pass
		
		ret = {
			'path': self.path,
			'url': imgur.query_newest_image(gallery, sort, showViral)
		}
		
		self.wfile.write(json.dumps(ret))
		