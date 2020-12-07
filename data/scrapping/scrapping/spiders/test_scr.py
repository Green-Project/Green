#!/usr/bin/python3

import scrapy

# class TestSpider(scrapy.Spider):
#     name = "quotes"

#     def start_request(self):
#         urls = [
#             'http://nature.jardin.free.fr/2015/citrus-australasica.html',
#             'http://quotes.toscrape.com/page/2/',
#         ]
#         for url in urls:
#             yield scrapy.Request(url=url, callback=self.parse)

#     def parse(self, response):
#         self.log(response.body)
#         page = response.url.split("/")[-2]
#         filename = f'quotes-{page}.html'
#         with open(filename, 'wb') as f:
#             f.write(response.body)
#         self.log(f'Saved file {filename}')

class QuotesSpider(scrapy.Spider):
    name = "quotes"
    start_urls = [
        'http://nature.jardin.free.fr/2015/citrus-australasica.html',
        # 'http://quotes.toscrape.com/page/1/',
        # 'http://quotes.toscrape.com/page/2/',
    ]

    def parse(self, response):
        f = open('testfile2.html', 'w+')
        for quote in response.css('font'):
            f.write(quote.get())

        # for quote in response.css('div.quote'):
        #     yield {
        #         'text': quote.css('span.text::text').get(),
        #         'author': quote.css('small.author::text').get(),
        #         'tags': quote.css('div.tags a.tag::text').getall(),
        #     }
        f.close()