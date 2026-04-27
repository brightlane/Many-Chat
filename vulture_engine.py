import json
import random
import os

# Load Data
with open('data_source.json', 'r') as f:
    data = json.load(f)

def generate_vulture_page(industry, region_name):
    region = data['regions'][region_name]
    ghl_link = data['project_meta']['global_ghl_link']
    manychat_link = data['project_meta']['global_manychat_link']
    
    return f"""
    <html>
    <head><title>{industry['name']} Automation {region_name} 2026</title></head>
    <body>
        <h1>Stop {industry['pain_point']} in {region_name}</h1>
        <p>Meta's April 2026 marketing rate is {region['marketing_rate']}.</p>
        <div class="vulture-stack">
            <h3>The 2026 Wealth Stack</h3>
            <p>Combine ManyChat for DMs with GoHighLevel for CRM.</p>
            <a href="{manychat_link}">Get ManyChat Free</a> | <a href="{ghl_link}">Get GHL Agency Trial</a>
        </div>
    </body>
    </html>
    """

# Execution Logic
if not os.path.exists('industries'): os.makedirs('industries')

# Check Log
published = set()
if os.path.exists('published_log.txt'):
    with open('published_log.txt', 'r') as f:
        published = set(line.strip() for line in f)

# Generate 50 unique pages
count = 0
while count < 50:
    ind = random.choice(data['industries'])
    loc = random.choice(list(data['regions'].keys()))
    page_id = f"{ind['name']}-{loc}"

    if page_id not in published:
        html = generate_vulture_page(ind, loc)
        filename = f"industries/{ind['name'].lower().replace(' ', '-')}-{loc.lower()}.html"
        with open(filename, 'w') as f: f.write(html)
        with open('published_log.txt', 'a') as f: f.write(f"{page_id}\n")
        published.add(page_id)
        count += 1
