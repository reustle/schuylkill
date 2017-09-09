import requests
import datetime
from pprint import pprint

access_token = '02735a29e901b1f3'
BASE_URL = 'https://api.wunderground.com/api/{access_token}/history_{crawl_date}/q/19601.json'


def pull_rainfall(crawl_date):
    """ Pull rainfall for a date """
    
    url = BASE_URL.format(**{
        'access_token': access_token,
        'crawl_date': crawl_date
    })

    req = requests.get(url)
    if 'Bad Request' in req.text:
        return None

    raw_json = req.json()
    
    if not len(raw_json['history']['dailysummary']):
        return None

    return float(raw_json['history']['dailysummary'][0]['precipm'])

for i in range(1, 32):
    if i < 10:
        i = '0' + str(i)
    
    print('["2017-09-' + str(i) + 'T00:00:00", ' + str(pull_rainfall('201709' + str(i))) + '],')

