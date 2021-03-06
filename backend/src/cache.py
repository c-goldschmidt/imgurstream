from .config import Configuration


class Cache(Configuration):
    def __init__(self, config_file=None):
        Configuration.__init__(self, config_file)

    @staticmethod
    def get_cache_section_by_args(args):
        section = ''
        for arg in args:
            if not section == '':
                section += '/'
            section += arg
        return section

    def get(self, opt_name, *args, **kwargs):
        section = self.get_cache_section_by_args(args)
        return Configuration.get(self, section, opt_name, fallback=False)

    def set(self, value, opt_name, *args, **kwargs):
        section = self.get_cache_section_by_args(args)

        if not self.has_section(section):
            self.add_section(section)

        Configuration.set(self, section, opt_name, value)
        self.save()
