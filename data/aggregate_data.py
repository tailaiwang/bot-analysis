import os
import praw
from dotenv import load_dotenv
import time

# Data Aggregation Script
# Opens every single data file (.bots or .humans) in the scraped/ directory
# Aggregates the account names into all_bots and all_humans in cleaned/ directory
# Ensures that no suspended or shadowbanned accounts are added to the final directory

load_dotenv()
client_id = os.getenv("CLIENT_ID")
client_secret = os.getenv("CLIENT_SECRET")

reddit = praw.Reddit(
    client_id=client_id,
    client_secret=client_secret,
    user_agent="CS492 Bot Analysis",
)

root_dir = 'scraped/'
bots = open("cleaned/all_bots.bots", "w")
humans = open("cleaned/all_humans.humans", "w")
# Walk through all subdirectories
rate_limit_count = 0
for root, dirs, files in os.walk(root_dir):
    for file in files:
        # Construct the full file path
        file_path = os.path.join(root, file)
        # Open the file
        with open(file_path, 'r') as f:
            # Read the file content and assign to correct cleaned file
            content = f.readlines()
            file_type = file.split(".")[1]
            for line in content:
                line = line.strip()
                rate_limit_count += 1
                redditor = reddit.redditor(line)
                try:
                    if hasattr(redditor, 'fullname'):
                        if file_type == "bots":
                            bots.write(line)
                        else:
                            humans.write(line)
                except:
                    print(f"Ran into suspended/shadowbanned account {line}")

                if rate_limit_count % 100 == 0:
                    time.sleep(30)

            # Print the file path
            print(f"Aggregated File: {file}")