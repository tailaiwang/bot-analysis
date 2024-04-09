import React from 'react';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

import analysis from '../assets/analysis.jpg';
import ImageWithSubText from '../components/ImageWithSubText';
import useScrollToTop from '../hooks/useScrollToTop';
import FullResults from '../data/FullResults';
import HeuristicResults from '../data/HeuristicResults';
import RandomForestResults from '../data/RandomForestResults';
import GPTResults from '../data/GPTResults';


const Analysis: React.FC = () => {
  useScrollToTop();
  return (
    <div>
      <div className='container post-container'>
        <div className='post'>
          <div className="col-md-10 mx-auto text-left post-item">
            <div className="container">
              <Link to="/bot-analysis/" className="btn btn-sm btn-outline-primary"> &lt; Back to Home </Link>
              <h1 className="display-4">Our Analysis: A Live Reddit Data Investigation</h1>
              <br />
              <ImageWithSubText
                imageSrc={analysis}
                subText={
                  <>
                    Photo by <a href="https://unsplash.com/@ikukevk?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Kevin Ku</a> on <a href="https://unsplash.com/photos/closeup-photo-of-eyeglasses-w7ZyuGYNpRQ?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
                  </>
                }
                altText="Image of code with a pair of glasses in front"
              />
            </div>
            <h2 className="content-subtitle text-center mb-4">$RDDT: A Company with a Worrying Moderation Problem</h2>
            <p className='lead content-paragraph'>
              In the months surrounding the platform's Initial Public Offering (IPO) in 2024, Reddit faced much investor criticism surrounding its platform practices, <a href="https://www.forbes.com/sites/greatspeculations/2024/03/06/reddit-return-of-the-junk-stock-ipo/?sh=25f5cab820fd">especially in moderation.</a> Reddit moderators are almost exclusively volunteers, each tasked with maintaining order in their Reddit communities. The platform depends on these moderators to establish the culture of each subreddit, enforce rules, and curate the content being displayed to their subreddit members. These volunteer moderators often perform a lot of manual work – they must review new posts and comments, address user reports, and hand out punishments to rule-breakers (bans, suspensions, etc.).
            </p>
            <p className='lead content-paragraph'>
              As noted in the State of the Industry section, Reddit’s infrastructure for moderation is laughable compared to other social media platforms. Part of the reason why Meta can churn out <a href="https://www.reuters.com/technology/how-reddit-stacks-up-against-social-media-peers-2024-03-21/">Reddit’s annual ad revenue in just 48 hours</a> is because of how well-oiled their moderation is. Advertisers are confident to list their ads on Facebook or Instagram when over 99% of all spam and bot content on the platforms are <a href="https://transparency.fb.com/reports/community-standards-enforcement/fake-accounts/facebook/">pulled down by automated filters</a> before a user reports them.
            </p>
            <p className='lead content-paragraph'>
              For Reddit to succeed in the advertising business, they need to build trust with its users and advertisers and ensure that minimal toxic/spam content is present on the platform. This trust has become harder to build with the rise of more sophisticated bots, namely those powered by Large Language Models, which have <a href="https://searchengineland.com/googles-shifting-approach-ai-content-435601">fooled spam filters</a> due to their human-like text.
            </p>
            <p className='lead content-paragraph'>
              These trends have led investors and Reddit community members to become very worried for the platform. If bots overrun communities with spam content, it wouldn’t be a stretch to say that Reddit could turn into the next MySpace. The gap between a thriving social platform and a cesspool of bots is currently very clear – without stronger moderation tools, Reddit’s familiar charm and potential as an advertising business hangs in question.
            </p>
            <h2 className="content-subtitle text-center mb-4">Analysis Overview</h2>
            <p className='lead content-paragraph'>
              Our analysis aims to figure out what potential automatic tools could work best to support these Reddit moderators. Many moderators have adopted open-source solutions/algorithms, and our research involved reproducing these solutions to test against live Reddit data. Thus, we think our research can provide a concrete recommendation to Reddit, hopefully inspiring them to develop such tooling on their sitewide infrastructure.
            </p>
            <p className='lead content-paragraph'>
              The sections below cover the end-to-end story behind our research and recommendation. You can follow along and reproduce our work using the instructions in our <a href="https://github.com/tailaiwang/bot-analysis">GitHub repository</a>.
            </p>
            <h2 className="content-subtitle text-center mb-4">Data Collection</h2>
            <p className='lead content-paragraph'>
              We used <a href="https://praw.readthedocs.io/en/stable/">PRAW</a> as our main source of Reddit data - the API enabled us to get posts, comments, and metadata from any public Reddit account very easily. We curated a wide array of different accounts to test the tools with. Our main sources of bots were <a href="https://www.reddit.com/r/SubSimulatorGPT2/">SubSimulatorGPT2</a> and <a href="https://www.reddit.com/r/SubredditSimulator/">SubredditSimulator</a>, which use GPT-2 and Markov Chain bots to power completely artificial conversations. We also scraped several hundred of the most popular bots on the platform, as they have the most activity for a model to analyze (not necessarily spam, many are useful automatic tool bots). Our main sources for human accounts were from <a href="https://www.reddit.com/r/reddit/">r/reddit</a> (all posters are admins or moderators), and also from scraping verified accounts.
            </p>
            <p className='lead content-paragraph'>
              In total, our base testing set comprised of 446 bot accounts and 632 human accounts. We also leveraged several hundred other accounts from some of the training data of the models we tested, but we did not include these in the testing sets to avoid bias. This data is all available in the <a href="https://github.com/tailaiwang/bot-analysis/tree/main/data">data directory</a> of our GitHub repository, and instructions in the <a href="https://github.com/tailaiwang/bot-analysis/blob/main/data/data.md">README</a> can show you how to acquire similar data yourself using PRAW.
            </p>
            <h2 className="content-subtitle text-center mb-4">Analysis of Tool #1: Heuristic Model</h2>
            <p className='lead content-paragraph'>
              GitHub user <a href="https://github.com/creme332/reddit-spam-bot-detector">creme332 created a heuristic-based algorithm</a> that attempts to classify bots based on account metadata (account age, posting frequency, verification status). The heuristics picked are reminiscent of how a human would guess whether an account is a bot (kind of like an “eye test”).  Note that this heuristic-based algorithm is not deterministic for an account - if the metadata of the account changes, the model's prediction may change. The user warned that the model isn't very accurate, but we figured using metadata heuristics would provide an important baseline for what simple tools could do. We ran the model on its own training data and our testing data, and reproduced the following results (percentage of accurate classifications in dataset):
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }} className='post-item'>
              <BarChart
                width={800}
                height={300}
                data={HeuristicResults}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="run" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="bot" fill="#413ea0" activeBar={<Rectangle fill="pink" stroke="blue" />} />
                <Bar dataKey="human" fill="#8884d8" activeBar={<Rectangle fill="gold" stroke="purple" />} />
                <Bar dataKey="skipped" fill="#FF0000" activeBar={<Rectangle fill="gold" stroke="purple" />} />
              </BarChart>
            </div>
            <p className="lead content-paragraph">
              We were originally very taken aback by the fact that the model performed worse on its own training data than our live testing data. The abysmal training results seem to indicate that the heuristic-based approach would like to avoid false-positives and overly predict "human" when possible.
            </p>
            <p className="lead content-paragraph">
              However, after taking some time to compare our live data with the original training data, we found a pattern that could explain the better performance on live data: the original accounts in the training data are now 2 years old, with some being inactive for some time. The metadata approach is more successful with active accounts, as the algorithm can use posting frequency in its weights. Thus, we believe that the live success rate is more reflective of the algorithms real potential. The ~60% accuracy is not much better than a coinflip, but it gives us an idea of how well rudimentary tooling can do.
            </p>
            <h2 className="content-subtitle text-center mb-4">Analysis of Tool #2: Cosine Similarity Random Forest Model</h2>
            <p className="lead content-paragraph">
              GitHub user <a href="https://github.com/MatthewTourond/Reddit-Bot-Detector">MatthewTourond </a>created a tool called <a href="https://www.reddit.com/user/some_bot_checker/">/u/some_bot_checker</a> that Reddit users can invoke in comment threads. A user would call for the tool under a specific comment, and then the tool would attempt to classify the parent comment's author as a bot or not. The underlying model is a random forest trained on some sample users - it uses some metadata features that we saw in creme332's model, but the main model is compares posts/comments using <a href="https://medium.com/geekculture/understanding-tf-idf-and-cosine-similarity-for-recommendation-engine-64d8b51aa9f9">TF-IDF and Cosine Similarity</a> with information from its training set. Each user would have their posts/comments compared using these methods to the users in the training set, and then classified as bot/human based on their similarity in content. A major drawback is that some users in the test set were skipped by the model, since there weren't enough recent posts/comments to analyze for TF-IDF/Cosine Similarity metrics.
            </p>
            <p className="lead content-paragraph">
              We ran this model on our testing set and found that it was very strong at classifying humans but seemed to get fooled by many of the bots. When going through the log dumps, we saw that the biggest misses by the model were on the GPT2 accounts in SubSimulatorGPT2, or the markov chain accounts in SubredditSimulator. Meanwhile, the model performed well for all of the traditional bots! This makes sense - LLMs like GPT-2 and are great at making text that resembles human writing, which is the reference data behind the Cosine similarity of this random forest model. To validate this hypothesis, we also decided to run the random forest on the preprocessed bot training data from creme332's model - none of those bots were from the GPT2 sub, so we expected to see some strong performance:</p>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
              <BarChart
                width={800}
                height={300}
                data={RandomForestResults}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="run" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="bot" fill="#413ea0" activeBar={<Rectangle fill="pink" stroke="blue" />} />
                <Bar dataKey="human" fill="#8884d8" activeBar={<Rectangle fill="gold" stroke="purple" />} />
                <Bar dataKey="skipped" fill="#FF0000" activeBar={<Rectangle fill="gold" stroke="purple" />} />
              </BarChart>
            </div>
            <p className="lead content-paragraph">
              These results support our hypothesis that GPT-2/Markov Chain bots are what's holding back this random forest model. We're comfortable concluding that the some_bot_checker methodology is good at detecting traditional bots, as it has strong performance in the creme332 testing data and few false positives in the live human detection set.
            </p>
            <h2 className="content-subtitle text-center mb-4">Analysis of Tool #3: OpenAI GPT-2 Output Detector</h2>
            <p className="lead content-paragraph">
              When OpenAI released GPT2, they released a <a href="https://github.com/openai/gpt-2-output-dataset/tree/master/detector">GPT-2 detector</a> free for the public to use. The model outputs a single likelihood metric which represents how confident the model is that the given text is generated by GPT-2.
            </p>
            <p className="lead content-paragraph">
              In order to use this model, we downloaded the top 5 posts from all the bots in the training & live bots/humans datasets. We then appended each account's top comments together to create a (rough) paragraph of text that each bot/human account had created. These paragraphs were then given to the GPT-2 detection model, and if the model returned a "bot likelihood" result of greater than 50%, we labeled the paragraph's author account as a bot.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
              <BarChart
                width={800}
                height={300}
                data={GPTResults}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="run" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="bot" fill="#413ea0" activeBar={<Rectangle fill="pink" stroke="blue" />} />
                <Bar dataKey="human" fill="#8884d8" activeBar={<Rectangle fill="gold" stroke="purple" />} />
                <Bar dataKey="skipped" fill="#FF0000" activeBar={<Rectangle fill="gold" stroke="purple" />} />
              </BarChart>
            </div>
            <p className="lead content-paragraph">
              We noticed that our initial numbers for the success rate on the training data were bad! However, this makes sense since this model is trained to detect GPT-generated text -- which differs significantly from comments generated by the bots in training dataset. The bots in the training dataset are primarily composed of spam-bots, auto-moderation bots, or other utility bots which generate very repetitive or hard-coded comments that a human originally wrote. We ended up running the model against the test set and a set of preprocessed data with only GPT-2 bots. These results support our intuition around how the model should work - the model should only be viable when trying to detect GPT-generated text, not traditional bots.
            </p>
            <h2 className="content-subtitle text-center mb-4">Results Summary & Recommendation</h2>
            <p className="lead content-paragraph">
              To wrap up this analysis, we aggregated the results from each of the models in the chart below (percentage of accurate classifications in dataset). Each result is reflective of how each model performs in its intended task (Traditional Bots for Random Forest, GPT-2 Text Detection for the OpenAI model)
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
              <BarChart
                width={800}
                height={300}
                data={FullResults}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="bot" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} />
                <Bar dataKey="human" fill="#82ca9d" activeBar={<Rectangle fill="gold" stroke="purple" />} />
              </BarChart>
            </div>
            <p className="lead content-paragraph">
              Based on the results above, we recommend using a combination of the MatthewTourond random forest model and the OpenAI GPT-2 output detector. A possible implementation of this could be an <a href="https://neptune.ai/blog/ensemble-learning-guide">ensemble model</a> that combines classifications for a user from both accounts, or perhaps just using both tools independently. Each has their own niche, and combined together could be a promising general-purpose bot detection tool for today's age of generative AI content.
            </p>
            <p className="lead content-paragraph">
              Since using open-source models for bot detection would possibly enable adversarial players to try to reverse-engineer the infrastructure, we encourage Reddit to look into building these privately. We hope that an increase of strong automated tooling will empower moderators to do work more efficiently, giving them more time to grow the culture and community on their subreddits. In the long run, our sincere desire is for Reddit to remain a productive online community, and to finally bolster their promising advertising business. Removing toxic bots and spam content is the first step in this long journey, but this analysis gives us conviction that it's definitely possible for the organization!
            </p>
            <Link to="/bot-analysis/" className="btn btn-sm btn-outline-primary"> &lt; Back to Home </Link>
            <h2 className="content-subtitle text-center mb-4">References</h2>
            <ul>
              <li>
                <p className='content-paragraph'> Trainer, David. (2024, March 6). Reddit: Return of the Junk Stock IPO. Forbes.
                  <a href='https://www.forbes.com/sites/greatspeculations/2024/03/06/reddit-return-of-the-junk-stock-ipo/?sh=25f5cab820fd'>https://www.forbes.com/sites/greatspeculations/2024/03/06/reddit-return-of-the-junk-stock-ipo/?sh=25f5cab820fd</a>
                </p>
              </li>
              <li>
                <p className='content-paragraph'> Malik, Yuvraj. (2024, March 21). How Reddit stacks up against social media peers. Reuters.
                  <a href='https://www.reuters.com/technology/how-reddit-stacks-up-against-social-media-peers-2024-03-21/'>https://www.reuters.com/technology/how-reddit-stacks-up-against-social-media-peers-2024-03-21/</a>
                </p>
              </li>
              <li>
                <p className='content-paragraph'> Meta. (2024, April 8). Fake Accounts. Meta Transparency Center.
                  <a href='https://transparency.fb.com/reports/community-standards-enforcement/fake-accounts/facebook/'>https://transparency.fb.com/reports/community-standards-enforcement/fake-accounts/facebook/</a>
                </p>
              </li>
              <li>
                <p className='content-paragraph'> Mwiti, Derrick. (2023, August 21). A Comprehensive Guide to Ensemble Learning: What Exactly Do You Need to Know. Neptune.
                  <a href='https://neptune.ai/blog/ensemble-learning-guide'>https://neptune.ai/blog/ensemble-learning-guide</a>
                </p>
              </li>
              <li>
                <p className='content-paragraph'> Williams-Cook, Mark. (2023, December 21). Google’s shifting approach to AI content: An in-depth look. Search Engine Land.
                  <a href='https://searchengineland.com/googles-shifting-approach-ai-content-435601'>https://searchengineland.com/googles-shifting-approach-ai-content-435601</a>
                </p>
              </li>
              <li>
                <p className='content-paragraph'> Zhu, Aaron. (2023, April 3). Understanding TF-IDF and Cosine Similarity for Recommendation Engine. Medium.
                  <a href='https://medium.com/geekculture/understanding-tf-idf-and-cosine-similarity-for-recommendation-engine-64d8b51aa9f9'>https://medium.com/geekculture/understanding-tf-idf-and-cosine-similarity-for-recommendation-engine-64d8b51aa9f9</a>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Analysis;
