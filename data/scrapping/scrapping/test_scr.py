#!/usr/bin/python3

import scrapy

class TestSpider(scrapy.Spider):
    name = "quotes"

    def start_request(self):
        urls = [
            'http://stackoverflow.com/questions/3233614/download-a-full-page-with-scrapy',
        ]
        for url in urls:
            yield scrapy.Request(url=url, callback=self.parse)

    def parse(self, response):
        filename = response.url.split('/')[-1] + '.html'
        with open(filename, 'wb') as f:
            f.write(response.body)
        self.log(f'Saved file {filename}')