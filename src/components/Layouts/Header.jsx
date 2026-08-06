import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { navigationLinks } from '../../data/siteContent';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#071A2B]/95 shadow-lg backdrop-blur' : 'bg-transparent'}`}>
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3 text-white min-w-[220px]">
          <img src="/assets/img/white-logo.png" alt="Arabian Kings Travel & Tourism logo" className="h-12 w-auto object-contain" />
        </Link>
        <nav className="hidden items-center gap-6 lg:flex flex-1 justify-center">
          {navigationLinks.map((item) => (
            <NavLink key={item.path} to={item.path} className={({ isActive }) => `text-sm font-medium transition ${isActive ? 'text-[#D6A84B]' : 'text-white/90 hover:text-[#EAD8B1]'}`}>
              {item.label}
            </NavLink>
          ))}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <a href="https://wa.me/971509675843?text=Hello%20there!%20I%20would%20like%20to%20inquire%20about%20your%20services." className="rounded-full border border-[#D6A84B]/70 px-4 py-2 text-sm font-semibold text-[#EAD8B1] transition hover:bg-[#D6A84B] hover:text-[#071A2B]">Plan My Trip</a>
          <Link to="/login" className="rounded-full border border-white/60 px-4 py-2 text-sm font-semibold text-white transition hover:border-[#D6A84B] hover:text-[#D6A84B]">Login</Link>
        </div>
        <button onClick={() => setOpen(true)} className="rounded-full border border-white/30 p-2 text-white lg:hidden" aria-label="Open menu">
          ☰
        </button>
      </div>
      {open ? (
        <div className="fixed inset-0 z-[999] bg-[#071A2B]/95 p-6 lg:hidden">
          <div className="flex items-center justify-between">
            <p className="font-playfair text-xl text-white">Arabian Kings</p>
            <button onClick={() => setOpen(false)} className="rounded-full border border-white/30 p-2 text-white" aria-label="Close menu">✕</button>
          </div>
          <nav className="mt-10 flex flex-col gap-4">
            {navigationLinks.map((item) => (
              <NavLink key={item.path} to={item.path} onClick={() => setOpen(false)} className="rounded-2xl border border-white/10 px-4 py-3 text-lg text-white/90">
                {item.label}
              </NavLink>
            ))}
            <Link to="/login" onClick={() => setOpen(false)} className="rounded-2xl border border-white/40 px-4 py-3 text-lg text-white/90">Login</Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
};

export default Header;
