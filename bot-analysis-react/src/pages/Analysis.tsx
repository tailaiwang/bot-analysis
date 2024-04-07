import React from 'react';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

import analysis from '../assets/analysis.jpg';
import ImageWithSubText from '../components/ImageWithSubText';
import useScrollToTop from '../hooks/useScrollToTop';


const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

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
                width={400}
                height={300}
                data={data}
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
                <Bar dataKey="pv" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} />
                <Bar dataKey="uv" fill="#82ca9d" activeBar={<Rectangle fill="gold" stroke="purple" />} />
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
