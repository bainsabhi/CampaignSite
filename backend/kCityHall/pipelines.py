# Define your item pipelines here
#
# Don't forget to add your pipeline to the ITEM_PIPELINES setting
# See: https://docs.scrapy.org/en/latest/topics/item-pipeline.html


import json
from pathlib import Path

from itemadapter import ItemAdapter


class KcityhallPipeline:
    def __init__(self):
        self.items = []

    @classmethod
    def from_crawler(cls, crawler):
        return cls()

    def process_item(self, item, spider):
        adapter = ItemAdapter(item)
        self.items.append(adapter.asdict())
        return item

    def close_spider(self, spider):
        # Route output based on spider name so different sources get separate files.
        if spider.name == "newsSpider":
            ordered = sorted(self.items, key=lambda i: i.get("index", 0))
            for entry in ordered:
                entry.pop("index", None)
            payload = json.dumps(ordered, ensure_ascii=True, indent=2)
            # Use relative path: backend/kCityHall/pipelines.py -> public/data/news.json
            output_path = Path(__file__).parent.parent.parent / "public" / "data" / "news.json"
        else:
            # Fallback: write whatever was collected.
            payload = json.dumps(self.items, ensure_ascii=True, indent=2)
            output_path = Path("output.json")

        # Ensure output directory exists
        output_path.parent.mkdir(parents=True, exist_ok=True)

        with output_path.open("w", encoding="utf-8") as handle:
            handle.write(payload)
