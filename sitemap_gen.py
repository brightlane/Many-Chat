import os
from datetime import datetime

DOMAIN = "https://brightlane.github.io/Many-Chat"

def generate_sitemap():
    pages = os.listdir('industries')
    sitemap_xml = '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'

    for page in pages:
        if page.endswith('.html'):
            url = f"{DOMAIN}/industries/{page}"
            sitemap_xml += f"  <url><loc>{url}</loc><lastmod>{datetime.now().strftime('%Y-%m-%d')}</lastmod></url>\n"

    sitemap_xml += '</urlset>'
    with open('sitemap.xml', 'w') as f: f.write(sitemap_xml)

generate_sitemap()
