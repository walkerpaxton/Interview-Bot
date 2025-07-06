import scrapy
import os
import pdfplumber

class file_spider(scrapy.Spider):
    name = "pdfs"
    def start_requests(self):
        folder_name = 'dsa_slides'
        
        for file in os.listdir(folder_name):
            file_path = os.path.join(folder_name, file)
            self.logger.info(f"Reading PDF: {file_path}")
            yield scrapy.Request(
                    url=f"file://{os.path.abspath(file_path)}",
                    callback=self.parse_pdf,
                    meta={'file_path': file_path}
                )

    def parse_pdf(self, response):
        file_path = response.meta['file_path']
        text = ""
        with pdfplumber.open(file_path) as pdf:
            for page in pdf.pages:
                text += ' '.join([word['text'] for word in page.extract_words()]) + "\n"
        yield {
            'file': file_path,
            'content': text.strip()
        }