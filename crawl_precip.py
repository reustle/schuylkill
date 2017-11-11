#!/usr/bin/env python

import requests
import sqlite3
import datetime
from pprint import pprint
from time import sleep

DB_FILE = 'data.db'
ACCESS_TOKEN = '02735a29e901b1f3'
BASE_URL = 'https://api.wunderground.com/api/{access_token}/history_{crawl_date}/q/19601.json'


# Connect to database
db = sqlite3.connect(DB_FILE)

# Ensure tables exist
db.execute('create table if not exists PrecipData (id integer PRIMARY KEY, timestamp text, reading float)')


def pull_precip(crawl_date):
    """ Pull precip for a date """
    
    url = BASE_URL.format(**{
        'access_token': ACCESS_TOKEN,
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
        return 'NULL'


def insert_reading_db(timestamp, reading):
    """ Update the db with the pulled values """
    
    insert_query = '''
        insert or replace into PrecipData (id, timestamp, reading) values(
            (select id from PrecipData where timestamp = "{timestamp}"),
            "{timestamp}",
            {reading}
        )
    '''.format(timestamp=timestamp, reading=reading)
    
    db.execute(insert_query)
    db.commit()


# Iterate through each day of MONTH
MONTH = '07' # zero pad
DAYS_IN_MONTH = 30 if MONTH in [4, 6, 9, 11] else 31
data_rows = []
for i in range(1, (DAYS_IN_MONTH+1) ):

    # Zero pad the day
    if i < 10:
        i = '0' + str(i)
    
    timestamp = "2017-" + MONTH + "-" + str(i) + "T00:00:00"
    reading = pull_precip('2017' + MONTH + str(i))
    
    insert_reading_db(timestamp, reading)
    
    # 10 calls per minute limit
    print(timestamp + ' ' + str(reading))
    sleep(6.5)

