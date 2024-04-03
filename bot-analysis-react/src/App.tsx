import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import CustomCard from './components/Card';
import Footer from './components/Footer';

import botImage1 from './assets/bot1.png';
import botImage2 from './assets/bot2.png';
import botImage3 from './assets/bot3.png';

const App: React.FC = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <div className="container py-5" id="findings">
        <h2 className="text-center mb-4">Our Findings</h2>
        <div className="row">
          <div className="col-md-8 mx-auto">
            <CustomCard
              title="Bot Detection Algorithm"
              description="Our latest algorithm can detect social media bots with 95% accuracy."
              image={botImage1}
              imagePosition="left"
            />
            <CustomCard
              title="Bot Behavior Analysis"
              description="Analyzing patterns in bot behavior to identify suspicious activities."
              image={botImage2}
              imagePosition="right"
            />
            <CustomCard
              title="Bot Classification Model"
              description="Developing a machine learning model to classify bot types."
              image={botImage3}
              imagePosition="left"
            />
          </div>
        </div>
      </div>
      <div className="container py-5" id="resources">
        <h2 className="text-center mb-4">Resources</h2>
        <div className="row">
          <div className="col-md-8 mx-auto">
            <ul>
              <li><a href="#">Bot Detection Algorithm Paper</a></li>
              <li><a href="#">Bot Behavior Analysis Paper</a></li>
              <li><a href="#">Bot Classification Model Paper</a></li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
