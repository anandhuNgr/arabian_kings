import React from "react";
import { motion } from "framer-motion";
import Tabs from "../../components/tabs/Tab";

const destinations = {
  Hotels: [
    { title: "Everest trek to Base Camp", price: "$105.00", image: "assets/img/dubai/swim.webp" },
    { title: "Kathmandu tour", price: "$85.00", image: "assets/img/dubai/garden.webp" },
    { title: "Beautiful Pokhara", price: "$100.00", image: "assets/img/dubai/dive.webp" },
  ],
  Tours: [
    { title: "Langkawi beaches", price: "$120.00", image: "assets/img/dubai/frame.webp" },
    { title: "Kuala Lumpur tour", price: "$90.00", image: "assets/img/dubai/desert.webp" },
  ],
  Events: [
    { title: "Bali adventure", price: "$150.00", image: "assets/img/airport.webp" },
    { title: "Jakarta city tour", price: "$95.00", image: "assets/img/travel.webp" },
  ],
};

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.14,
    },
  },
};

const card = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

const Deals = () => {
  const tabs = Object.keys(destinations);

  return (
    <section className="bg-[#F8F2E6] py-14">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.4em] text-[#B98B1A]">Premium journeys curated for comfort and ease</p>
          <h2 className="mt-4 text-4xl font-playfair text-[#071A2B] sm:text-5xl">Discover exclusive deals for your next escape</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-[#38404F]/85">
            Every package is shaped around trusted local coordination, thoughtful pacing and the flexibility to personalise your stay.
          </p>
        </div>

        <div className="rounded-[2rem] bg-white p-5 shadow-[0_25px_80px_rgba(7,26,43,0.08)]">
          <Tabs tabs={tabs}>
            {tabs.map((tab) => (
              <motion.div key={tab} className="grid gap-6 md:grid-cols-3" variants={container}>
                {destinations[tab].map((place, index) => (
                  <motion.article
                    key={index}
                    className="overflow-hidden rounded-[1.75rem] border border-[#071A2B]/10 bg-[#FFFFFF] shadow-[0_18px_40px_rgba(7,26,43,0.08)] transition duration-300 ease-out hover:-translate-y-2 hover:shadow-[0_28px_85px_rgba(7,26,43,0.14)]"
                    variants={card}
                    whileHover={{ scale: 1.01 }}
                  >
                    <div className="relative overflow-hidden">
                      <img src={place.image} alt={place.title} className="h-52 w-full object-cover transition duration-500 ease-out hover:scale-105" />
                      <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-black/25 to-transparent" />
                      <span className="absolute right-4 top-4 rounded-full border border-white/20 bg-black/25 px-3 py-1 text-xs uppercase tracking-[0.2em] text-white/90 backdrop-blur-sm">
                        {place.price}
                      </span>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center justify-between text-sm text-[#52606D]">
                        <span className="font-semibold uppercase tracking-[0.24em]">{tab}</span>
                        <span className="rounded-full bg-[#F5E1A4] px-3 py-1 text-[#A87C0D]">{index + 1}</span>
                      </div>
                      <h3 className="mt-4 text-2xl font-semibold text-[#071A2B]">{place.title}</h3>
                      <p className="mt-3 text-sm leading-7 text-[#4B5563]">Handpicked experience for refined travellers who want an unforgettable UAE stay.</p>
                      <button className="mt-6 inline-flex items-center justify-center rounded-full bg-[#071A2B] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#0A2A4A]">
                        Enquire
                      </button>
                    </div>
                  </motion.article>
                ))}
              </motion.div>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default Deals;
