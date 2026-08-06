import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <section className="flex min-h-screen items-center justify-center bg-[#071A2B] px-6 py-20 text-white">
      <div className="max-w-2xl text-center">
        <p className="text-sm uppercase tracking-[0.35em] text-[#D6A84B]">404</p>
        <h1 className="mt-4 font-playfair text-4xl sm:text-5xl">The page you are looking for is not available.</h1>
        <p className="mt-6 text-lg text-white/70">It may have moved, or the link you followed is no longer active. Let us help you find the right UAE experience.</p>
        <div className="mt-8 flex justify-center gap-4">
          <Link to="/" className="rounded-full bg-[#D6A84B] px-6 py-3 font-semibold text-[#071A2B]">Back Home</Link>
          <Link to="/contact" className="rounded-full border border-white/20 px-6 py-3 font-semibold text-white">Contact Us</Link>
        </div>
      </div>
    </section>
  );
};

export default NotFound;