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
        <Route path="/" element={<Home />} />
        <Route path="/background" element={<Background />} />
        <Route path="/industry" element={<Industry />} />
        <Route path="/analysis" element={<Analysis />} />
      </Routes>
    </Router>
  );
}

export default App;
