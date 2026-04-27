# FILE NAME: vulture_engine.py
import json
import random
import os

# --- 2026 CONFIGURATION ---
# Actual Meta 2026 Rates (Updated April 2026)
META_2026_RATES = {
    "USA": {"marketing": "$0.025", "utility": "$0.004"},
    "India": {"marketing": "$0.0118", "utility": "$0.0014"},
    "Germany": {"marketing": "$0.1365", "utility": "$0.0500"},
    "UK": {"marketing": "$0.0529", "utility": "$0.0200"}
}

GHL_LINK = "https://www.gohighlevel.com/?fp_ref=your_id" # Replace with your GHL link

def generate_vulture_page(industry, location):
    hooks = [
        f"Is your {industry} business ready for the April 2026 Meta API shift?",
        f"Stop overpaying for {industry} DMs in {location}.",
        f"The 2026 guide to {industry} automation in {location}."
    ]
    
    stack_pitch = f"""
    <div class='vulture-stack'>
        <h3>The 2026 'Wedding Fund' Automation Stack</h3>
        <p>ManyChat handles the DMs, but <strong>GoHighLevel</strong> closes the deals. 
        Integrating these two can save you 40% on lead acquisition costs.</p>
        <a href='{GHL_LINK}' class='cta'>Claim your GHL + ManyChat Strategy Session</a>
    </div>
    """

    return f"""
    <h1>{random.choice(hooks)}</h1>
    <p>In {location}, Meta's 2026 marketing rate is {META_2026_RATES.get(location, META_2026_RATES['USA'])['marketing']}. 
    Our Vulture Protocol ensures you only pay for what converts.</p>
    {stack_pitch}
    """

# --- EXECUTION ---
# Create output directory if it doesn't exist
if not os.path.exists('industries'):
    os.makedirs('industries')

industries = ["Real Estate", "Gyms", "E-commerce", "SaaS", "Dentists"]
locations = list(META_2026_RATES.keys())

# Generate batch
for i in range(50):
    ind = random.choice(industries)
    loc = random.choice(locations)
    page_code = generate_vulture_page(ind, loc)
    
    # Save with standardized naming: industry-location-2026.html
    filename = f"industries/{ind.lower().replace(' ', '-')}-{loc.lower()}-2026.html"
    with open(filename, "w") as f:
        f.write(page_code)

print(f"Vulture Batch Complete: 50 pages generated in /industries/")
