import React from 'react';
import PageHero from '../components/ui/PageHero';
import SectionHeading from '../components/ui/SectionHeading';
import { experiences, tourCategories } from '../data/siteContent';

const Experiences = () => {
  return (
    <div>
      <PageHero eyebrow="Experiences" title="Moments that feel personal, premium and memorable" text="From luxury city stays to sunset adventures, our experiences are shaped around the way you want to travel." image="/assets/img/dubai/cruise.webp" primaryAction={{ label: 'Browse Tours', to: '/tours' }} secondaryAction={{ label: 'Contact Us', to: '/contact' }} />
      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="By interest" title="Choose the experience that suits your journey" text="We create experiences for adventurous travellers, families, luxury seekers and corporate groups alike." align="center" />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {tourCategories.map((item) => (
              <div key={item.name} className="overflow-hidden rounded-[2rem] border border-[#EAD8B1]/50 bg-white shadow-[0_20px_60px_rgba(7,26,43,0.08)]">
                <img src={item.image} alt={item.name} className="h-48 w-full object-cover" />
                <div className="p-6"><h3 className="font-playfair text-2xl text-[#071A2B]">{item.name}</h3></div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-[#FAF7F0] px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Signature activities" title="Popular UAE experiences" text="A refined selection of city tours, desert escapes and elegant evenings on the water." align="center" />
          <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {experiences.map((item) => (
              <div key={item.title} className="rounded-[2rem] bg-white p-6 shadow-[0_20px_60px_rgba(7,26,43,0.08)]">
                <h3 className="font-playfair text-2xl text-[#071A2B]">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#20252A]/80">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Experiences;
