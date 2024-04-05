# CS492 Social Bot Analysis Project

## Quickstart Guide for Reproducing Analysis Results

1. Follow [Reddit App Developer Guide](https://www.reddit.com/wiki/api/#wiki_read_the_full_api_terms_and_sign_up_for_usage) to get API access
2. Create `.env` file in `data/`

    CLIENT_ID=[ID] <br>
    CLIENT_SECRET=[SECRET THING] <br>
    (These values come from your Reddit Apps Page on your account profile)

3. Run `pip install -r requirements.txt` to install script dependencies
4. Run `scrape_accounts.py` to gather live public account data. Your raw data will be in the `scraped/` folder (see details below)
5. Run `aggregate_data.py` to prep data for model analysis. Your aggregated data will be in the `cleaned/` folder
6. Run each of the bot testing models via their respective python scripts.

    E.g. `python3 train_reddit_spam_bot_detector.py` to run the training set of research result #1


## Research Results

1. Testing [creme332/reddit-spam-bot-detector](https://github.com/creme332/reddit-spam-bot-detector)

    GitHub user `creme332` created a heuristic-based algorithm that attempts to classify bots based on account metadata (account age, posting frequency, verification status). Note that this heuristic-based algorithm is not deterministic for an account - if the metadata of the account changes, the model's prediction may change. The user warned that the model isn't very accurate, but we figured using metadata heuristics would provide an important baseline for what simple tools could do. The user trained their model on the data in `creme_training.bots` and `creme_training.humans`. We initially tried running the model on its own training data and reproduced the following results:

    Training Bot Detection Success Rate: 123 out of 352 bots (**35% accuracy**)
    Training Human Detection Success Rate: 166 out of 294 humans (**56% accuracy**)

    The abysmal results seem to indicate that the heuristic-based approach would like to avoid false-positives and overly predict "human" when possible. We then decided to test the model on our live data, and found some surprising results:

    Live Bot Detection Success Rate: 259 out of 444 bots (**58% accuracy**)
    Live Human Detection Success Rate: 399 out of 632 humans (**63% accuracy**)

    After taking some time to compare our live data with the original training data, we found a pattern that could explain the better performance on live data: the original accounts in the training data are now 2 years old, with some being inactive for some time. The metadata approach is more successful with active accounts, as the algorithm can use posting frequency in its weights. Thus, we believe that the **live success rate is more reflective of the algorithms real potential.**

	2. Testing [GPT-2 Output Detector](https://github.com/openai/gpt-2-output-dataset/tree/master/detector)

	... TODO ...

