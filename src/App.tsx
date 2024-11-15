import React from 'react';
// import logo from './assets/logo.svg';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

import Navbar from './layouts/Navbar';
import Home from './pages/Home';
import MustSee from './pages/MustSee';
import Footer from './layouts/Footer';

const App: React.FC = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/must-see" element={<MustSee />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
