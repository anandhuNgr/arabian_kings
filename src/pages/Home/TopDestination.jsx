import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../../components/ui/SectionHeading';
import { destinations } from '../../data/siteContent';

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

const TopDestination = () => {
  return (
    <motion.section
      className="px-6 py-20 lg:px-8"
      initial="hidden"
      animate="show"
      variants={container}
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <SectionHeading
            eyebrow="Signature destinations"
            title="Where your UAE story unfolds"
            text="Explore the Emirates through iconic cities, cultural landmarks and scenic retreats curated by local experts."
            align="center"
          />
        </motion.div>

        <motion.div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4" variants={container}>
          {destinations.map((item) => (
            <motion.div
              key={item.name}
              className="overflow-hidden rounded-[2rem] bg-white shadow-[0_25px_60px_rgba(7,26,43,0.08)]"
              variants={card}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            >
              <img src={item.image} alt={item.name} className="h-56 w-full object-cover transition-transform duration-500 ease-out hover:scale-[1.03]" />
              <div className="p-6">
                <h3 className="font-playfair text-2xl text-[#071A2B]">{item.name}</h3>
                <p className="mt-3 text-sm leading-7 text-[#20252A]/75">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default TopDestination;