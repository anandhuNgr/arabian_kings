import React from 'react';
import SectionHeading from '../../components/ui/SectionHeading';
import { experiences } from '../../data/siteContent';
import InfoCard from '../../components/ui/InfoCard';

const TravelSection = () => {
  return (
    <section className="bg-[#FAF7F0] px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Featured UAE experiences" title="Experiences worth travelling for" text="From polished city escapes to desert adventures, every journey is designed to feel effortless, comfortable and memorable." align="center" />
        <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {experiences.map((item) => (
            <InfoCard key={item.title} title={item.title} description={item.description} image={item.image} path={item.path} badge={item.location} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TravelSection;
