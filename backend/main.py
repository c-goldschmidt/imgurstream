import time
from BaseHTTPServer import HTTPServer
from server import HttpReqHandler
from config import Configuration

if __name__ == "__main__":
	config = Configuration('settings.ini')
	host_name = config.get('settings', 'domain', '')
	port_number = config.getint('settings', 'port', 9001)

	httpd = HTTPServer((host_name, port_number), HttpReqHandler)
	
	print time.asctime(), "Server Starts - %s:%s" % (host_name, port_number)
	
	try:
		httpd.serve_forever()
	except KeyboardInterrupt:
		pass
		
	httpd.server_close()
		
	print time.asctime(), "Server Stops - %s:%s" % (host_name, port_number)