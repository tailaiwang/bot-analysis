import React from 'react';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

import background from '../assets/background.jpg';
import ImageWithSubText from '../components/ImageWithSubText';
import useScrollToTop from '../hooks/useScrollToTop';

declare global {
  interface Window {
      twttr: any;
  }
}

const Background: React.FC = () => {
  useScrollToTop();

  if (window.twttr && window.twttr.widgets) {
    window.twttr.widgets.load();
  }
  return (
    <div>
      <div className='container post-container'>
        <div className='post'>
          <div className="col-md-10 mx-auto text-left post-item">
            <div className="container">
              <Link to="/bot-analysis/" className="btn btn-sm btn-outline-primary my-4"> &lt; Back to Home </Link>
              <h1 className="display-4">Background: What is the Bot Problem?</h1>
              <br/>
              <ImageWithSubText
                  imageSrc={background}
                  subText={
                      <>
                        Photo by <a href="https://unsplash.com/@andrewtneel?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Andrew Neel</a> {" "}
                        on <a href="https://unsplash.com/photos/a-computer-screen-with-a-purple-and-green-background-CVfAqFRYjb0?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
                      </>
                  }
                  altText="Image of a monitor with chatgpt on it"
              />
              <br/>
              <h2 className="content-subtitle text-center mb-4">The Bot Problem</h2>
              <p className='lead content-paragraph'>
              To grasp the extent of the bot issue, one simply needs to explore their "For You" feed on Twitter, now renamed as X, and observe a popular post.
               After a short scroll, the issue becomes obvious through the number of illogical responses or promotions of NSFW accounts. In 2024, <a href='https://www.abc.net.au/news/science/2024-02-28/twitter-x-fighting-bot-problem-as-ai-spam-floods-the-internet/103498070'>ABC news quoted</a> that 
                 cybersecurity firm CHEQ found Twitter had 75% of its traffic coming from bots, while other platforms like Facebook, 
                 Instagram, and TikTok had only around 3%. So while some platforms are doing well at mitigating this 
                 problem with their efforts in moderation, other platforms like Twitter clearly are not doing enough. 
                 This spike of bot activity on Twitters platform is likely attributed to <a href='https://www.npr.org/2024/03/07/1235784919/twitter-x-bots-social-media-elon-musk'>Elon Musk’s decision</a> to cut 
                 moderation costs substantially and dissolve Twitter’s Internal Trust and Safety Council. This was done 
                 by Elon Musk in an attempt to make Twitter more profitable by minimizing unnecessary expenses, but clearly
                  this has had a profound impact on the level of bot activity seen today. Further exacerbating this was the
                   decision to introduce a new paid account tier to make bot farms too expensive, but some experts say this
                    intensified the visibility of bots since paid accounts had higher visibility in comments. 
              </p>
              <div className='content-container'>
                <blockquote className="twitter-tweet">
                  <p lang="en" dir="ltr">The crazy thing about this bot swarm is how incredibly easy it seems to filter on 
                  and yet nothing is being done. Does anybody work on this problem at twitter? I genuinely cannot tell. 
                  <a href="https://t.co/UcuvOYwJjq">pic.twitter.com/UcuvOYwJjq</a></p>&mdash; Daniel (@growing_daniel) 
                  <a href="https://twitter.com/growing_daniel/status/1763248389427532196?ref_src=twsrc%5Etfw">February 29, 2024</a>
                </blockquote>
              </div>
              <p className='lead content-paragraph'> 
                Like with Twitter, moderation on Reddit has been affected by Reddit’s business decisions, such as API changes 
                making it much more costly to use third party vendors. Reddit moderators have expressed their grievances
                  to such changes, emphasizing how such third party tools helped them manage the overwhelming amount of 
                  bots in their communities. With new generative AI being released such as GPT-3 and GPT-4, the problem 
                  with identifying these bots by both machine learning and human methods has become increasing difficult as well.
                  The largest concern however is the ever expanding <i>For You</i> feeds that social media companies are trying 
                  to grow. With these feeds, users are exposed to accounts that are not within their personal networks and 
                  thus users are much more likely to see ai generated content and bots themselves. With such problems 
                  intersecting, many internet theorists believe we already live in a <a href='https://www.forbes.com/sites/danidiplacido/2024/01/16/the-dead-internet-theory-explained/?sh=15e8ffea57c2'>Dead Internet Theory</a> scenario.
              </p>
              <h2 className="content-subtitle text-center mb-4">Who's creating these bots and why?</h2>
              <p className='lead content-paragraph'>
                There are many different bad actors that use these bots, but their motives are always to influence either 
                users' actions or beliefs. The end goals of this influence usually fall into two categories:
                foreign influence and financial gain. Over the course of the Ukraine-Russia war, many bot accounts have been {" "}
                 <a href="https://www.theguardian.com/world/2022/may/01/troll-factory-spreading-russian-pro-war-lies-online-says-uk ">found supporting Pro-Russian opinions</a> to 
                 improve public perception of Russia’s invasion of Ukraine. This botfarm (i.e. a network of bots) has been linked back to an old arms factory 
                 in St Petersburg that is suspected to be run by Yevgeny Prigozhin who is accused of meddling in the 2016 US 
                 election. These bots not only post their own Pro-Russian content, but amplify genuine support from legitimate
                  accounts as well. Russia is not the only country accused of using these bots to create foreign influence 
                  either. China has been accused of targeting Canadian politicians’ social media accounts by leaving thousands
                   of comments in an attempt to silence criticism of Beijing. In the other category of motive, the most common method of financial
                    gain is through the use of porn bots. Porn bots have been around for a while, with many users <a href='https://www.vice.com/en/article/mbzd84/the-secret-trail-of-money-behind-those-instagram-porn-bots'>taking notice</a> of 
                    them even in 2019. These accounts can make money off of the vast amount of lonely men on
                      the internet in various ways, including leading them to adult websites or scamming these individuals of
                       money in exchange for some hope of intimacy. Some marketing firms even pay other people for leads on 
                       these potential customers, paying them once the lead gives them their email. With the rise of deepfakes
                        and generative AI, it's now easier than ever to produce adult content at scale and make a load of money
                         doing so, further incentivizing people to create bots to promote fake accounts with little risk 
                         . Other common types of bots try to either steal from you by either getting you to buy 
                         crypto coins or NFTs, or try to drive up the price of the coins they themselves own.
                          Some bots try to <a href='https://www.welivesecurity.com/en/scams/a-bards-tale-how-fake-ai-bots-try-to-install-malware/'>make fake dangerous ads look real</a> by 
                          commenting on them with recommendations for the product or solution that's falsely advertised.
              </p>
              <h2 className="content-subtitle text-center mb-4">The Consequences</h2>
              <p className='lead content-paragraph'>
              Through our investigation, we found that while bots may affect the overall user experience on these platforms and
               cause frustration, there are much deeper problems at play. Members of other countries 
               such as Russia can utilize these bots to try 
               and undermine democracy by spreading misinformation through their bot farms. With generative AI, this misinformation can be even more 
                powerful and threaten even the belief in objective truths which democracy relies on. This <a href="https://ssrn.com/abstract=3213954"> liar’s dividend</a> threatens not 
                 only the democracy of countries by making individuals less likely to believe real human-made content, but also
                  threatens the use of our internet altogether. In late February, many internet users
                  were expressing their beliefs that <a href='https://www.motherjones.com/media/2022/09/disinformation-russia-trolls-bots-black-culture-blackness-ukraine-twitter/'>
                   a real video of Black exchange students being discriminated against</a> while fleeing 
                  Ukraine was in fact fake, demonstrating that this liar’s dividend is already taking effect. Of 
                  course, users are also at risk of being scammed and having their money, or even identity, taken from them by
                   these bots. The  <a href='https://www.ftc.gov/news-events/data-visualizations/data-spotlight/2022/06/reports-show-scammers-cashing-crypto-craze '>
                   FTC claimed</a> that in 2022, more than 46,000 people fell to crypto scams, losing over $1 billion
                    in crypto to these scams. With a large portion of twitter bots having promoting crypto assets such as NFTs and cryptocurrencies, 
                    it seems likely that a significant portion of these scams began on social media.
              </p>
            </div>
            <Link to="/bot-analysis/" className="btn btn-sm btn-outline-primary"> &lt; Back to Home </Link>
            <h2 className="content-subtitle text-center mb-4">References</h2>
            <ul>
              <li>
                <p className='content-paragraph'> BBC. (2023, October 2023). Chinese bots targeted Trudeau and others - Canada. BBC. 
                  <a href='https://www.bbc.com/news/world-us-canada-67201927'>https://www.bbc.com/news/world-us-canada-67201927</a> 
                </p>
              </li>
              <li>
                <p className='content-paragraph'> Brandt, Jessica. (2023, November 8). Propaganda, foreign interference, and generative AI. 
                Brookings. <a href='https://www.brookings.edu/articles/propaganda-foreign-interference-and-generative-ai/ '>https://www.brookings.edu/articles/propaganda-foreign-interference-and-generative-ai/ </a> 
                </p>
              </li>
              <li>
                <p className='content-paragraph'> Chesney, Robert and Citron, Danielle Keats (July 14, 2018). Deep Fakes: A Looming Challenge for Privacy, Democracy, and National Security . 107 California Law Review 1753 (2019), 
                U of Texas Law, Public Law Research Paper No. 692, U of Maryland Legal Studies Research Paper No. 2018-21, 
                Available at SSRN: <a href='https://ssrn.com/abstract=3213954'>https://ssrn.com/abstract=3213954 </a> 
                </p>
              </li>
              <li>
                <p className='content-paragraph'> Di Placido, Dani. (2024, Jan 16). The Dead Internet Theory, Explained. 
                Forbes <a href='https://www.forbes.com/sites/danidiplacido/2024/01/16/the-dead-internet-theory-explained/?sh=15e8ffea57c2'>https://www.forbes.com/sites/danidiplacido/2024/01/16/the-dead-internet-theory-explained/?sh=15e8ffea57c2</a> 
                </p>
              </li>
              <li>
                <p className='content-paragraph'> Douglas Heaven, William. (2020, October 8). A GPT-3 bot posted comments on Reddit for a week and no one noticed. MIT Technology 
                Review. <a href='https://www.technologyreview.com/2020/10/08/1009845/a-gpt-3-bot-posted-comments-on-reddit-for-a-week-and-no-one-noticed/'>https://www.technologyreview.com/2020/10/08/1009845/a-gpt-3-bot-posted-comments-on-reddit-for-a-week-and-no-one-noticed/</a> 
                </p>
              </li>
              <li>
                <p className='content-paragraph'>Fletcher, Emma. (2022, June 3). Reports show scammers cashing in on crypto craze.
                FTC. <a href='https://www.ftc.gov/news-events/data-visualizations/data-spotlight/2022/06/reports-show-scammers-cashing-crypto-craze '>https://www.ftc.gov/news-events/data-visualizations/data-spotlight/2022/06/reports-show-scammers-cashing-crypto-craze </a> 
                </p>
              </li>
              <li>
                <p className='content-paragraph'>Germain, Thomas. (2023, September 6). Want to See How Bad Twitter's Bot Problem Is? Ask for Crypto Help. 
                Gizmodo.  <a href='https://gizmodo.com/twitter-bot-problem-metamask-support-crypto-elon-musk-1850808172 '>https://gizmodo.com/twitter-bot-problem-metamask-support-crypto-elon-musk-1850808172 </a> 
                </p>
              </li>
              <li>
                <p className='content-paragraph'>Hu, Charlotte. (2024, February 13). How AI Bots Could Sabotage 2024 Elections around the World.  
                Scientific American. <a href='https://www.scientificamerican.com/article/how-ai-bots-could-sabotage-2024-elections-around-the-world/ '>https://www.scientificamerican.com/article/how-ai-bots-could-sabotage-2024-elections-around-the-world/ </a> 
                </p>
              </li>
              <li>
                <p className='content-paragraph'>Hunter, Tatum. (2024, February 25). AI ‘dream girls’ are coming for porn stars’ jobs.
                The Washington Post. <a href='https://www.washingtonpost.com/style/of-interest/2024/02/25/ai-porn-avn-industry/'>https://www.washingtonpost.com/style/of-interest/2024/02/25/ai-porn-avn-industry/ </a> 
                </p>
              </li>
              <li>
                <p className='content-paragraph'>Jerkins, Morgan. (2022, October). Black or Bot? The Long, Sordid History of Co-opting Blackness Online. 
                Mother Jones. <a href='https://www.motherjones.com/media/2022/09/disinformation-russia-trolls-bots-black-culture-blackness-ukraine-twitter/'>https://www.motherjones.com/media/2022/09/disinformation-russia-trolls-bots-black-culture-blackness-ukraine-twitter/</a> 
                </p>
              </li>
              <li>
                <p className='content-paragraph'>López Restrepo, Manuela. (2024, March 4). How the porn bots took over Twitter. 
                NPR. <a href='https://www.npr.org/2024/03/07/1235784919/twitter-x-bots-social-media-elon-musk'>https://www.npr.org/2024/03/07/1235784919/twitter-x-bots-social-media-elon-musk</a> 
                </p>
              </li>
              <li>
                <p className='content-paragraph'>Press Association. (2022, May 1). ‘Troll factory’ spreading Russian pro-war lies online, says UK. 
                Guardian News and Media. <a href='https://www.theguardian.com/world/2022/may/01/troll-factory-spreading-russian-pro-war-lies-online-says-uk '>https://www.theguardian.com/world/2022/may/01/troll-factory-spreading-russian-pro-war-lies-online-says-uk </a> 
                </p>
              </li>
              <li>
                <p className='content-paragraph'>Purtill, James. (2024, February 27). Twitter is becoming a 'ghost town' of bots as AI-generated spam content floods the internet. 
                ABC News Australia. <a href='https://www.abc.net.au/news/science/2024-02-28/twitter-x-fighting-bot-problem-as-ai-spam-floods-the-internet/103498070'>https://www.abc.net.au/news/science/2024-02-28/twitter-x-fighting-bot-problem-as-ai-spam-floods-the-internet/103498070</a> 
                </p>
              </li>
              <li>
                <p className='content-paragraph'>Reddit User dequeued. (2023, July 5). BotDefense is wrapping up operations. 
                Reddit. <a href='https://www.reddit.com/r/BotDefense/comments/14riw76/botdefense_is_wrapping_up_operations'>https://www.reddit.com/r/BotDefense/comments/14riw76/botdefense_is_wrapping_up_operations</a> 
                </p>
              </li>
              <li>
                <p className='content-paragraph'>Reddit User quinn_thomas. (2023, June). What is going on with the sudden increase of bot accounts on Reddit?
                 Reddit. <a href='https://www.reddit.com/r/OutOfTheLoop/comments/144hool/what_is_going_on_with_the_sudden_increase_of_bot/ '>https://www.reddit.com/r/OutOfTheLoop/comments/144hool/what_is_going_on_with_the_sudden_increase_of_bot/ </a> 
                </p>
              </li>
              <li>
                <p className='content-paragraph'>Tait, Amelia. (2019, March 26). The Secret Trail of Money Behind Those Instagram Porn Bots. 
                Vice News. <a href='https://www.vice.com/en/article/mbzd84/the-secret-trail-of-money-behind-those-instagram-porn-bots '>https://www.vice.com/en/article/mbzd84/the-secret-trail-of-money-behind-those-instagram-porn-bots </a> 
                </p>
              </li>
              <li>
                <p className='content-paragraph'>Uhlemann, Thomas. (2023, August 21). A Bard’s Tale – how fake AI bots try to install malware.
                 eset <a href='https://www.welivesecurity.com/en/scams/a-bards-tale-how-fake-ai-bots-try-to-install-malware/'>https://www.welivesecurity.com/en/scams/a-bards-tale-how-fake-ai-bots-try-to-install-malware/</a> 
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
export default Background;
