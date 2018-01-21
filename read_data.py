#!/usr/bin/env python3

import sqlite3
import json
from pprint import pprint
from datetime import datetime, timedelta


DB_FILE = 'data.db'
HISTORY_LENGTH = 30

# Connect to database
db = sqlite3.connect(DB_FILE)


# Read values
start_date = (datetime.now() - timedelta(days=HISTORY_LENGTH)).strftime('%Y-%m-%d')
gauge_rows = db.execute('select timestamp, reading from GaugeData where timestamp >= "{start_date}T00:00:00" order by timestamp asc'.format(start_date=start_date))
precip_rows = db.execute('select timestamp, reading from PrecipData where timestamp >= "{start_date}T00:00:00" order by timestamp asc'.format(start_date=start_date))

gauge_json = json.dumps(list(gauge_rows))
precip_json = json.dumps(list(precip_rows))

print('var gaugeSource = {0};'.format(gauge_json))
print('var precipSource = {0};'.format(precip_json))

