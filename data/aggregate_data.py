import os
import praw
from dotenv import load_dotenv

# Data Aggregation Script
# Opens every single data file (.bots or .humans) in the scraped/ directory
# Aggregates the account names into all_bots and all_humans in cleaned/ directory

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
                redditor = reddit.redditor(line)
                print(line)
                if hasattr(redditor, 'fullname'):
                    if file_type == "bots":
                        bots.write(line)
                    else:
                        humans.write(line)
            # Print the file path
            print(f"Aggregated File: {file}")