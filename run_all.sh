./crawl_gauge.py && 
./crawl_precip.py &&
./read_data.py > docs/data.js &&
git add docs/data.js data.db &&
git commit -m "Updating data" &&
git push
