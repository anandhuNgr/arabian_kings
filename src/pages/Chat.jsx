import React from 'react';
import PageHero from '../components/ui/PageHero';
import { contactDetails } from '../data/siteContent';

function Chat() {
  return (
    <div>
      <PageHero eyebrow="Quick chat" title="Start a conversation with our travel team" text="Message us on WhatsApp or email for fast answers and itinerary guidance." image="/assets/img/dubai/cruise.webp" primaryAction={{ label: 'WhatsApp', to: contactDetails.whatsapp }} secondaryAction={{ label: 'Email', to: `mailto:${contactDetails.email}` }} />
      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-4xl rounded-[2rem] border border-[#EAD8B1]/50 bg-[#FAF7F0] p-8 text-center">
          <h2 className="font-playfair text-3xl text-[#071A2B]">Prefer a fast reply?</h2>
          <p className="mt-4 text-sm leading-7 text-[#20252A]/80">Our team is ready to help with ideas, availability and trip planning suggestions.</p>
          <div className="mt-8 flex justify-center gap-4">
            <a href={contactDetails.whatsapp} className="rounded-full bg-[#D6A84B] px-6 py-3 font-semibold text-[#071A2B]">Open WhatsApp</a>
            <a href={`mailto:${contactDetails.email}`} className="rounded-full bg-[#071A2B] px-6 py-3 font-semibold text-white">Send Email</a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Chat;