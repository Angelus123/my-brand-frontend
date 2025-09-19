import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../components/Home';
import GeneralContact from '../components/GeneralContact';
import ServiceRequest from '../components/ServiceRequest';

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/GeneralContact" element={<GeneralContact />} />
        <Route path="/ServiceRequest" element={<ServiceRequest />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;