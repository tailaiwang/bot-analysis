import praw
import logging
import os
from sklearn.ensemble import RandomForestClassifier
import pickle
from dotenv import load_dotenv

import pandas as pd
import numpy as np
import time
import warnings



from sklearn.feature_extraction.text import CountVectorizer
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity
from statistics import median

# Metrics class which is used to evaluate whether a user is a bot

load_dotenv()
client_id = os.getenv("CLIENT_ID")
client_secret = os.getenv("CLIENT_SECRET")


class metrics:

    def __init__(self):
        pass

    def getAuthorData(self, r, author):
        user = praw.models.Redditor(r, name=str(author))
        author_df = pd.DataFrame(
            columns=['author', 'body', 'created_utc', 'parent_created_utc', 'isRoot'])
        comments = user.comments.new(limit=50)
        for comment in comments:
            new_row_df = pd.DataFrame({
                'author': [comment.author],
                'body': [comment.body],
                'created_utc': [comment.created_utc],
                'parent_created_utc': [comment.parent().created_utc],
                'isRoot': [comment.is_root]
            })

            with warnings.catch_warnings():
                warnings.filterwarnings("ignore", category=FutureWarning)
                author_df = pd.concat([author_df, new_row_df], ignore_index=True)

        author_df = self.__cleanText(author_df)
        return author_df

    def __getAuthorText(self, data):
        return data['body'].tolist()

    def __cleanText(self, data):
        data['body'] = data['body'].str.lower()
        data['body'] = data['body'].str.replace('.', ' ')
        data['body'] = data['body'].str.replace('/', ' ')
        data['body'] = data['body'].str.replace(':', ' ')
        data['body'] = data['body'].str.replace('-', ' ')
        data['body'] = data['body'].str.replace('_', ' ')
        return data

    def __getCommentDiff(self, data):
        return data['created_utc']-data['parent_created_utc']

    def avgTFIDFCosineSimilarity(self, data):
        data = self.__cleanText(data)
        text = self.__getAuthorText(data)
        text = filter(None, text)

        vectorizer = TfidfVectorizer(stop_words=None, strip_accents='ascii')
        v = vectorizer.fit_transform(text)
        avgCosSimilarity = cosine_similarity(v).mean()

        return avgCosSimilarity

    def avgCountCosineSimilarity(self, data):
        data = self.__cleanText(data)
        text = self.__getAuthorText(data)
        text = filter(None, text)

        vectorizer = CountVectorizer(stop_words=None, strip_accents='ascii')
        v = vectorizer.fit_transform(text)
        avgCosSimilarity = cosine_similarity(v).mean()

        return avgCosSimilarity

    def avgCommentRate(self, data):
        numComments = data['created_utc'].count()
        delta = (data['created_utc'].max() - data['created_utc'].min())
        return numComments/delta

    def topLevelProportion(self, data):
        return data['isRoot'].sum()/data['isRoot'].count()

    # getting parent comments takes a very long time

    def getMedianReplyTime(self, data):
        diff = self.__getCommentDiff(data)
        avgReplyTime = median(diff)
        return avgReplyTime

    def aggregateMetrics(self, data):
        metrics_df = pd.DataFrame(columns=[
                                  'count_similarity', 'tfidf_similarity', 'comment_rate', 'top_level_proportion'])

        new_row_df = pd.DataFrame({
            'count_similarity': [self.avgCountCosineSimilarity(data)],
            'tfidf_similarity': [self.avgTFIDFCosineSimilarity(data)],
            'comment_rate': [self.avgCommentRate(data)],
            'top_level_proportion': [self.topLevelProportion(data)],
            'reply_time': [self.getMedianReplyTime(data)]
        })
        with warnings.catch_warnings():
            warnings.filterwarnings("ignore", category=FutureWarning)
            metrics_df = pd.concat([metrics_df, new_row_df], ignore_index=True)
        return metrics_df


class bot:

    def __init__(self):
        pass

    def botLogin(self):
        try:
            r = praw.Reddit(
                client_id=client_id,
                client_secret=client_secret,
                user_agent="CS492 Bot Analysis")
        except:
            print('Login Failed')

        return r

    # Outputs probability that a user is a bot
    def __makePrediction(self, data):
        abspath = os.path.abspath(__file__)
        dname = os.path.dirname(abspath)
        os.chdir(dname)

        try:
            with open("tourond_model.pkl", 'rb') as file:
                model = pickle.load(file)
                return model.predict_proba(data)
        except:
            logging.error('No .pkl file found')

    def runBot(self, r, auth):
        print('Running...')

        met = metrics()

        authData = met.getAuthorData(r, auth)

        botProbability = str(self.__makePrediction(
            met.aggregateMetrics(authData))[:, 1])
        botProbability = botProbability.replace('[', '')
        botProbability = botProbability.replace(']', '')
        print("User " + str(auth) +
                        " is a bot with a probability of " +
                        str(botProbability))
        return botProbability


redditBot = bot()
r = redditBot.botLogin()


all_bots = open("cleaned/creme_training.bots", "r")
all_humans = open("cleaned/all_humans.humans", "r")
bot_count = 0
bot_score = 0
human_count = 0
human_score = 0
for b in all_bots.readlines():
    b = b.strip()
    try:
        res = redditBot.runBot(r, b)
        bot_count += 1
        if bot_count % 25 == 0:
            print("Sleeping for 60...")
            time.sleep(60)
        if float(res) > 0.5:
            bot_score += 1
        print(f"Prediction {bot_count} Complete")
    except:
        print(f"Unable to get BotScore from {b}")

print(f"Predicted {bot_score} out of {bot_count} bots correctly")
'''
for human in all_humans.readlines():
    human = human.strip()
    try:
        res = redditBot.runBot(r, human)
        human_count += 1
        if human_count % 25 == 0:
            print("Sleeping for 60...")
            time.sleep(60)
        if float(res) <= 0.5:
            human_score += 1
        print(f"Prediction {human_count} Complete")
    except:
        print(f"Unable to get BotScore from {human}")
print(f"Predicted {human_score} out of {human_count} humans correctly")
'''