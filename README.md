# Paul Bains Campaign Site

A React campaign website for Paul Bains, built with Vite and deployed on Vercel. News and blog content is pulled automatically from external sources via a nightly GitHub Actions cron job and served as static JSON.

---

## Tech Stack

| Layer | Tool |
|---|---|
| Frontend | React 18, Vite, Tailwind CSS, shadcn/ui |
| Routing | React Router DOM |
| Deployment | Vercel |
| Content automation | GitHub Actions, Python, Scrapy |

---

## Local Development

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
```

---

## Project Structure

```
PaulSite/
├── public/
│   └── data/
│       ├── blog.json        # Generated — do not edit manually
│       └── news.json        # Generated — do not edit manually
├── src/                     # React frontend source
├── backend/                 # Python scripts for content generation
│   ├── requirements.txt
│   ├── scrapy.cfg
│   └── kCityHall/
│       ├── blog.py          # Fetches blog from Google Docs
│       ├── pipelines.py     # Scrapy pipeline — writes news.json
│       ├── settings.py      # Scrapy settings
│       └── spiders/
│           └── newsSpider.py  # Scrapes kitchener.ca/news
└── .github/
    └── workflows/
        └── update-content.yml  # Cron job — runs nightly at 11pm UTC
```

---

## Backend Scripts

### `blog.py` — Google Docs Blog Exporter

Fetches a Google Doc by ID, parses its HTML export into structured articles, and writes the result to `public/data/blog.json`.

**How it works:**
1. Reads the Google Doc ID from the `BLOG_DOC_ID` environment variable
2. Fetches the doc as HTML via the Google Docs export URL
3. Parses the HTML with BeautifulSoup — each `<h1>` is treated as an article headline, the next sibling is the date, and following `<p>` tags are the body
4. Writes the structured array to `public/data/blog.json`

**To update the blog content**, edit the Google Doc. The cron job will pick up changes automatically on the next nightly run.

**To update which Google Doc is used**, update the `BLOG_DOC_ID` secret in GitHub → Settings → Secrets → Actions. Paste the document ID — the long string in the doc's URL between `/d/` and `/edit`. The field will always appear blank when editing — that is expected, just type the new value and save.

**To run locally:**
```bash
cd backend
pip install -r requirements.txt
BLOG_DOC_ID=your_doc_id_here python kCityHall/blog.py
```

---

### `newsSpider.py` — Kitchener City Hall News Scraper

A Scrapy spider that scrapes the latest news articles from [kitchener.ca/news](https://www.kitchener.ca/news/news) and writes them to `public/data/news.json`.

**How it works:**
1. Starts at the news listing page and extracts links and dates for each article
2. Follows each link and scrapes the article title, date, and body paragraphs
3. The Scrapy pipeline (`pipelines.py`) collects all items, sorts them by their original list order, and writes `news.json`

**To run locally:**
```bash
cd backend
pip install -r requirements.txt
scrapy crawl newsSpider
```

---

## GitHub Actions Cron Job

The workflow at `.github/workflows/update-content.yml` runs automatically every night at **11pm UTC** and can also be triggered manually.

**What it does on each run:**
1. Checks out the repo on a fresh Ubuntu runner
2. Installs Python and dependencies
3. Runs `blog.py` (injects `BLOG_DOC_ID` secret as an environment variable)
4. Runs `scrapy crawl newsSpider`
5. Commits and pushes `blog.json` and `news.json` back to `main` if either file changed

**To trigger a manual run:**
```bash
gh workflow run update-content.yml --repo bainsabhi/CampaignSite
```
Or go to **GitHub → Actions → Update Blog and News JSON → Run workflow**.

**To monitor runs:**
```bash
# List recent runs
gh run list --repo bainsabhi/CampaignSite --limit 10

# Watch a run live
gh run watch <run-id> --repo bainsabhi/CampaignSite

# View logs for a failed run
gh run view <run-id> --repo bainsabhi/CampaignSite --log-failed
```

---

## Required GitHub Secret

| Secret | Description |
|---|---|
| `BLOG_DOC_ID` | The ID portion of the Google Docs URL for the blog document |
