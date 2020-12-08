#!/usr/bin/python3

import scrapy
import json

class QuotesSpider(scrapy.Spider):
    name = "vert"
    parent_dict = dict()
    file = None
    start_urls = [
        'https://www.aujardin.info/plantes/guzmania.php',
        'https://www.aujardin.info/plantes/ananas_bracteatus.php',
    ]

    def debugLog(self, data):
        self.file.write(str(data))

    def start_requests(self):
        self.file = open('debug.html', 'w+')
        base_urls = [
            'https://www.aujardin.info/plantes/arbres-arbustes-ete.php',
            'https://www.aujardin.info/plantes/arbres-arbustes-printemps.php',
            'https://www.aujardin.info/plantes/aromatiques-condimentaires-officinales.php',
            'https://www.aujardin.info/plantes/encyclopedie-balcon.php',
            'https://www.aujardin.info/plantes/encyclopedie-bassin.php',
            'https://www.aujardin.info/plantes/encyclopedie-cactus.php',
            'https://www.aujardin.info/champignons/',
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

    def parseFromCategories(self, response):
        # Creates a dict with the plan type in it
        self.parent_dict = dict({
            'category': response.css('div#centercontentpage').xpath('./child::h1/text()')[0].extract(),
            'data': []
        })

        # Temporary file
        fname = response.meta.get('url_name') + '.json'
        tmp = open(fname, 'w+')
        json.dump(self.parent_dict, tmp, ensure_ascii=False, indent=2)
        tmp.close()

        # Get all links in the current page
        plant_links = response.css('ul.rubrique').xpath('./child::li/a/@href').extract()
        for l in plant_links:
            yield scrapy.Request(url=l, callback=self.parse, meta={'fname': fname})

    # This fuction is used to get write data from a single plant
    def parse(self, response):
        fname = response.meta.get('fname')
        parent_d = json.loads(open(fname).read())

        d = dict({'Nom': response.css('article').xpath('./child::h1/text()')[0].extract()})
        for attr in response.css('div.description3').xpath('./child::div'):
            # Get tags corresponding to the data we are looking for
            attr_tags = attr.xpath('./strong')
            # Extract data from the tags
            for n in attr_tags:
                tab = n.xpath('./following-sibling::span/text()')
                if (len(tab) == 0):
                    tab = n.xpath('./following-sibling::span/*/text()')
                # f.write(str(tab.extract()) + '\n')
                d[str(n.xpath('./text()').extract()[0])] = tab.extract() if len(tab) > 1 else tab[0].extract()

        parent_d['data'].append(d)
        tmp = open(fname, 'w+')
        json.dump(parent_d, tmp, ensure_ascii=False, indent=2)
        tmp.close()
        # self.debugLog(parent_d)