#!/usr/bin/env python3

import sqlite3
import json
from pprint import pprint


DB_FILE = 'data.db'

# Connect to database
db = sqlite3.connect(DB_FILE)


# Read values
gauge_rows = db.execute('select timestamp, reading from GaugeData where timestamp >= "2017-10-10T00:00:00" order by timestamp asc')
precip_rows = db.execute('select timestamp, reading from PrecipData where timestamp >= "2017-10-10T00:00:00" order by timestamp asc')

gauge_json = json.dumps(list(gauge_rows))
precip_json = json.dumps(list(precip_rows))

print('var gaugeSource = {0};'.format(gauge_json))
print('var precipSource = {0};'.format(precip_json))

