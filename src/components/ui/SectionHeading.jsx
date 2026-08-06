import React from 'react';

const SectionHeading = ({ eyebrow, title, text, align = 'left' }) => {
  return (
    <div className={`max-w-3xl ${align === 'center' ? 'mx-auto text-center' : ''}`}>
      {eyebrow ? <p className="text-sm uppercase tracking-[0.3em] text-[#D6A84B] font-semibold">{eyebrow}</p> : null}
      <h2 className="mt-3 text-3xl md:text-4xl font-playfair text-current">{title}</h2>
      {text ? <p className="mt-4 text-lg text-current/80">{text}</p> : null}
    </div>
  );
};

export default SectionHeading;
