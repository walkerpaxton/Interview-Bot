import scrapy

class geeksforgeeks_spider(scrapy.Spider):
    name = "gfgs"
    start_urls = ["https://www.tutorialspoint.com/data_structures_algorithms/index.htm"]

    def parse(self, response):
        for link in response.css('ul.toc.chapters li a::attr(href)').getall():
            url = response.urljoin(link)
            if "data_structures_algorithms" in url:
                yield response.follow(url, self.parse_article)
        

    def parse_article(self, response):
        title = response.css('h1::text').get()
        paragraphs = response.css('p::text').getall()
        content = "\n".join(paragraphs).strip()
        yield {
            'url': response.url,
            'title': title,
            'content': content
        }