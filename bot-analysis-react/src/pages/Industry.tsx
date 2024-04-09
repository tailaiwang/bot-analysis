import React from "react";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

import industry from "../assets/industry.jpg";
import ImageWithSubText from "../components/ImageWithSubText";
import useScrollToTop from "../hooks/useScrollToTop";

const Industry: React.FC = () => {
  useScrollToTop();
  const topContent = (
    <>
      <Link to="/bot-analysis/" className="btn btn-sm btn-outline-primary my-4">
        {" "}
        &lt; Back to Home{" "}
      </Link>
      <h1 className="display-4">State of Industry: How are Tech Giants solving the problem?</h1>
      <br />
      <ImageWithSubText
        imageSrc={industry}
        subText={
          <>
            Photo by{" "}
            <a href="https://unsplash.com/@ademay?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
              Adem AY
            </a>{" "}
            on{" "}
            <a href="https://unsplash.com/photos/white-and-pink-digital-device-Tk9m_HP4rgQ?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
              Unsplash
            </a>
          </>
        }
        altText="Image of different social media apps on an iphone"
      />
    </>
  );

  return (
    <div>
      <div className="container post-container">
        <div className="post">
          <div className="col-md-10 mx-auto text-left post-item">
            <div className="container">
              {topContent}
              <h2 className="content-subtitle text-center mb-4">Facebook's Approach to the Bot Problem</h2>
              <p className="lead content-paragraph">
                As outlined in our <a href="/bot-analysis/background">background</a>, there are many different types of
                malicious bots created for many different reasons. All of which - spam bots, scams bots, phishing bots,
                accounts positing objectionable content, and bots perpetuating online harassment and terrorism - appear
                on Facebook and Instagram. The scope of this issue is simply enormous.{" "}
                <a href="https://transparency.fb.com/reports/community-standards-enforcement/fake-accounts/">
                  Facebook estimates
                </a>{" "}
                that 4% of its monthly active users were bots in Q4 2023 with almost 700 million fake accounts removed
                from the platform over the same period. Even though Meta{" "}
                <a href="https://transparency.fb.com/enforcement/detecting-violations/">employs 15,000 reviewers</a> to
                conduct policy violations on Facebook and Instagram, relying solely on humans for review cannot scale to
                these numbers. Hence, Facebook heavily relies on bot detection{" "}
                <a href="https://help.instagram.com/423837189385631">algorithms</a>.
              </p>

              <p className="lead content-paragraph">
                The problem of fake account detection has been extensively researched, as evidenced by studies such as{" "}
                <a href="https://arxiv.org/abs/1602.00975">BotOrNot</a>,{" "}
                <a href="https://arxiv.org/abs/1802.04289">Deep Neural Networks for Bot Detection</a>, and{" "}
                <a href="https://duo.com/assets/pdf/Duo-Labs-Dont-At-Me-Twitter-Bots.pdf">
                  Hunting Twitter Bots at Scale
                </a>
                . Previous approaches have relied on either rule-based heuristics or machine learning-based
                classification techniques. However, a significant drawback of heuristic approaches is that they can be
                challenging to develop and maintain, and machine learning classifiers may become less accurate as
                attackers adapt to mask the features used by the algorithms. For example, detection methods for bot
                accounts used to rely on accounts' location metadata, but today, attackers easily bypass this by using
                VPNs to obscure the geographical origin of their accounts.
              </p>

              <p className="lead content-paragraph">
                A paper titled{" "}
                <a href="https://www.usenix.org/system/files/sec21-xu-teng.pdf">
                  Deep Entity Classification: Abusive Account Detection for Online Social Networks
                </a>{" "}
                produced by researchers at Facebook outlines how Facebook overcomes these shortcomings. They introduce
                the Deep Entity Classification (DEC) system, which looks at the social graph inherit in social networks.
                Their claim is, even though it may be easy to obfuscate your own accounts' features (i.e. masking
                geographical location), it's harder to mask features of your social networks. For example, one feature
                often used by most bot detection algorithms is the average amount of likes your account gets per post.
                DEC will take this metric into consideration, but it will also look at the average amount of likes{" "}
                <em>your friends' accounts</em> get on their posts. Through DEC, Facebook has been able to classify and
                remediate hundreds of millions of abusive accounts, resulting in an estimated reduction of 27% in
                abusive accounts on the platform.
              </p>

              <h2 className="content-subtitle text-center mb-4">Reddit's Approach</h2>

              <p className="lead content-paragraph">
                Unlike Facebook, a company with substantial resources allowing for dedicated research on
                state-of-the-art bot detection algorithms, Reddit{" "}
                <a href="https://www.redditinc.com/policies/transparency-report-2020-1">
                  heavily relies on volunteer moderators (mods) for content moderation
                </a>
                . These mods have developed automated tools such as{" "}
                <a href="https://www.reddit.com/r/BotDefense/">BotDefense</a>{" "}
                to handle AI-generated spam, or utilized Reddit's public moderation tooling known as{" "}
                <a href="https://www.reddit.com/wiki/automoderator/full-documentation/">AutoMod</a>. It's worth
                mentioning that Reddit does devote some staff for addressing bot accounts, with{" "}
                <a href="https://www.redditinc.com/policies/transparency-report-2020-1#:~:text=data%20reported%20below.-,Rule%20Violation%20Removals,-Every%20day%2C%20millions">
                  33% of bans
                </a>{" "}
                being issued by Reddit staff, however, the majority of content moderation is still carried out by the
                Reddit community. This system, while lacking the scale and sophistication of Facebook, still suits
                Reddit's needs as the amount of content on Reddit is considerably smaller compared to Facebook.
              </p>

              <p className="lead content-paragraph">
                Reddit bans are also primarily report-based, with fewer automatic bot detection tools compared to other
                platforms. For example, the BotDefense project mentioned above has recently been{" "}
                <a href="https://www.reddit.com/r/BotDefense/comments/14riw76/botdefense_is_wrapping_up_operations/">
                  shut down
                </a>{" "}
                after{" "}
                <a href="https://www.reddit.com/r/reddit/comments/12qwagm/an_update_regarding_reddits_api/">
                  changes to Reddit's API usage limits
                </a>
                .
              </p>

              <h2 className="content-subtitle text-center mb-4">Twitter's Approach</h2>

              <p className="lead content-paragraph">
                Whereas Reddit's APIs have effectively stopped large-scale 3rd party bot detection, Twitter's APIs have
                allowed for many public bot-detection algorithms to be created and studied. Algorithms like{" "}
                <a href="https://botometer.osome.iu.edu/">Botometer</a>{" "}
                and <a href="https://arxiv.org/abs/1602.00975">BotOrNot</a> have served as the basis for much literature
                on automated bot detection ML algorithms, while tools like{" "}
                <a href="https://botsentinel.com/">Bot Sentinel</a> allow users to see misinformation spreads with
                nefarious accounts.
              </p>

              <p className="lead content-paragraph">
                Although Twitter's in-house approach to detecting and banning harmful bots remains undisclosed, they
                have criticized third-party bot detection methods as "
                <a href="https://blog.twitter.com/en_us/topics/company/2020/bot-or-not#:~:text=This%20is%20an%20extremely%20limited%20approach">
                  extremely limited
                </a>
                ", suggesting that Twitter's bot detection is much more sophisticated than public research. A big
                advantage that social media platforms like Twitter have is that they have access to private account
                metadata that is not available to researchers. This metadata can include things like IP addresses,
                device information, and the time of account creation.
              </p>

              <p className="lead content-paragraph">
                Even still, Twitter's struggle with nefarious bots persists and even accelerates - partially helped by
                recent cuts to{" "}
                <a href="https://www.npr.org/2024/03/07/1235784919/twitter-x-bots-social-media-elon-musk">
                  content moderation from Elon Musk
                </a>
                .
              </p>

              <h2 className="content-subtitle text-center mb-4">Future Work and Challenges</h2>

              <p className="lead content-paragraph">
                Current research shows that achieving highly accurate bot detection algorithms is feasible, with{" "}
                <a href="https://arxiv.org/abs/1802.04289">some models achieving over 90% accuracy</a> predicting
                whether an account is human or not. However, these models, created only with publicly available datasets
                will perform significantly worse on unfamiliar and new datasets, highlighting the challenge of creating
                general-purpose bot detection algorithms. One reason for this phenomena can be explained by the fact
                that adversarial bot creators are constantly changing their approach when creating new bots. The
                algorithms of last month may be really good at detecting last months' bots, but this months' bots often
                behave very differently. Authors like{" "}
                <a href="https://mitsloan.mit.edu/ideas-made-to-matter/study-finds-bot-detection-software-isnt-accurate-it-seems">
                  Schutzman
                </a>{" "}
                argue that the real bottleneck for bot detection research lies in the quality of datasets used for
                training. Collecting millions of accounts, all correctly labeled as “bot” or “human” is very costly.
                This sentiment is even echoed by{" "}
                <a href="https://youtu.be/YeX4MdU0JNk?t=362">researchers at Facebook</a>, who undoubtedly have one of
                the best sets of data to train their algorithms. Even with better datasets though, bot detection will
                continue to be an active area of research in the following decades as attackers create more
                sophisticated bots utilizing novel LLM technologies.
              </p>

              <Link to="/bot-analysis/" className="btn btn-sm btn-outline-primary">
                {" "}
                &lt; Back to Home{" "}
              </Link>
              <h2 className="content-subtitle text-center mb-4">References</h2>
              <ul>
                <li>
                  <p className="content-paragraph">
                    Meta. (2023). Detecting violations. Meta Transparency Center.{" "}
                    <a href="https://transparency.fb.com/enforcement/detecting-violations/">
                      https://transparency.fb.com/enforcement/detecting-violations/
                    </a>
                  </p>{" "}
                </li>
                <li>
                  <p className="content-paragraph">
                    Meta. (2023). Community Standards Enforcement Report - Fake Accounts. Meta Transparency Center.{" "}
                    <a href="https://transparency.fb.com/reports/community-standards-enforcement/fake-accounts/facebook/">
                      https://transparency.fb.com/reports/community-standards-enforcement/fake-accounts/facebook/
                    </a>
                  </p>
                </li>
                <li>
                  <p className="content-paragraph">
                    Instagram. (2024). How Instagram uses artificial intelligence to moderate content. Help center.{" "}
                    <a href="https://help.instagram.com/423837189385631">https://help.instagram.com/423837189385631</a>
                  </p>
                </li>
                <li>
                  <p className="content-paragraph">
                    Davis, C. A., Varol, O., Ferrarali, E., Flammini, A., & Menczer, F. (2016, February 2). Botornot: A
                    system to evaluate social bots. arXiv.org.{" "}
                    <a href="https://arxiv.org/abs/1602.00975">https://arxiv.org/abs/1602.00975</a>
                  </p>
                </li>
                <li>
                  <p className="content-paragraph">
                    Kudugunta, S., & Ferrara, E. (2018, February 18). Deep Neural Networks for BOT detection. arXiv.org.{" "}
                    <a href="https://arxiv.org/abs/1802.04289">https://arxiv.org/abs/1802.04289</a>
                  </p>
                </li>
                <li>
                  <p className="content-paragraph">
                    Wright, J., & Anise, O. (2018). Don’t @ ME - Duo Security. Duo Labs Report.{" "}
                    <a href="https://duo.com/assets/pdf/Duo-Labs-Dont-At-Me-Twitter-Bots.pdf">
                      https://duo.com/assets/pdf/Duo-Labs-Dont-At-Me-Twitter-Bots.pdf
                    </a>
                  </p>
                </li>
                <li>
                  <p className="content-paragraph">
                    Xu, T., Goossen, G., Cevahir, H. K., Khodeir, S., Jin, Y., Li, F., Shan, S., Patel, S., Freeman, D.,
                    & Pearce, P. (2021). Deep entity classification: Abusive account detection for online social
                    networks. USENIX.{" "}
                    <a href="https://www.usenix.org/conference/usenixsecurity21/presentation/xu-teng">
                      https://www.usenix.org/conference/usenixsecurity21/presentation/xu-teng
                    </a>
                  </p>
                </li>
                <li>
                  <p className="content-paragraph">
                    Reddit. (2020). Transparency report 2020. reddit.{" "}
                    <a href="https://www.redditinc.com/policies/transparency-report-2020-1">
                      https://www.redditinc.com/policies/transparency-report-2020-1
                    </a>
                  </p>
                </li>
                <li>
                  <p className="content-paragraph">
                    Slowe, C. (2023). An update regarding Reddit’s API. Reddit.{" "}
                    <a href="https://www.reddit.com/r/reddit/comments/12qwagm/an_update_regarding_reddits_api/">
                      https://www.reddit.com/r/reddit/comments/12qwagm/an_update_regarding_reddits_api/
                    </a>
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Industry;
