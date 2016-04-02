from ConfigParser import ConfigParser

class Configuration(ConfigParser):
	
	def __init__(self, config_file=None):
		ConfigParser.__init__(self)
		
		self.config_file = config_file
		
		if config_file is not None:
			self.read(config_file)
		
	def save(self):
		with open(self.config_file, 'w') as cfg:
			ConfigParser.write(self, cfg)
		
	def _with_default(fnc):
		def _exec_with_default(self, section, key, default_value=None):
			try:
				result = fnc(self, section, key)
			except:
				if default_value is None:
					raise ValueError()
				else:
					result = default_value
				
			return result
		return _exec_with_default
	
	@_with_default
	def get(self, section, key, default_value=None):
		return ConfigParser.get(self, section, key)
		
	@_with_default
	def getint(self, section, key, default_value=None):
		return ConfigParser.getint(self, section, key)
		
	@_with_default
	def getboolean(self, section, key, default_value=None):
		return ConfigParser.getboolean(self, section, key)