import React from 'react';
import PageHero from '../components/ui/PageHero';
import { contactDetails } from '../data/siteContent';

const Contact = () => {
  return (
    <div>
      <PageHero eyebrow="Contact us" title="Let’s plan your next UAE journey" text="Share your travel plans and our team will help you shape a comfortable, well-organised itinerary." image="/assets/img/travel.webp" primaryAction={{ label: 'Call Now', to: `tel:${contactDetails.phone}` }} secondaryAction={{ label: 'WhatsApp', to: contactDetails.whatsapp }} />
      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[2rem] bg-[#071A2B] p-8 text-white">
            <h2 className="font-playfair text-3xl">Get in touch</h2>
            <p className="mt-4 text-white/80">We are available for enquiry, planning support and tailored travel assistance across Dubai and the Emirates.</p>
            <div className="mt-8 space-y-4 text-sm text-white/80">
              <p><strong>Phone:</strong> <a href={`tel:${contactDetails.phone}`} className="text-[#EAD8B1]">{contactDetails.phone}</a></p>
              <p><strong>Email:</strong> <a href={`mailto:${contactDetails.email}`} className="text-[#EAD8B1]">{contactDetails.email}</a></p>
              <p><strong>Address:</strong> {contactDetails.address}</p>
              <p><strong>Hours:</strong> {contactDetails.hours}</p>
            </div>
          </div>
          <div className="rounded-[2rem] border border-[#EAD8B1]/50 bg-[#FAF7F0] p-8">
            <h2 className="font-playfair text-3xl text-[#071A2B]">Send an enquiry</h2>
            <form className="mt-6 space-y-4">
              <input className="w-full rounded-2xl border border-[#EAD8B1] bg-white px-4 py-3" placeholder="Full name" />
              <input className="w-full rounded-2xl border border-[#EAD8B1] bg-white px-4 py-3" placeholder="Email address" />
              <input className="w-full rounded-2xl border border-[#EAD8B1] bg-white px-4 py-3" placeholder="WhatsApp number" />
              <textarea className="min-h-[140px] w-full rounded-2xl border border-[#EAD8B1] bg-white px-4 py-3" placeholder="Tell us about your trip" />
              <button className="rounded-full bg-[#D6A84B] px-6 py-3 font-semibold text-[#071A2B]">Submit Enquiry</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
