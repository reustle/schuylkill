#!/usr/bin/env python

import requests
import datetime
from pprint import pprint
from time import sleep

access_token = '02735a29e901b1f3'
BASE_URL = 'https://api.wunderground.com/api/{access_token}/history_{crawl_date}/q/19601.json'

MONTH = '11'

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

    precipm = raw_json['history']['dailysummary'][0]['precipm']
    if precipm == 'T':
        precipm = 0
    else:
        precipm = float(precipm)
    
    if precipm:
        return precipm
    else:
        return 'null'

for i in range(1, 32):
    if i < 10:
        i = '0' + str(i)
    
    print('["2017-' + MONTH + '-' + str(i) + 'T00:00:00", ' + str(pull_rainfall('2017'+MONTH + str(i))) + '],')
    
    # 10 calls per minute limit
    sleep(6.5)

