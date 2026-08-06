import React from 'react';
import PageHero from '../components/ui/PageHero';
import SectionHeading from '../components/ui/SectionHeading';
import { experiences } from '../data/siteContent';

const Tours = () => {
  return (
    <div>
      <PageHero eyebrow="UAE tours" title="Private and shared experiences across Dubai and the Emirates" text="From city highlights to desert escapes, our tours are designed to feel polished, personalised and comfortably paced." image="/assets/img/uae.webp" primaryAction={{ label: 'Plan My Trip', to: '/contact' }} secondaryAction={{ label: 'Call Us', to: 'tel:+971509675843' }} />
      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Featured tours" title="Explore the Emirates your way" text="Choose a private experience, a family-friendly itinerary or a seamless transfer solution for your next UAE journey." align="center" />
          <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {experiences.map((item) => (
              <div key={item.title} className="overflow-hidden rounded-[2rem] border border-[#EAD8B1]/50 bg-white shadow-[0_20px_60px_rgba(7,26,43,0.08)]">
                <img src={item.image} alt={item.title} className="h-52 w-full object-cover" />
                <div className="p-6">
                  <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#D6A84B]">{item.location}</p>
                  <h3 className="mt-2 font-playfair text-2xl text-[#071A2B]">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#20252A]/80">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Tours;
