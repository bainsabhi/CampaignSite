import sys
import requests
import json 
from bs4 import BeautifulSoup
if len(sys.argv) > 1:
    doc_id = sys.argv[1]

def fetch_and_group_articles(doc_id):
    """
    Fetch Google Doc and group flat HTML into structured articles.
    """
    url = f"https://docs.google.com/document/d/{doc_id}/export?format=html"
    print("Your url is")
    print(url)
    response = requests.get(url)
    soup = BeautifulSoup(response.content, 'html.parser')
    # Find all h1 tags
    headings = soup.find_all('h1')
    print(headings)
    
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

# Now you have structured data
articles = fetch_and_group_articles(doc_id)

# Each article contains all its sibling elements grouped together
for article in articles:
    print(f"{article}")

json_string = json.dumps(articles,ensure_ascii=False, indent=2)
with open('/Users/abhi/Desktop/Projects/PaulSite/public/blog.json', 'w', encoding='utf-8') as f:
    f.write(json_string)