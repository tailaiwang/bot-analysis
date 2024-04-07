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

    GitHub user `MatthewTourond` created a tool called [`/u/some_bot_checker`](https://www.reddit.com/user/some_bot_checker/) that Reddit users can invoke in comment threads. A user would call for the tool under a specific comment, and then the tool would attempt to classify the parent comment's author as a bot or not. The underlying model is a random forest trained on some sample data in `botData.csv` - it uses some metadata features that we saw in `creme332`'s model, but also compares posts/comments using TF-IDF and Cosine Similarity with information from its training set. We started by reproducing the user's model in `train_tourond.py`, and ran it on our live data in `test_tourond.py`. Note that some users in the test set were skipped by the model, since there weren't enough recent posts/comments to analyze for TF-IDF/Cosine Similarity metrics.

    Live Bot Detection Success Rate: 157 out of 422 bots (**37% accuracy**, skipped 24 users)\
    Live Human Detection Success Rate: 576 out of 598 humans (**96% accuracy**, skipped 34 users)

    These experiment results are a lot more interesting. The model performed extremely well on humans, but seemed to get fooled by many of the bots. When going through the log dumps, we saw that the biggest misses by the bot were on the GPT2 accounts in `r/SubSimulatorGPT2`, or the markov chain accounts in `r/SubSimulator` - the model actually performed well for all of the traditional bots! This actually makes sense - LLMs like GPT-2 and are great at making text that resembles human writing, which is the reference data behind the Cosine similarity of this random forest model. To validate this hypothesis, we decided to run the random forest on the bot training data from `creme332`'s model - none of those bots were from the GPT2 sub, so we expected to see some strong performance:

    `creme332` Training Bot Detection Success Rate: 253 out of 316 bots (**80% accuracy**, skipped 82 users)

    These results support our hypothesis that GPT-2/Markov Chain bots are what's holding back this random forest model. We're comfortable concluding that the `some_bot_checker` methodology is good at detecting traditional bots, as it has strong performance in the `creme332` testing data and few false positives in the live human detection set.

3. Testing [openai/GPT-2 Output Detector](https://github.com/openai/gpt-2-output-dataset/tree/master/detector)

    When OpenAI released GPT2, they released a GPT2 detector free for the public to use. The model outputs a single likelihood metric which represents how confident the model is that the given text is generated by GPT2.

    In order to use this model, we downloaded the top 5 posts from all the bots in the training & live bots/humans datasets in `llm_detect.ipynb`. We then appended each account's top comments together to create a (rough) paragraph of text that each bot/human account had created. These paragraphs were then given to the GPT2 detection model in `llm_detect.ipynb`, and if the model returned a "bot likelihood" result of > 50%, we labeled the paragraph's author account as a bot. Below are the initial results ran on the same datasets as above.

    Training Bot Detection Success Rate: 127 out of 323 bots (**39.32% accuracy**, skipped 29 users)
    Training Human Detection Success Rate: 258 out of 290 humans (**88.97% accuracy**, skipped 4 users)

    Pretty bad numbers for the success rate on the training data! However, this kinda makes sense since this model is trained to detect GPT-generated text -- which differs significantly from comments generated by the bots in training dataset. The bots in the training dataset are primarily composed of spam-bots, auto-moderation bots, or other utility bots which generate very repetitive or hard-coded comments that a human originally wrote.

    Live Bot Detection Success Rate: 261 out of 438 bots (**59.59% accuracy**, skipped 8 users)
    Live Human Detection Success Rate: 515 out of 621 humans (**82.93% accuracy**, skipped 11 userss)

    Initially it looks like only mediocre numbers for correctly detecting bots, however, our dataset included many types of bots -- bots with a GPT backend was only a small subset of all the bots. If we run the GPT detection algorithm on only the "GPT bots", we get a much better success rate:

    Live Bot Detection Success Rate (GPT in name): 107 out of 128 bots (**83.59% accuracy**)

## Recommendation

Based on the results above, we recommend using a combination of the `MatthewTourond` random forest model and the `OpenAI` GPT-2 output detector. A possible implementation of this could be an ensemble model that combines classifications for a user from both accounts, or perhaps just using both tools independently. Each has their own niche, and combined together could be a promising general-purpose bot detection tool for today's age of generative AI content.
