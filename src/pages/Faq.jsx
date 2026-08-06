import React from 'react';
import PageHero from '../components/ui/PageHero';
import { faqs } from '../data/siteContent';

function Faq() {
  return (
    <div>
      <PageHero eyebrow="Frequently asked questions" title="Helpful answers for planning your UAE visit" text="Find quick guidance on tours, transfers, group travel and tailored itineraries." image="/assets/img/uae.webp" primaryAction={{ label: 'Contact Us', to: '/contact' }} secondaryAction={{ label: 'WhatsApp', to: 'https://wa.me/971509675843' }} />
      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-5xl space-y-4">
          {faqs.map((item) => (
            <div key={item.question} className="rounded-[1.5rem] border border-[#EAD8B1]/50 bg-white p-6 shadow-[0_20px_60px_rgba(7,26,43,0.08)]">
              <h3 className="font-playfair text-xl text-[#071A2B]">{item.question}</h3>
              <p className="mt-3 text-sm leading-7 text-[#20252A]/80">{item.answer}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Faq;