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

const App: React.FC = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Navbar />
      </Router>
    </>
  );
};

export default App;
