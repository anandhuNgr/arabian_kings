import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import AppRoutes from './routes/AppRoutes';
import FloatingIcon from './components/FloatingIcon/FloatingIcon';
import './App.css';


const Loader = () => {
  return (
    <div className="fixed inset-0 bg-white/95 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="travel-loader-icon relative flex h-24 w-24 items-center justify-center rounded-full bg-white/90 shadow-[0_30px_80px_rgba(7,26,43,0.18)]">
        <div className="travel-loader-icon__ring" />
        <div className="travel-loader-icon__plane">
          <img
            src="https://img.icons8.com/external-flat-icons-pause-08/64/external-air-transportation-flat-icons-pause-08.png"
            alt="Flight loader"
          />
        </div>
      </div>
    </div>
  );
};

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
   
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);

    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative">
      {loading && <Loader />}
      <AnimatePresence mode="wait">
        {!loading && (
          <motion.div
            key="app-content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <AppRoutes />
          </motion.div>
        )}
      </AnimatePresence>
      <div className="fixed bottom-16 right-6">
        <FloatingIcon />
      </div>
    </div>
  );
};

export default App;
