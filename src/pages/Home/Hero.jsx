import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative isolate min-h-screen overflow-hidden bg-[#071A2B] text-white">
      <img src="/assets/img/dubai-women.webp" alt="Luxury UAE travel experience" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#071A2B] via-[#071A2B]/80 to-[#071A2B]/30" />
      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 py-24 sm:px-8 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.35em] text-[#EAD8B1]">Your UAE journey starts here</p>
          <h1 className="mt-4 font-playfair text-4xl leading-tight sm:text-5xl lg:text-7xl">Discover the Emirates like royalty.</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80 sm:text-xl">Explore Dubai and the UAE through thoughtfully planned tours, personalised itineraries and seamless travel experiences created around you.</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link to="/tours" className="rounded-full bg-[#D6A84B] px-6 py-3 font-semibold text-[#071A2B] transition hover:bg-[#EAD8B1]">Explore UAE Tours</Link>
            <a href="https://wa.me/971509675843?text=Hello%20there!%20I%20would%20like%20to%20plan%20my%20UAE%20trip." className="rounded-full border border-white/40 px-6 py-3 font-semibold text-white transition hover:border-[#D6A84B] hover:text-[#EAD8B1]">Plan My Trip</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
