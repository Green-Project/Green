#!/usr/bin/python3

import scrapy
import json

class QuotesSpider(scrapy.Spider):
    name = "quotes"
    start_urls = [
        'https://www.aujardin.info/plantes/guzmania.php',
        'https://www.aujardin.info/plantes/ananas_bracteatus.php',
    ]

    def parse(self, response):
        d = dict()
        # f = open('testfile.txt', 'w+')
        for attr in response.css('div.description3').xpath('./child::div'):
            # Get tags corresponding to the data we are looking for
            attr_tags = attr.xpath('./strong')
            # Extract data from the tags
            for n in attr_tags:
                # f.write(str(n.xpath('./text()').extract()[0]) + ' : ')
                tab = n.xpath('./following-sibling::span/text()')
                if (len(tab) == 0):
                    tab = n.xpath('./following-sibling::span/*/text()')
                # f.write(str(tab.extract()) + '\n')
                d[str(n.xpath('./text()').extract()[0])] = tab.extract() if len(tab) > 1 else tab[0].extract()
        with open("plants.json", "a+", encoding='utf-8') as e :
            json.dump(d, e, ensure_ascii=False, indent=2)
        # f.close()