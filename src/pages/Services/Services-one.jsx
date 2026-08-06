import React from 'react';
import PageHero from '../../components/ui/PageHero';
import SectionHeading from '../../components/ui/SectionHeading';
import { serviceDetails } from '../../data/siteContent';

function ServicesOne() {
  const service = serviceDetails.service1;

  return (
    <div>
      <PageHero
        eyebrow={service.eyebrow}
        title={service.title}
        text={service.text}
        image={service.image}
        primaryAction={{ label: 'Request a Quote', to: '/contact' }}
        secondaryAction={{ label: 'WhatsApp', to: 'https://wa.me/971509675843' }}
      />

      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="UAE Packages"
            title="Personalised holiday packages made to impress"
            text="Our UAE packages combine premium logistics with local insight so you can enjoy every destination with confidence."
          />

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            <div className="space-y-6 rounded-[2rem] border border-[#EAD8B1]/50 bg-white p-8 shadow-[0_20px_60px_rgba(7,26,43,0.08)]">
              <h3 className="text-xl font-semibold text-[#071A2B]">Package inclusions</h3>
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
              <h3 className="text-xl font-semibold text-[#071A2B]">Why choose our packages</h3>
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

export default ServicesOne