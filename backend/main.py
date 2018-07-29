import time
import ssl
from http.server import HTTPServer
from src.config import Configuration
from src.server import HttpReqHandler

if __name__ == "__main__":
    config = Configuration('settings.ini')
    host_name = config.get('settings', 'domain', fallback='')
    port_number = config.getint('settings', 'port', fallback=9001)

    httpd = HTTPServer((host_name, port_number), HttpReqHandler)

    print(time.asctime(), "Server Starts - %s:%s" % (host_name, port_number))

    try:
        certfile = config.get('settings', 'certfile', fallback='')
        keyfile = config.get('settings', 'keyfile', fallback='')
        
        if certfile and keyfile:
            httpd.socket = ssl.wrap_socket(
                httpd.socket,
                server_side=True,
                certfile=certfile,
                keyfile=keyfile
            )
        httpd.serve_forever()
    except KeyboardInterrupt:
        print('aborted by user')
        pass

    httpd.server_close()

    print(time.asctime(), "Server Stops - %s:%s" % (host_name, port_number))