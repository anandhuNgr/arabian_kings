import React from 'react';
import PageHero from '../components/ui/PageHero';
import { contactDetails } from '../data/siteContent';

function Support() {
  return (
    <div>
      <PageHero eyebrow="Support" title="Responsive support before and during your journey" text="We help with planning details, transport coordination and itinerary questions so your travel feels easy from start to finish." image="/assets/img/construction.webp" primaryAction={{ label: 'Contact Us', to: '/contact' }} secondaryAction={{ label: 'WhatsApp', to: contactDetails.whatsapp }} />
      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-[#EAD8B1]/50 bg-[#FAF7F0] p-8">
          <h2 className="font-playfair text-3xl text-[#071A2B]">Need help planning?</h2>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-[#20252A]/80">Our team is ready to assist with your travel preferences, destination choices and trip logistics.</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href={`tel:${contactDetails.phone}`} className="rounded-full bg-[#071A2B] px-6 py-3 font-semibold text-white">Call Support</a>
            <a href={contactDetails.whatsapp} className="rounded-full bg-[#D6A84B] px-6 py-3 font-semibold text-[#071A2B]">WhatsApp</a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Support;