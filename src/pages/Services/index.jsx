import React from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../../components/ui/PageHero';
import SectionHeading from '../../components/ui/SectionHeading';
import { servicesOverview } from '../../data/siteContent';

const ServicesOverview = () => {
  return (
    <div>
      <PageHero
        eyebrow="Services"
        title="Premium travel services for the UAE"
        text="Discover our complete service portfolio for personalised tours, transfers, excursions and visa support across Dubai, Abu Dhabi and beyond."
        image="/assets/img/dubai/burj.webp"
        primaryAction={{ label: 'Contact Us', to: '/contact' }}
        secondaryAction={{ label: 'WhatsApp', to: 'https://wa.me/971509675843' }}
      />

      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Our services"
            title="Choose the service that suits your journey"
            text="From curated UAE packages to executive limousine transfers and visa assistance, every service is built for effortless travel."
            align="center"
          />

          <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {servicesOverview.map((service) => (
              <Link
                to={service.path}
                key={service.title}
                className="group overflow-hidden rounded-[2rem] border border-[#EAD8B1]/50 bg-white shadow-[0_20px_60px_rgba(7,26,43,0.08)] transition hover:-translate-y-1"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="p-6">
                  <h3 className="font-playfair text-2xl text-[#071A2B]">{service.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-[#20252A]/80">{service.description}</p>
                  <span className="mt-6 inline-flex text-sm font-semibold text-[#D6A84B]">Learn more →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesOverview;
