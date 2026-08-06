import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../../components/ui/SectionHeading';
import { tourCategories } from '../../data/siteContent';

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.2,
    },
  },
};

const card = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const Activities = () => {
  return (
    <motion.section className="relative overflow-hidden bg-[#071A2B] px-6 py-20 text-white lg:px-8" initial="hidden" animate="show" variants={container}>
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[180px] bg-gradient-to-b from-[#11203B] to-transparent opacity-70" />
      <div className="pointer-events-none absolute right-0 top-12 h-72 w-72 rounded-full bg-[#D6A84B]/10 blur-3xl" />
      <div className="mx-auto relative max-w-7xl">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}>
          <SectionHeading
            eyebrow="Travel by experience"
            title="Choose the journey that fits your style"
            text="Whether you’re travelling with family, planning a luxury escape or arranging a group itinerary, Arabian Kings can shape the experience around your pace and preferences."
            align="center"
          />
        </motion.div>

        <motion.div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4" variants={container}>
          {tourCategories.map((item) => (
            <motion.div
              key={item.name}
              className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-[0_30px_70px_rgba(0,0,0,0.18)] transition duration-300 hover:-translate-y-2 hover:border-[#D6A84B]/40 hover:bg-white/10"
              variants={card}
              whileHover={{ scale: 1.02 }}
            >
              <div className="relative overflow-hidden">
                <img src={item.image} alt={item.name} className="h-48 w-full object-cover transition duration-500 ease-out group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-90" />
                <div className="absolute left-6 bottom-6 rounded-full bg-[#D6A84B]/15 px-4 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#F9F2E3] shadow-[0_15px_40px_rgba(0,0,0,0.18)]">
                  {item.name}
                </div>
              </div>
              <div className="p-6 py-8">
                <p className="text-sm leading-7 text-white/75">{item.name} experiences designed for a premium UAE journey.</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Activities;
