import React from 'react';
import TitleSection from '../components/TitleSection';
import CustomCard from '../components/Card';
import Footer from '../components/Footer';

import background from '../assets/background.jpg';
import analysis from '../assets/analysis.jpg';
import industry from '../assets/industry.jpg';
import useScrollToTop from '../hooks/useScrollToTop';

const Home: React.FC = () => {
  useScrollToTop();
  return (
    <div>
      <div className='container post-container'>
        <div className='post'>
          <TitleSection />
          <div className='col-md-10 mx-auto lead'>
            <h2 className="content-subtitle text-center mb-4"> About our Project </h2>
            <p className='content-paragraph'>
            If you're an avid user of a social media platform, it's very likely you've come across an account that seems suspiciously like a bot.
      With the recent degradation of the Twitter platform, this chance of encountering a bot has never been higher, and being Twitter users ourselves,
      our team was keenly aware of this bot problem. We started our research project in early February with the goal of better understanding the whole bot problem,
      and what kind of impact bots have not just on Twitter, but also on other popular platforms like Reddit, Facebook, and Instagram. In particular, we 
      set out to try and answer the following questions:
            </p>
            <ol className='content-list'>
              <li>What is the prevalence of the bot problem across social media platforms?</li>
              <li>Who is creating these bots and why?</li>
              <li>Who is being affected by these bots and what are some of the outcomes?</li>
              <li>How do different social media platforms address the bot problem?</li>
              <li>What are common industry KPIs for measuring bots and the problem(s) they cause?</li>
            </ol>
            <p className='content-paragraph'>
            Below you will see multiple sections breaking down our research for answering these questions. 
            To understand the problem, we have created a chapter on the background of the problem. 
            In this section you’ll be able to better understand the impact bots have on social media platforms, who’s creating these bots,
            and for what reasons are they being created. In addition to our secondary research, our team wanted to perform 
            some of our own research using Reddit’s platform to see how effective existing tools are at detecting bots and
            how their performance differs. This primary research will be covered in the research section.
              Lastly, if you’re interested in what current industry players like Facebook are doing to mitigate this problem and
              how they’re measuring the problem themselves, the state of the industry section covers this in detail.
            </p>
          </div>
          <div className="content-subtitle text-center mb-4" id="findings">
            <h2 className="text-center mb-4">Our Findings</h2>
            <div className="row">
              <div className="col-md-10 mx-auto">
                <CustomCard
                  title="Background"
                  description="Who's creating these bots and for what reasons? How are different platforms and people affected?"
                  image={background}
                  link="/bot-analysis/background"
                  imagePosition="left"
                />
                <CustomCard
                  title="Our Analysis: A Live Reddit Data Investigation"
                  description="How do different bot detection methods vary in terms of accuracy? Come see our results when testing them on different reddit accounts."
                  image={analysis}
                  link="/bot-analysis/analysis"
                  imagePosition="right"
                />
                <CustomCard
                  title="State of the Industry"
                  description="What are the key tech players doing to fight against this problem? How do they measure its impact?"
                  image={industry}
                  link="/bot-analysis/industry"
                  imagePosition="left"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
