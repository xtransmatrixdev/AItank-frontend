import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HoverPage from './pages/hovereffect';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HoverPage />} />
      </Routes>
    </Router>
  );
};

export default App;
