import requests
from pprint import pprint

access_token = '02735a29e901b1f3'
BASE_URL = 'https://api.wunderground.com/api/{access_token}/history_{crawl_date}/q/19601.json'

crawl_date = '20170903'
url = BASE_URL.format(**{
    'access_token': access_token,
    'crawl_date': crawl_date
})

req = requests.get(url)
if 'Bad' in req.text:
    pprint(req.text)
    raise ValueError

raw_json = req.json()

precip = float(raw_json['history']['dailysummary'][0]['precipm'])
pprint(precip)

