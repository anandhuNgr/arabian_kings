import React from 'react';

const TrustBar = () => {
  const items = ['Personalised itineraries', 'Local UAE experts', 'Private and group tours', 'Responsive support'];
  return (
    <section className="border-y border-[#EAD8B1]/60 bg-[#071A2B] px-6 py-6 text-white lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-wrap justify-center gap-4 text-sm font-medium uppercase tracking-[0.25em]">
        {items.map((item) => (
          <div key={item} className="rounded-full border border-white/10 bg-white/10 px-4 py-2">{item}</div>
        ))}
      </div>
    </section>
  );
};

export default TrustBar;