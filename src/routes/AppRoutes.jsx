import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from '../components/Layouts/MainLayout';
import Home from '../pages/Home/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import ServicesOne from '../pages/Services/Services-one';

import ServicesThree from '../pages/Services/Services-three';
import ServicesTwo from '../pages/Services/Services-two';
import Faq from '../pages/Faq';
import Support from '../pages/Support';
import Chat from '../pages/Chat';
import Login from '../pages/Login';
import ServicesFour from '../pages/Services/Service-four';

const AppRoutes = () => {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services/service1" element={<ServicesOne />} />
          <Route path="/services/service2" element={<ServicesTwo />} />
          <Route path="/services/service3" element={<ServicesThree />} />
          <Route path="/services/service4" element={<ServicesFour />} />

          <Route path="/help/faq" element={<Faq />} />
          <Route path="/help/support" element={<Support />} />
          <Route path="/help/chat" element={<Chat />} />
          <Route path="/login" element={<Login />} />
          
        </Routes>
      </MainLayout>
    </Router>
  );
};

export default AppRoutes;
