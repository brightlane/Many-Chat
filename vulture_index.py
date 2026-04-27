import json
import requests
from oauth2client.service_account import ServiceAccountCredentials

# 1. AUTHENTICATION (You'll need your Google Service Account JSON)
# Get this from Google Cloud Console -> IAM -> Service Accounts
JSON_KEY_FILE = 'service_account.json' 
ENDPOINT = "https://indexing.googleapis.com/v3/urlNotifications:publish"
SCOPES = ["https://www.googleapis.com/auth/indexing"]

def get_access_token():
    creds = ServiceAccountCredentials.from_json_keyfile_name(JSON_KEY_FILE, SCOPES)
    return creds.get_access_token().access_token

def push_to_google(url):
    token = get_access_token()
    headers = {
        "Content-Type": "application/json",
        "Authorization": f"Bearer {token}"
    }
    body = json.dumps({
        "url": url,
        "type": "URL_UPDATED"
    })
    response = requests.post(ENDPOINT, data=body, headers=headers)
    print(f"Index Request Sent for: {url} | Status: {response.status_code}")

# 2. EXECUTION: Index the latest batch from your published_log.txt
# We only index the last 50 lines to stay within the daily free quota
with open('published_log.txt', 'r') as f:
    recent_pages = f.readlines()[-50:]

for entry in recent_pages:
    # Build the live URL
    industry_loc = entry.strip().lower().replace(" ", "-")
    url = f"https://brightlane.github.io/Many-Chat/industries/{industry_loc}-2026.html"
    push_to_google(url)
