from configparser import ConfigParser


class Configuration(ConfigParser):

    def __init__(self, config_file=None):
        ConfigParser.__init__(self)

        self.config_file = config_file

        if config_file is not None:
            self.read(config_file)

    def save(self):
        with open(self.config_file, 'w') as cfg:
            ConfigParser.write(self, cfg)

    def set(self, section, option, value=None):
        value = str(value)
        super(Configuration, self).set(section, option, value)
