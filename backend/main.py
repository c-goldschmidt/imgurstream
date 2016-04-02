from imgurapi import ImgurAPI

if __name__ == "__main__":
	api = ImgurAPI()
	print api.query_newest_image()
	