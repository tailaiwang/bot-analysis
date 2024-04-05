import praw
import os
from dotenv import load_dotenv

# Basic Account Scraping Script
# Grabs top comments from given account

# Access an environment variable
load_dotenv()
client_id = os.getenv("CLIENT_ID")
client_secret = os.getenv("CLIENT_SECRET")

reddit = praw.Reddit(
    client_id=client_id,
    client_secret=client_secret,
    user_agent="CS492 Bot Analysis",
)


subreddit = input("Enter the name of the subreddit you'd like to scrape [CASE SENSITIVE]: ")
type = input("What type of accounts does this subreddit contain [bots/humans]: ")
accounts = []

for submission in reddit.subreddit(subreddit).new(limit=1000):
    if submission.author != None:
        name = submission.author.name
        if name not in accounts:
            accounts.append(name)

file = open("scraped/" + subreddit + "." + type, "w")
count = 0
for account in accounts:
    file.write(account + "\n")
    count += 1
file.close()
print("Successfully wrote " + str(count) + " accounts to " + subreddit + "." + type)