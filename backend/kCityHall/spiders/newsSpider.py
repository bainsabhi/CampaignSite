import scrapy

from kCityHall.items import KcityhallItem
from kCityHall.selectors import SELECTORS


class NewsspiderSpider(scrapy.Spider):
    name = "newsSpider"
    allowed_domains = ["www.kitchener.ca"]
    start_urls = ["https://www.kitchener.ca/news/news"]
    selectors = SELECTORS

    def parse(self, response):
        list_item_selector = self.selectors["list"]["list_item"]
        link_selector = self.selectors["list"]["news_links"]
        date_selector = self.selectors["list"]["list_date"]

        index = 0
        for list_item in response.css(list_item_selector):
            link = list_item.css(link_selector).get()
            list_date = list_item.css(date_selector).get()
            if not link or not list_date:
                continue

            absolute_link = response.urljoin(link)
            yield scrapy.Request(
                url=absolute_link,
                callback=self.parse_detail,
                meta={"list_date": list_date.strip(), "index": index},
            )
            index += 1

    def parse_detail(self, response):
        title_selector = self.selectors["detail"]["article_title"]
        date_selector = self.selectors["detail"]["article_date"]
        content_selector = self.selectors["detail"]["article_content"]

        title = response.css(title_selector).get()
        date = response.css(date_selector).get()
        paragraphs = []
        for paragraph_node in response.css(content_selector):
            parts = paragraph_node.css("::text").getall()
            paragraph = " ".join(part.strip() for part in parts).strip()
            paragraph = paragraph.replace("\u00a0", " ")
            if paragraph:
                paragraphs.append(paragraph)
        if paragraphs:
            paragraphs.pop()

        item = KcityhallItem()
        item["url"] = response.url
        item["date"] = (date or "").strip() or response.meta.get("list_date")
        item["title"] = (title or "").strip() or None
        item["content"] = paragraphs or None
        item["index"] = response.meta.get("index")
        yield item
