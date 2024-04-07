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
