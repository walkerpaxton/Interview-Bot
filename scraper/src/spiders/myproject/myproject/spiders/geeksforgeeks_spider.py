import scrapy

class geeksforgeeks_spider(scrapy.Spider):
    name = "gfgcs"
    start_urls = ["https://www.tutorialspoint.com/data_structures_algorithms/index.htm"]

    def parse(self, response):
        count = 0
        for link in response.css('ul.toc.chapters li a::attr(href)').getall():
            url = response.urljoin(link)
            if "data_structures_algorithms" in url and count < 5:
                yield response.follow(url, self.parse_article)
                count += 1

    def parse_article(self, response):
        title = response.css('h1::text').get()
        paragraphs = response.css('p::text').getall()
        content = "\n".join(paragraphs).strip()
        yield {
            'url': response.url,
            'title': title,
            'content': content
        }