import json
from http.server import BaseHTTPRequestHandler

from src.constants import BASE_GALLERIES, SORTINGS
from .imgurapi import ImgurAPI


class HttpReqHandler(BaseHTTPRequestHandler):
    ALLOWED_HOSTS = ('coderdungeon.de', 'www.coderdungeon.de', 'localhost')

    def do_HEAD(self):
        self.send_response(200)
        self.send_header('Content-type', 'application/json')
        
        if self.headers and 'Origin' in self.headers:
            host = self._host_if_allowed()
            if host:
                self.send_header('Access-Control-Allow-Origin', host)

        self.end_headers()

    def _host_if_allowed(self):
        host = self.headers['Origin'].split('//')[1].split(':')[0]
        return self.headers['Origin'] if host in self.ALLOWED_HOSTS else False

    def _get_params_from_path(self):
        path = self.path.split('/')[1:]

        gallery = 'user'
        sort = 'time'
        show_viral = False
        raw = False

        try:
            gallery = path[0]

            if path[1] in SORTINGS:
                sort = path[1]

                show_viral = path[2] == 'true'

            if len(path) > 3:
                raw = path[3] == 'raw'

        except IndexError:
            pass

        return gallery, sort, show_viral, raw

    def do_GET(self):
        imgur = ImgurAPI()

        self.do_HEAD()

        gallery, sort, showViral, raw = self._get_params_from_path()

        if gallery == 'favicon.ico':
            return

        if raw:
            raw_response, success = imgur.query_raw(gallery, sort, showViral)
            ret = {
                'list': raw_response if success else [],
                'path': self.path,
                'error': raw_response if not success else {},
            }
        else:
            ret = {
                'path': self.path,
                'url': imgur.query_newest_image(gallery, sort, showViral)
            }

        self.wfile.write(json.dumps(ret).encode('utf-8'))
