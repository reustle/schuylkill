access_token = '02735a29e901b1f3'
BASE_URL = 'https://api.wunderground.com/api/{access_token}/history_20170905/q/19601.json'

url = BASE_URL.format(**{
    'access_token': access_token,
})

print url

