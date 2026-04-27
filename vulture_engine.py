# Updated section for vulture_engine.py
def run_vulture_batch(batch_size=50):
    # 1. Load the log of what we've already done
    if os.path.exists('published_log.txt'):
        with open('published_log.txt', 'r') as f:
            already_published = set(line.strip() for line in f)
    else:
        already_published = set()

    count = 0
    while count < batch_size:
        ind = random.choice(industries)
        loc = random.choice(locations)
        page_id = f"{ind}-{loc}" # The unique fingerprint
        
        # 2. Only generate if it's NOT in the log
        if page_id not in already_published:
            page_code = generate_vulture_page(ind, loc)
            filename = f"industries/{ind.lower().replace(' ', '-')}-{loc.lower()}-2026.html"
            
            with open(filename, "w") as f:
                f.write(page_code)
            
            # 3. Add to the log so we don't do it again
            with open('published_log.txt', 'a') as f:
                f.write(f"{page_id}\n")
            
            already_published.add(page_id)
            count += 1
            print(f"Generated: {filename}")

run_vulture_batch(50)
