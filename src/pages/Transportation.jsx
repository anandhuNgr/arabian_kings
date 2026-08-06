import React from 'react';
import PageHero from '../components/ui/PageHero';
import SectionHeading from '../components/ui/SectionHeading';

const Transportation = () => {
  return (
    <div>
      <PageHero eyebrow="Transportation" title="Reliable airport transfers and private chauffeur services" text="Move comfortably between airports, hotels and attractions with secure, punctual and well-coordinated transport." image="/assets/img/airport.webp" primaryAction={{ label: 'Book Transfer', to: '/contact' }} secondaryAction={{ label: 'Call Now', to: 'tel:+971509675843' }} />
      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl grid gap-8 lg:grid-cols-2">
          <div className="rounded-[2rem] bg-[#071A2B] p-8 text-white">
            <SectionHeading eyebrow="Airport transfers" title="Stress-free arrival and departure" text="From Dubai International Airport to your hotel, resort or attraction, we coordinate punctual transfers tailored to your itinerary." />
          </div>
          <div className="rounded-[2rem] border border-[#EAD8B1]/50 bg-[#FAF7F0] p-8">
            <SectionHeading eyebrow="Private transport" title="Comfortable travel for families and groups" text="Arrange premium vehicles for city tours, group travel, event transport and full-day sightseeing without the hassle." />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Transportation;
