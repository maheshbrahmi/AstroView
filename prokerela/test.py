#!/usr/bin/env python

from client import ApiClient, ValidationError, AuthenticationError
import json


# def read_secrets() -> dict:
#     filename = os.path.join('secrets.json')
#     try:
#         with open(filename, mode='r') as f:
#             return json.loads(f.read())
#     except FileNotFoundError:
#         return {}
# secrets = read_secrets()


# import json

def get_keys(path):
    with open(path) as f:
        return json.load(f)


def run():
	try:
		keys = get_keys('secrets.json')
		client_id = keys['client_id']
		client_secret = keys['client_secret']
		client = ApiClient(client_id, client_secret)
		#result = client.get('v2/astrology/kundli/advanced', {
		result = client.get('v2/astrology/planet-position', {
			'ayanamsa': 1,
			'coordinates': '19.08386,72.89969',
			'datetime': '1966-11-05T13:40:00+05:30',
		})
		print(json.dumps(result, indent=4))
		with open('result.json', 'w', encoding='utf-8') as f:
			json.dump(result, f, ensure_ascii=False, indent=4)
	except ValidationError as e:
		for msg in e.getValidationMessages():
			print(msg['detail'])
	except AuthenticationError as e:
		print (e.message)

if __name__ == '__main__':
	run()

# Hello Mahesh,

# We do not offer an API for location search.

# You may use our location search widget
# https://gist.github.com/JoyceBabu/84389de1b53ba42198af92500955a46f

# Or use Geonames.org database to create your own location search service.

# Regards,
# Joyce Babu