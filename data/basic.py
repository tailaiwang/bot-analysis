import praw
import os
from dotenv import load_dotenv


load_dotenv()

# Access an environment variable
client_id = os.getenv("CLIENT_ID")
client_secret = os.getenv("CLIENT_SECRET")

reddit = praw.Reddit(
    client_id=client_id,
    client_secret=client_secret,
    user_agent="CS492 Bot Analysis",
)


for submission in reddit.subreddit("politics").new(limit=10):
    print(submission.author.name)
