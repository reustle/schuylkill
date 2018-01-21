#!/usr/bin/env python3

import logging
import requests
import sqlite3
from pprint import pprint
from datetime import datetime, timedelta
from dateutil import parser

#logging.basicConfig(level=logging.DEBUG)

DB_FILE = 'data.db'
BASE_URL = 'https://nwis.waterdata.usgs.gov/usa/nwis/uv/'
ENDPOINT_URL = '?format=rdb&period=&begin_date={start_date}&end_date={end_date}&cb_00065=on&site_no={site_number}'


# Connect to database
db = sqlite3.connect(DB_FILE)

# Ensure tables exist
db.execute('create table if not exists GaugeData (id integer PRIMARY KEY, timestamp text, reading float)')


def crawl_data():
    """ Crawl Gauge API Data """
    
    # TODO pull last crawled date, use that -5 or something
    start_date = get_last_crawled_date() - timedelta(days=5)
    start_date = start_date.strftime('%Y-%m-%d')
    end_date = '2020-01-01'
    #site_number = '01471510%2C01472000'
    site_number = '01472000'

    url = BASE_URL + ENDPOINT_URL.format(**{
        'start_date': start_date,
        'end_date': end_date,
        'site_number': site_number,
    })
    
    logging.debug('URL: ' + url)

    # Load Data
    data_rows = []
    res = requests.get(url)
    for line in res.iter_lines():
        line = str(line)
        if line.startswith('#'):
            continue
        
        if 'agency_cd' in line:
            continue
        
        # If its column header row
        if '5s	15s	20d	6s	14n	10s' in line:
            continue
        
        # Only top of hour, ignore 15min intervals
        if ':00' not in line:
            continue
        
        entry = line.split('\\t')
        
        reading = entry[4]
        
        # If reading is 'Eqp' which I think is equip failure (did that during ice-out)
        if reading == 'Eqp':
            continue
        
        timestamp = entry[2]
        timestamp = timestamp.replace(' ', 'T')
        timestamp += ':00'
        
        data_rows.append((timestamp, entry[4]))
    
    return data_rows


def update_db(data_rows):
    """ Update the db with the given crawled rows """
    """ format: [(timestamp, value), (timestamp, value), ...] """
    
    for entry in data_rows:
        
        insert_query = '''
            insert or replace into GaugeData (id, timestamp, reading) values(
                (select id from GaugeData where timestamp = "{timestamp}"),
                "{timestamp}",
                {reading}
            )
        '''.format(timestamp=entry[0], reading=entry[1])
        
        logging.debug(insert_query)
        
        db.execute(insert_query)
    
    db.commit()


def get_last_crawled_date():
    """ Check the DB to see when the last crawled date was """
    
    latest_row = db.execute('select timestamp from GaugeData order by timestamp desc limit 1;')
    
    return parser.parse(list(latest_row)[0][0].split('T')[0])


update_db(crawl_data())

