SELECTORS = {
    "list": {
        "list_item": 'li.gs-feed-list-item.item.item_text-right.text-left.divider-lines',
        "news_links": 'a.gs-feed-list-title[href*="news/posts/"]::attr(href)',
        "list_date": ".gs-feed-list-date::text",
    },
    "detail": {
        "article_title": "h1.heading.main.base-heading::text",
        "article_date": "span.gs-news-details-date::text",
        "article_content": "div.text.base-text p",
    }
}
