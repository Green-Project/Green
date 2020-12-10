#!/usr/bin/python3

import scrapy
import json
import os

class QuotesSpider(scrapy.Spider):
    name = "vert"
    parent_dict = dict()
    file = open('debug.html', 'w+')

    def debugLog(self, data):
        self.file.write(str(data) + '\n')

    def write_json_to_file(self, data, file, mode='w+'):
        tmp = open(file, mode)
        json.dump(data, tmp, ensure_ascii=False, indent=2)
        tmp.close()

    def start_requests(self):
        base_urls = [
            'https://www.aujardin.info/plantes/arbres-arbustes-ete.php',
            'https://www.aujardin.info/plantes/arbres-arbustes-printemps.php',
            'https://www.aujardin.info/plantes/aromatiques-condimentaires-officinales.php',
            'https://www.aujardin.info/plantes/encyclopedie-balcon.php',
            'https://www.aujardin.info/plantes/encyclopedie-bassin.php',
            'https://www.aujardin.info/plantes/encyclopedie-cactus.php',
            'https://www.aujardin.info/plantes/encyclopedie-jardin-feuillage.php',
            'https://www.aujardin.info/plantes/encyclopedie-jardin-ete.php',
            'https://www.aujardin.info/plantes/encyclopedie-jardin-printemps.php',
            'https://www.aujardin.info/plantes/encyclopedie-jardin-automne.php',
            'https://www.aujardin.info/plantes/encyclopedie-jardin-hiver.php',
            'https://www.aujardin.info/plantes/fleurs-vivaces-ete.php',
            'https://www.aujardin.info/plantes/fleurs-vivaces-printemps.php',
            'https://www.aujardin.info/plantes/encyclopedie-haies.php',
            'https://www.aujardin.info/plantes/encyclopedie-jardin-tropical.php',
            'https://www.aujardin.info/plantes/encyclopedie-jardin-sud.php',
            'https://www.aujardin.info/plantes/encyclopedie-orchidees.php',
            'https://www.aujardin.info/plantes/palmiers-bananiers-cycas.php',
            'https://www.aujardin.info/plantes/encyclopedie-potager.php',
            'https://www.aujardin.info/plantes/sauvages.php',
            'https://www.aujardin.info/plantes/encyclopedie-verger.php'
        ]
        for url in base_urls:
            yield scrapy.Request(url=url, callback=self.parseFromCategories, meta={'url_name': url.split('/')[-1][:-4]})

    def parseDataFromTab(self, tab):
        tab = [str(elem.extract()).strip() for elem in tab if str(elem.extract()).strip()]
        return tab if (len(tab) > 1) else tab[0]

    def parseFromCategories(self, response):
        # Creates a dict with the plan type in it
        self.parent_dict = dict({
            'category': response.css('div#centercontentpage').xpath('./child::h1/text()')[0].extract(),
            'data': []
        })
        # File to fill
        fname = response.meta.get('url_name') + '.json'
        if (fname == '.json'): return
        self.write_json_to_file({
            'category': response.css('div#centercontentpage').xpath('./child::h1/text()')[0].extract(),
            'data': []
        }, fname)
        # Get all links in the current page
        plant_links = response.css('ul.rubrique').xpath('./child::li/a/@href').extract()
        for l in plant_links:
            yield scrapy.Request(url=l, callback=self.parseFromPlant, meta={'fname': fname})

    # This fuction is used to get write data from a single plant
    def parseFromPlant(self, response):
        fname = response.meta.get('fname')
        parent_dict = json.loads(open(fname).read())
        article = response.css('article')

        d = dict({
            'Nom': article.xpath('./child::h1/text()')[0].extract(),
            'ImgUrl': article.xpath('./child::figure/picture/img/@src')[0].extract()
        })
        for attr in response.css('div.description3').xpath('./child::div'):
            # Get tags corresponding to the data we are looking for
            attr_tags = attr.xpath('./strong')
            # Extract data from the tags
            for n in attr_tags:
                tab = n.xpath('./following-sibling::span/text()')
                if (len(tab) == 0):
                    tab = n.xpath('./following-sibling::span/*/text()')
                d[str(n.xpath('./text()').extract()[0]).strip()] = self.parseDataFromTab(tab)
        parent_dict['data'].append(d)
        self.write_json_to_file(parent_dict, fname)