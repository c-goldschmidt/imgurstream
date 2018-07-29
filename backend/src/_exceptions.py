class RateLimitException(Exception):
    def __init__(self, message):
        self.message = message
        super(RateLimitException, self).__init__(message)

    def __str__(self):
        print(str(self.message))


class NoCredentialsException(Exception):
    def __init__(self, message):
        self.message = message
        super(NoCredentialsException, self).__init__(message)

    def __str__(self):
        print(str(self.message))