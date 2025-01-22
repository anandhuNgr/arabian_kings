import React, { useState, useEffect } from 'react';
import AppRoutes from './routes/AppRoutes';
import FloatingIcon from './components/FloatingIcon/FloatingIcon';
import './App.css';


const Loader = () => {
  return (
    <div className="fixed inset-0 bg-white flex items-center justify-center z-50">
      <div className="loader"></div>
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
      <AppRoutes />
      <div className="fixed bottom-16 right-6">
        <FloatingIcon />
      </div>
    </div>
  );
};

export default App;
