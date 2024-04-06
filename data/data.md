# CS492 Social Bot Analysis Project

## Quickstart Guide for Reproducing Analysis Results

1. Follow [Reddit App Developer Guide](https://www.reddit.com/wiki/api/#wiki_read_the_full_api_terms_and_sign_up_for_usage) to get API access
2. Create `.env` file in `data/`

    CLIENT_ID=[ID]\
    CLIENT_SECRET=[SECRET THING]\
    (These values come from your Reddit Apps Page on your account profile)

3. Run `pip install -r requirements.txt` to install script dependencies
4. Run `scrape_accounts.py` to gather live public account data. Your raw data will be in the `scraped/` folder (see details below)
5. Run `aggregate_data.py` to prep data for model analysis. Your aggregated data will be in the `cleaned/` folder
6. Run each of the bot testing models via their respective python scripts.

    E.g. `python3 train_reddit_spam_bot_detector.py` to run the training set of research result #1

## Research Results

1. Testing [creme332/reddit-spam-bot-detector](https://github.com/creme332/reddit-spam-bot-detector)

    GitHub user `creme332` created a heuristic-based algorithm that attempts to classify bots based on account metadata (account age, posting frequency, verification status). Note that this heuristic-based algorithm is not deterministic for an account - if the metadata of the account changes, the model's prediction may change. The user warned that the model isn't very accurate, but we figured using metadata heuristics would provide an important baseline for what simple tools could do. The user trained their model on the data in `creme_training.bots` and `creme_training.humans`. We initially tried running the model on its own training data in `train_creme.py` and reproduced the following results:

    Training Bot Detection Success Rate: 123 out of 352 bots (**35% accuracy**)
    Training Human Detection Success Rate: 166 out of 294 humans (**56% accuracy**)

    The abysmal results seem to indicate that the heuristic-based approach would like to avoid false-positives and overly predict "human" when possible. We then decided to test the model on our live data in `test_creme.py`, and found some surprising results:

    Live Bot Detection Success Rate: 259 out of 444 bots (**58% accuracy**, skipped 2 users)\
    Live Human Detection Success Rate: 399 out of 632 humans (**63% accuracy**, skipped 0 users)

    After taking some time to compare our live data with the original training data, we found a pattern that could explain the better performance on live data: the original accounts in the training data are now 2 years old, with some being inactive for some time. The metadata approach is more successful with active accounts, as the algorithm can use posting frequency in its weights. Thus, we believe that the **live success rate is more reflective of the algorithms real potential.**

2. Testing [MatthewTourond/Reddit-Bot-Detector](https://github.com/MatthewTourond/Reddit-Bot-Detector)

    GitHub user `MatthewTourond` created a tool called [`/u/some_bot_checker`](https://www.reddit.com/user/some_bot_checker/) that Reddit users can invoke in comment threads. A user would call for the tool under a specific comment, and then the tool would attempt to classify the parent comment's author as a bot or not. The underlying model is a random forest trained on some sample data in `botData.csv` - it uses some metadata features that we saw in `creme332`'s model, but also compares posts/comments using TF-IDF and Cosine Similarity with information from its training set. We started by reproducing the user's model in `train_tourond.py`, and ran it on our live data in `test_touround.py`. Note that some users in the test set were skipped by the model, since there weren't enough recent posts/comments to analyze for TF-IDF/Cosine Similarity metrics.

    Live Bot Detection Success Rate: 157 out of 422 bots (**37% accuracy**, skipped 24 users)\
    Live Human Detection Success Rate: 576 out of 598 humans (**96% accuracy**, skipped 34 users)

    These experiment results are a lot more interesting. The model performed extremely well on humans, but seemed to get fooled by many of the bots. When going through the log dumps, we saw that the biggest misses by the bot were on the GPT2 accounts in `r/SubSimulatorGPT2`, or the markov chain accounts in `r/SubSimulator` - the model actually performed well for all of the traditional bots! This actually makes sense - LLMs like GPT-2 and are great at making text that resembles human writing, which is the reference data behind the Cosine similarity of this random forest model. To validate this hypothesis, we decided to run the random forest on the bot training data from `creme332`'s model - none of those bots were from the GPT2 sub, so we expected to see some strong performance:

    `creme332` Training Bot Detection Success Rate: 253 out of 316 bots (**80% accuracy**, skipped 82 users)

    These results support our hypothesis that GPT-2/Markov Chain bots are what's holding back this random forest model. We're comfortable concluding that the `some_bot_checker` methodology is good at detecting traditional bots, as it has strong performance in the `creme332` testing data and few false positives in the live human detection set.
