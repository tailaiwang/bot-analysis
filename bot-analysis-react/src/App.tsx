import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

/* Pages */
import Home from './pages/Home.tsx';
import Industry from './pages/Industry.tsx';
import Background from './pages/Background.tsx';
import Analysis from './pages/Analysis.tsx';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/bot-analysis/" element={<Home />} />
        <Route path="/bot-analysis/background" element={<Background />} />
        <Route path="/bot-analysis/industry" element={<Industry />} />
        <Route path="/bot-analysis/analysis" element={<Analysis />} />
      </Routes>
    </Router>
  );
}

export default App;
