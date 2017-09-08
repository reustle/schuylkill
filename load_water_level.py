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

res = requests.get(url)
for line in res.iter_lines():
    if line.startswith('#'):
        continue
    
    if 'agency_cd' in line:
        continue
    
    if '5s	15s	20d	6s	14n	10s' in line:
        continue
    
    # Only top of hour
    if ':00' not in line:
        continue
    
    entry = line.split('\t')
    
    print(entry[2] + '\t' + entry[4])

