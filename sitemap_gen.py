import os
from datetime import datetime

DOMAIN = "https://brightlane.github.io/Many-Chat"

def generate_sitemap():
    pages = os.listdir('industries')
    sitemap_xml = '<?xml version="1.0" encoding="UTF-8"?>\n'
    sitemap_xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'

    for page in pages:
        if page.endswith('.html'):
            url = f"{DOMAIN}/industries/{page}"
            lastmod = datetime.now().strftime('%Y-%m-%d')
            sitemap_xml += f"  <url>\n    <loc>{url}</loc>\n    <lastmod>{lastmod}</lastmod>\n    <changefreq>daily</changefreq>\n  </url>\n"

    sitemap_xml += '</urlset>'
    
    with open('sitemap.xml', 'w') as f:
        f.write(sitemap_xml)
    print("Vulture Sitemap Updated: sitemap.xml")

generate_sitemap()
