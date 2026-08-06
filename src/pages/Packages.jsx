import React from 'react';
import PageHero from '../components/ui/PageHero';
import SectionHeading from '../components/ui/SectionHeading';
import { featuredPackages } from '../data/siteContent';

const Packages = () => {
  return (
    <div>
      <PageHero eyebrow="Holiday packages" title="Tailored stays, transfers and experiences in one seamless plan" text="Whether you are planning a short escape or a longer family holiday, we shape your stay around comfort, convenience and local insight." image="/assets/img/luxury-hotel.webp" primaryAction={{ label: 'Request a Quote', to: '/contact' }} secondaryAction={{ label: 'WhatsApp', to: 'https://wa.me/971509675843' }} />
      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Signature packages" title="Comfort-first packages for every traveller" text="Browse thoughtfully curated options for couples, families, groups and corporate stays." align="center" />
          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {featuredPackages.map((item) => (
              <div key={item.title} className="overflow-hidden rounded-[2rem] border border-[#EAD8B1]/50 bg-[#FAF7F0] shadow-[0_20px_60px_rgba(7,26,43,0.08)]">
                <img src={item.image} alt={item.title} className="h-56 w-full object-cover" />
                <div className="p-6">
                  <div className="flex items-center justify-between text-sm text-[#20252A]/70">
                    <span>{item.destination}</span>
                    <span>{item.duration}</span>
                  </div>
                  <h3 className="mt-4 font-playfair text-2xl text-[#071A2B]">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#20252A]/80">{item.inclusions.join(' • ')}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Packages;
