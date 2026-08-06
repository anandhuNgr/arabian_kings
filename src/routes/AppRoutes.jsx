import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import MainLayout from '../components/Layouts/MainLayout';
import Home from '../pages/Home/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Faq from '../pages/Faq';
import Support from '../pages/Support';
import Chat from '../pages/Chat';
import Login from '../pages/Login';
import Tours from '../pages/Tours';
import Packages from '../pages/Packages';
import ServicesOverview from '../pages/Services';
import ServicesOne from '../pages/Services/Services-one';
import ServicesTwo from '../pages/Services/Services-two';
import ServicesThree from '../pages/Services/Services-three';
import ServicesFour from '../pages/Services/Service-four';
import Experiences from '../pages/Experiences';
import Transportation from '../pages/Transportation';
import NotFound from '../pages/NotFound';

const PageTransition = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    className="page-transition"
  >
    {children}
  </motion.div>
);

const AnimatedRoutes = () => {
  const location = useLocation();

  useEffect(() => {
    NProgress.configure({ showSpinner: false, easing: 'ease', speed: 500, trickleSpeed: 200 });
    NProgress.start();
    const timer = setTimeout(() => NProgress.done(), 240);
    return () => {
      clearTimeout(timer);
      NProgress.done();
    };
  }, [location]);

  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Home /></PageTransition>} />
        <Route path="/about" element={<PageTransition><About /></PageTransition>} />
        <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
        <Route path="/tours" element={<PageTransition><Tours /></PageTransition>} />
        <Route path="/packages" element={<PageTransition><Packages /></PageTransition>} />
        <Route path="/services" element={<PageTransition><ServicesOverview /></PageTransition>} />
        <Route path="/services/service1" element={<PageTransition><ServicesOne /></PageTransition>} />
        <Route path="/services/service2" element={<PageTransition><ServicesTwo /></PageTransition>} />
        <Route path="/services/service3" element={<PageTransition><ServicesThree /></PageTransition>} />
        <Route path="/services/service4" element={<PageTransition><ServicesFour /></PageTransition>} />
        <Route path="/experiences" element={<PageTransition><Experiences /></PageTransition>} />
        <Route path="/transportation" element={<PageTransition><Transportation /></PageTransition>} />
        <Route path="/help/faq" element={<PageTransition><Faq /></PageTransition>} />
        <Route path="/help/support" element={<PageTransition><Support /></PageTransition>} />
        <Route path="/help/chat" element={<PageTransition><Chat /></PageTransition>} />
        <Route path="/login" element={<PageTransition><Login /></PageTransition>} />
        <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
};

const AppRoutes = () => {
  return (
    <Router>
      <MainLayout>
        <AnimatedRoutes />
      </MainLayout>
    </Router>
  );
};

export default AppRoutes;
