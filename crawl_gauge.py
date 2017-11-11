import requests
from pprint import pprint

BASE_URL = 'https://nwis.waterdata.usgs.gov/usa/nwis/uv/'
ENDPOINT_URL = '?format=rdb&period=&begin_date={begin_date}&end_date={end_date}&cb_00065=on&site_no={site_number}'

begin_date = '2017-09-04'
end_date = '2019-01-01'
#site_number = '01471510%2C01472000'
site_number = '01472000'

url = BASE_URL + ENDPOINT_URL.format(**{
    'begin_date': begin_date,
    'end_date': end_date,
    'site_number': site_number,
})

# Load existing data
handle = open('schuylkill/water_data.js')
existing_list = handle.read()
handle.close()
existing_list = existing_list[0:-2]

res = requests.get(url)
for line in res.iter_lines():
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
    
    entry = line.split('\t')
    
    timestamp = entry[2]
    timestamp = timestamp.replace(' ', 'T')
    timestamp += ':00'
    
    output = '["{timestamp}", {value}],'.format(**{
        'timestamp': timestamp,
        'value': entry[4]
    })
    
    if timestamp not in existing_list:
        existing_list += '\n' + output

existing_list += '\n]'

handle = open('water_data.js', 'w+')
handle.write(existing_list)
handle.close()

