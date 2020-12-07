#!/usr/bin/python3

import scrapy

class QuotesSpider(scrapy.Spider):
    name = "quotes"
    start_urls = [
        'https://www.aujardin.info/plantes/guzmania.php',
    ]

    def parse(self, response):
        f = open('testfile2.html', 'w+')
        for attr in response.css('div.description3'):
            inside = attr.xpath('./child::div')
            f.write("".join(inside.extract()))
            # for elem in inside:
            #     f.write("\n".join(elem.get()))
            # f.write("\n".join(inside.xpath('./child::strong').extract()))
            # f.write("\n".join(inside.xpath('./child::span').extract()))
            # yield {
            #     'N. Scientifique': elem.css('div[1]').get()
            # }
        f.close()