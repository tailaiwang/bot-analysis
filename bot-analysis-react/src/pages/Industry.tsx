import React from 'react';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

import industry from '../assets/industry.jpg';

const Industry: React.FC = () => {
  return (
    <div>
      <div className='container post-container'>
        <div className='post'>
          <div className="jumbotron text-left">
            <div className="container">
              <Link to="/bot-analysis/" className="btn btn-sm btn-outline-primary"> &lt; Back to Home </Link>
              <h1 className="display-4">State of Industry: How are Tech Giants solving the problem?</h1>
              <br/>
              <img className='img-fluid' src={industry} alt={"Image of different social media apps on an iphone"} />
              Photo by <a href="https://unsplash.com/@ademay?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Adem AY</a> on <a href="https://unsplash.com/photos/white-and-pink-digital-device-Tk9m_HP4rgQ?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
            </div>
            {/* Add your content here */}
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
export default Industry;
