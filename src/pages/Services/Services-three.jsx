import React from 'react';
import PageHero from '../../components/ui/PageHero';
import SectionHeading from '../../components/ui/SectionHeading';
import { serviceDetails } from '../../data/siteContent';

function ServicesThree() {
  const service = serviceDetails.service3;

  return (
    <div>
      <PageHero
        eyebrow={service.eyebrow}
        title={service.title}
        text={service.text}
        image={service.image}
        primaryAction={{ label: 'Arrange a Transfer', to: '/contact' }}
        secondaryAction={{ label: 'WhatsApp', to: 'https://wa.me/971509675843' }}
      />

      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Limousine service"
            title="Luxury transfers with professional chauffeurs"
            text="Our limousine service delivers discreet arrivals, chauffeured journeys and executive travel for airport transfers, meetings and VIP events."
          />

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            <div className="space-y-6 rounded-[2rem] border border-[#EAD8B1]/50 bg-white p-8 shadow-[0_20px_60px_rgba(7,26,43,0.08)]">
              <h3 className="text-xl font-semibold text-[#071A2B]">Premium services</h3>
              <ul className="space-y-4 text-sm text-[#20252A]/80">
                {service.features.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 inline-block h-2 w-2 rounded-full bg-[#D6A84B]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6 rounded-[2rem] border border-[#EAD8B1]/50 bg-[#FAF7F0] p-8 shadow-[0_20px_60px_rgba(7,26,43,0.08)]">
              <h3 className="text-xl font-semibold text-[#071A2B]">What sets us apart</h3>
              <ul className="space-y-4 text-sm text-[#20252A]/80">
                {service.highlights.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 inline-block h-2 w-2 rounded-full bg-[#071A2B]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ServicesThree