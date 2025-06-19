# Scraper

This is the automated scraping service for Interview Bot. It is built with Python using Scrapy, requests/BeautifulSoup, and Selenium for dynamic content. The scraper periodically fetches new interview questions and solutions from sources like LeetCode and GeeksforGeeks, only committing new or updated content to the database.

## Main Folders
- `src/spiders/`: Scrapy spiders or scraping scripts
- `src/pipelines/`: Data cleaning, deduplication, diffing
- `src/utils/`: Helper functions (proxies, delays, etc.) 