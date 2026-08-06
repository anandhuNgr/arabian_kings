import React from 'react';
import SectionHeading from '../../components/ui/SectionHeading';
import { featuredPackages } from '../../data/siteContent';

const PremiumDeals = () => {
  return (
    <section className="px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Popular packages" title="Premium journeys curated for comfort and ease" text="Every package is shaped around trusted local coordination, thoughtful pacing and the flexibility to personalise your stay." align="center" />
        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {featuredPackages.map((item) => (
            <div key={item.title} className="overflow-hidden rounded-[2rem] border border-[#EAD8B1]/60 bg-[#FAF7F0] shadow-[0_20px_60px_rgba(7,26,43,0.08)]">
              <img src={item.image} alt={item.title} className="h-56 w-full object-cover" />
              <div className="p-6">
                <div className="flex items-center justify-between text-sm text-[#20252A]/70">
                  <span>{item.destination}</span>
                  <span>{item.duration}</span>
                </div>
                <h3 className="mt-4 font-playfair text-2xl text-[#071A2B]">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#20252A]/80">{item.inclusions.join(' • ')}</p>
                <div className="mt-6 flex items-center justify-between">
                  <span className="text-sm font-semibold text-[#D6A84B]">{item.price}</span>
                  <a href="https://wa.me/971509675843?text=Hello%20there!%20I%20would%20like%20to%20enquire%20about%20this%20package." className="rounded-full bg-[#071A2B] px-4 py-2 text-sm font-semibold text-white">Enquire</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PremiumDeals;
