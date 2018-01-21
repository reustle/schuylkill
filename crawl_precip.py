#!/usr/bin/env python3

import logging
import requests
import sqlite3
import datetime
from datetime import datetime, timedelta
from pprint import pprint
from time import sleep
from dateutil import parser

logging.basicConfig(level=logging.INFO)

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


def get_last_crawled_date():
    """ Check the DB to see when the last crawled date was """
    
    latest_row = db.execute('select timestamp from PrecipData order by timestamp desc limit 1;')
    
    return parser.parse(list(latest_row)[0][0].split('T')[0])


def crawl_and_save(dt):
    """ Crawl precip for a date, and save it to the db """
    
    timestamp = dt.strftime('%Y-%m-%d') + "T00:00:00"
    timestamp_no_hyphen = dt.strftime('%Y%m%d')
    reading = pull_precip(timestamp_no_hyphen)
    
    insert_reading_db(timestamp, reading)
    logging.info(timestamp + ' ' + str(reading))
    sleep(6.5)


# Recrawl last crawled date
last_crawl = get_last_crawled_date()
crawl_and_save(last_crawl)

# Keep crawling until yesterday
# ototoi = おととい = day before yesterday
ototoi = datetime.utcnow() - timedelta(days=2)

while last_crawl < ototoi:
    last_crawl = last_crawl + timedelta(days=1)
    crawl_and_save(last_crawl)

