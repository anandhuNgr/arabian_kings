import React from 'react';
import PageHero from '../components/ui/PageHero';
import SectionHeading from '../components/ui/SectionHeading';

const About = () => {
  return (
    <div>
      <PageHero eyebrow="About Arabian Kings" title="A trusted UAE travel partner for personalised journeys" text="We combine local knowledge, polished coordination and thoughtful hospitality to create comfortable travel experiences across Dubai and the Emirates." image="/assets/img/people.webp" primaryAction={{ label: 'Start Planning', to: '/contact' }} secondaryAction={{ label: 'WhatsApp', to: 'https://wa.me/971509675843' }} />
      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl grid gap-8 lg:grid-cols-2">
          <div className="rounded-[2rem] bg-[#071A2B] p-8 text-white">
            <SectionHeading eyebrow="Why we are different" title="Designed around your travel style" text="Every itinerary is created with care, whether you are travelling as a couple, family, group or business guest." />
            <ul className="mt-6 space-y-3 text-sm text-white/80">
              <li>• Personalised itineraries tailored to your pace and interests</li>
              <li>• Trusted local coordination from arrival to departure</li>
              <li>• Flexible choices for luxury, culture, adventure and family travel</li>
            </ul>
          </div>
          <div className="rounded-[2rem] border border-[#EAD8B1]/50 bg-[#FAF7F0] p-8">
            <SectionHeading eyebrow="Our promise" title="Comfortable, seamless and memorable" text="Our team supports you with responsive communication, clear planning and attention to the details that matter most on your UAE holiday." />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
