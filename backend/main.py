import time
from BaseHTTPServer import HTTPServer
from server import HttpReqHandler

HOST_NAME = ''
PORT_NUMBER = 9001 # it's over nine thousaaaaand

if __name__ == "__main__":
	httpd = HTTPServer((HOST_NAME, PORT_NUMBER), HttpReqHandler)
	
	print time.asctime(), "Server Starts - %s:%s" % (HOST_NAME, PORT_NUMBER)
	
	try:
		httpd.serve_forever()
	except KeyboardInterrupt:
		pass
		
	httpd.server_close()
		
	print time.asctime(), "Server Stops - %s:%s" % (HOST_NAME, PORT_NUMBER)