import React from 'react';
import Header from '../comman/Header';
import Footer from './Footer';

const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default MainLayout;
