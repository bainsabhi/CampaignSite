import os
import requests
import json
from bs4 import BeautifulSoup
from pathlib import Path

DOC_ID_ENV = "BLOG_DOC_ID"

def fetch_and_group_articles(doc_id):
    """
    Fetch Google Doc and group flat HTML into structured articles.
    """
    url = f"https://docs.google.com/document/d/{doc_id}/export?format=html"
    response = requests.get(url, timeout=30)
    response.raise_for_status()
    soup = BeautifulSoup(response.content, 'html.parser')
    # Find all h1 tags
    headings = soup.find_all('h1')
    
    articles = []
    
    for heading in headings:
        # Create a grouped structure
        article = {
            'headline': heading.get_text().strip(),
            'date' :'',
            'elements': []  # All content elements
        }
        
        # Collect all siblings until next h1
        current = heading.next_sibling 
        # Ignore the emmpty line after headline
        # get the date from next sibling
        article['date'] = heading.next_sibling.get_text().strip()
        current = current.next_sibling
        # Change value for current as next element on html
        while current and (not hasattr(current, 'name') or current.name != 'h1'):
            if hasattr(current, 'name') and current.name == 'p':
                text = current.get_text().strip()
                if text:
                    #article['date'] = 'WHATEVER'
                    article['elements'].append(text)
        
            current = current.next_sibling
            
        if article['elements']:
            articles.append(article)
    return articles

def main():
    doc_id = os.getenv(DOC_ID_ENV, "").strip()
    if not doc_id:
        raise SystemExit(
            f"Missing required environment variable: {DOC_ID_ENV}. "
            "Set it before running this script."
        )

    # Now you have structured data
    articles = fetch_and_group_articles(doc_id)
    json_string = json.dumps(articles, ensure_ascii=False, indent=2)

    # Use relative path: backend/kCityHall/blog.py -> public/data/blog.json
    output_path = Path(__file__).parent.parent.parent / "public" / "data" / "blog.json"

    # Ensure output directory exists
    output_path.parent.mkdir(parents=True, exist_ok=True)

    with open(output_path, 'w', encoding='utf-8') as f:
        f.write(json_string)


if __name__ == "__main__":
    main()
