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
6. [TODO] Run each of the bot testing models via their respective python scripts.

## Technical Details

1. 

