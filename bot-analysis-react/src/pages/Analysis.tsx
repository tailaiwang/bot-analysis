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
          <div className="jumbotron text-left">
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
              In the months surrounding the platform's Initial Public Offering (IPO) in 2024, Reddit faced much investor criticism surrounding its platform practices, especially in moderation. Reddit moderators are almost exclusively volunteers, each tasked with maintaining order in their Reddit communities. The platform depends on these moderators to establish the culture of each subreddit, enforce rules, and curate the content being displayed to their subreddit members. These volunteer moderators often perform a lot of manual work – they must review new posts and comments, address user reports, and hand out punishments to rule-breakers (bans, suspensions, etc.).
            </p>
            <p className='lead content-paragraph'>
              As noted in the State of the Industry section, Reddit’s infrastructure for moderation is laughable compared to other social media platforms. Part of the reason why Meta can churn out Reddit’s annual ad revenue in just 48 hours is because of how well-oiled their moderation is. Advertisers are confident to list their ads on Facebook or Instagram when over 99% of all spam and bot content on the platforms are pulled down by automated filters before a user reports them.
            </p>
            <p className='lead content-paragraph'>
              For Reddit to succeed in the advertising business, they need to build trust with its users and advertisers and ensure that minimal toxic/spam content is present on the platform. This trust has become harder to build with the rise of more sophisticated bots, namely those powered by Large Language Models. At one point in 2023, LLM-generated content on social platforms was increasing by 100% month-over-month.
            </p>
            <p className='lead content-paragraph'>
              These trends have led investors and Reddit community members to become very worried for the platform. If bots overrun communities with spam content, it wouldn’t be a stretch to say that Reddit could turn into the next MySpace. The gap between a thriving social platform and a cesspool of bots is currently very clear – without more strong moderation tools, Reddit’s familiar charm and potential as an advertising business hangs in question.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
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
            <Link to="/bot-analysis/" className="btn btn-sm btn-outline-primary"> &lt; Back to Home </Link>
            <h2 className="content-subtitle text-center mb-4">References</h2>
            <ul>
              {/* Add references here */}
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Analysis;
