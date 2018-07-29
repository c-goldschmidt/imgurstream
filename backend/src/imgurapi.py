import json
import time
import datetime

from src.constants import BASE_GALLERIES
from ._exceptions import NoCredentialsException
from .requesthelper import RequestHelper
from .config import Configuration
from .cache import Cache


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
        timestamp = int(self.rates['timestamp'])
        date = datetime.datetime.fromtimestamp(timestamp).strftime('%Y-%m-%d %H:%M:%S')

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
        except Exception as e:
            raise
            # raise NoCredentialsException('please check credentials in ' + self.CONFIG_FILE)

        self.rates['avail_user'] = self.config.getint('rates', 'avail_user', fallback=50)
        self.rates['remain_user'] = self.config.getint('rates', 'remain_user', fallback=50)
        self.rates['avail_app'] = self.config.getint('rates', 'avail_app', fallback=50)
        self.rates['remain_app'] = self.config.getint('rates', 'remain_app', fallback=50)
        self.rates['timestamp'] = self.config.getint('rates', 'timestamp', fallback=0)
        self.verbose = self.config.getboolean('settings', 'verbose', fallback=False)

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
                print('=============Headers=============')
                for field in headers:
                    print(field + ': ' + headers[field])
                print('=============/Headers=============')

            if headers.get('X-Cache', 'MISS') != 'HIT':
                print('updating from headers')
                self.rates['remain_user'] = int(headers['X-RateLimit-UserRemaining'])
                self.rates['avail_user'] = headers['X-RateLimit-UserLimit']
                self.rates['remain_app'] = int(headers['X-RateLimit-ClientRemaining'])
                self.rates['avail_app'] = headers['X-RateLimit-ClientLimit']
                self.rates['timestamp'] = headers['X-RateLimit-UserReset']

                self.update_config()
            else:
                print('cache was HIT, no update')

        except KeyError:
            print('couldn\'t update from headers')

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
            print(text)

    def get_first_image_of_album(self, id, params):
        last_id = self.cache.get('last_of_album_id', *params)
        last_of_album = self.cache.get('last_of_album', *params)

        if last_id == id:
            self.print_debug('using previously cached image for ' + str(id))
            return last_of_album

        ret = self.get('image/{}'.format(id))

        json_parsed = json.loads(ret.text)['data']
        self.print_debug(json_parsed)

        self.cache.set(id, 'last_of_album_id', *params)
        self.cache.set(json_parsed['link'], 'last_of_album', *params)

        return json_parsed['link']

    def _get_url(self, gallery, sort, viral):
        if gallery in BASE_GALLERIES:
            return 'gallery/{}/{}?showViral={}'.format(gallery, sort, viral)
        return 'gallery/r/{}/{}'.format(gallery, sort)

    def query_newest_image(self, gallery='user', sort='time', show_viral=False):
        viral = 'true' if show_viral else 'false'
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
            ret = self.get(self._get_url(gallery, sort, viral), headers=headers)
            self.cache.set(ret.headers['ETag'], 'etag', *params)

            json_parsed = json.loads(ret.text)['data'][0]
            self.print_debug(json_parsed)

            if json_parsed['is_album']:
                imgurl = self.get_first_image_of_album(json_parsed['cover'], params)
            else:
                imgurl = json_parsed['link']

        except ValueError:
            imgurl = cached_url

        if imgurl != cached_url:
            self.cache.set(imgurl, 'url', *params)
            self.cache.set(int(time.time()), 'timestamp', *params)

        return imgurl