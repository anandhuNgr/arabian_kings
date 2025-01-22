import React from 'react';
import Hero from './Hero';
import TravelSection from './TravelSection';
import TopDestinations from './TopDestination';
import Activities from './Activities';
import Deals from './Deals';
// import FeedBack from './FeedBack';

const Home = () => {
  return (
    <>
      <Hero />
      <TravelSection />
      <TopDestinations/>
      <Activities/>
      <Deals/>
      {/* <FeedBack/> */}
    </>
  );
};

export default Home;
