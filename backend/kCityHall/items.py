# Define here the models for your scraped items
#
# See documentation in:
# https://docs.scrapy.org/en/latest/topics/items.html

import scrapy

class KcityhallItem(scrapy.Item):
    url     = scrapy.Field()
    date    = scrapy.Field()
    title   = scrapy.Field()
    content = scrapy.Field()
    index   = scrapy.Field()
