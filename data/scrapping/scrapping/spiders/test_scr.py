#!/usr/bin/python3

import scrapy

class QuotesSpider(scrapy.Spider):
    name = "quotes"
    start_urls = [
        'https://www.aujardin.info/plantes/ananas_bracteatus.php',
    ]

    def parse(self, response):
        f = open('testfile.html', 'w+')
        f.write(response.css('article').get())
        # for b_tag in response.css('b'):
        #     f.write(b_tag.xpath('text()').get())
        #     f.write("".join(str(b_tag.xpath('./following-sibling::text()').extract())) + '\n')
        #     f.write("".join(str(b_tag.xpath('./following-sibling::i').extract())) + '\n')
        #     f.write(b_tag.xpath('./following-sibling::i').get().strip() + '\n')
        f.close()

        # for quote in response.css('div.quote'):
        #     yield {
        #         'text': quote.css('span.text::text').get(),
        #         'author': quote.css('small.author::text').get(),
        #         'tags': quote.css('div.tags a.tag::text').getall(),
        #     }