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
              <div className="mt-4 rounded-3xl border border-white/10 bg-white/5 p-4">
                <p className="text-sm uppercase tracking-[0.24em] text-[#EAD8B1]/80">Follow us</p>
                <div className="mt-3 flex flex-wrap gap-3">
                  <a href={contactDetails.instagram} target="_blank" rel="noreferrer" className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-[#EAD8B1] transition hover:border-[#D6A84B] hover:bg-[#D6A84B]/15">Instagram</a>
                  <a href={contactDetails.facebook} target="_blank" rel="noreferrer" className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-[#EAD8B1] transition hover:border-[#D6A84B] hover:bg-[#D6A84B]/15">Facebook</a>
                </div>
              </div>
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
      <section className="px-6 pb-20 lg:px-8">
        <div className="mx-auto max-w-7xl grid gap-6 lg:grid-cols-2">
          <div className="rounded-[2rem] border border-[#E6D2A2]/40 bg-white p-8 shadow-[0_25px_60px_rgba(7,26,43,0.08)]">
            <p className="text-sm uppercase tracking-[0.3em] text-[#B75D4B]">Talk to a member of our UAE team</p>
            <h3 className="mt-4 font-playfair text-2xl text-[#071A2B]">Expert travel support and tailored tour packages from Arabian Kings Travel & Tourism. Let’s plan your journey!</h3>
            <div className="mt-6 space-y-4 text-sm text-[#373D4A]">
              <p className="flex items-center gap-2"><span>📍</span> Damascus Street - Al Qusais Industrial Area 4, Dubai, UAE</p>
              <p className="flex items-center gap-2"><span>📞</span> <a href="tel:+971509675843" className="text-[#B75D4B]">+971 50 967 5843</a></p>
              <p className="flex items-center gap-2"><span>📞</span> <a href="tel:+971507575843" className="text-[#B75D4B]">+971 50 757 5843</a></p>
              <p className="flex items-center gap-2"><span>✉️</span> <a href="mailto:info@arabiankings.ae" className="text-[#B75D4B]">info@arabiankings.ae</a></p>
            </div>
          </div>
          <div className="rounded-[2rem] border border-[#E6D2A2]/40 bg-white p-8 shadow-[0_25px_60px_rgba(7,26,43,0.08)]">
            <p className="text-sm uppercase tracking-[0.3em] text-[#B75D4B]">Talk to a member of our Sales team</p>
            <h3 className="mt-4 font-playfair text-2xl text-[#071A2B]">Get the best deals and expert guidance on your next trip. Our team is here to help!</h3>
            <div className="mt-6 space-y-4 text-sm text-[#373D4A]">
              <p className="flex items-center gap-2"><span>📍</span> Travel World, F3, Technomall, Techno Park Campus, TVM, Kerala</p>
              <p className="flex items-center gap-2"><span>📞</span> <a href="tel:+916238771651" className="text-[#B75D4B]">+91 6238 771 651</a></p>
              <p className="flex items-center gap-2"><span>✉️</span> <a href="mailto:sales@arabiankings.ae" className="text-[#B75D4B]">sales@arabiankings.ae</a></p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
