import React from 'react';
import { Link } from 'react-router-dom';
import { contactDetails, navigationLinks } from '../../data/siteContent';

const Footer = () => {
  return (
    <footer className="bg-[#071A2B] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[1.2fr_0.8fr_0.8fr] lg:px-8">
        <div>
          <p className="font-playfair text-3xl text-[#EAD8B1]">Arabian Kings</p>
          <p className="mt-4 max-w-md text-sm leading-7 text-white/70">Trusted UAE travel specialists creating personalised journeys across Dubai, Abu Dhabi and the Emirates with comfort, local knowledge and attentive support.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href={contactDetails.whatsapp} className="rounded-full bg-[#D6A84B] px-4 py-2 text-sm font-semibold text-[#071A2B]">WhatsApp Enquiry</a>
            <a href={`tel:${contactDetails.phone}`} className="rounded-full border border-white/20 px-4 py-2 text-sm font-semibold text-white/90">Call Now</a>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#EAD8B1]">Explore</h3>
          <ul className="mt-4 space-y-3 text-sm text-white/70">
            {navigationLinks.slice(0, 6).map((item) => (
              <li key={item.path}><Link to={item.path} className="transition hover:text-[#D6A84B]">{item.label}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#EAD8B1]">Contact</h3>
          <ul className="mt-4 space-y-3 text-sm text-white/70">
            <li><a href={`tel:${contactDetails.phone}`} className="hover:text-[#D6A84B]">{contactDetails.phone}</a></li>
            <li><a href={`mailto:${contactDetails.email}`} className="hover:text-[#D6A84B]">{contactDetails.email}</a></li>
            <li>{contactDetails.address}</li>
            <li>{contactDetails.hours}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 px-6 py-4 text-center text-sm text-white/60 lg:px-8">© 2026 Arabian Kings Travel & Tourism LLC. All rights reserved.</div>
    </footer>
  );
};

export default Footer;
