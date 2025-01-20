import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Component_1 from './components/Component_1';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/components" element={<Component_1 />} />
    </Routes>
  </Router>
);

export default App;
