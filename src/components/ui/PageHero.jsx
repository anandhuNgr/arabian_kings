import React from 'react';
import { Link } from 'react-router-dom';

const PageHero = ({ eyebrow, title, text, image, primaryAction, secondaryAction, compact = false }) => {
  return (
    <section className={`relative overflow-hidden ${compact ? 'py-20' : 'min-h-[70vh]'} flex items-center`}>
      <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#071A2B]/90 via-[#071A2B]/70 to-[#071A2B]/30" />
      <div className="relative z-10 mx-auto flex w-full max-w-7xl items-center px-6 py-16 lg:px-8">
        <div className="max-w-3xl text-white">
          {eyebrow ? <p className="text-sm uppercase tracking-[0.4em] text-[#EAD8B1]">{eyebrow}</p> : null}
          <h1 className="mt-4 text-4xl font-playfair sm:text-5xl lg:text-6xl">{title}</h1>
          {text ? <p className="mt-6 text-lg leading-8 text-white/80">{text}</p> : null}
          {(primaryAction || secondaryAction) ? (
            <div className="mt-8 flex flex-wrap gap-4">
              {primaryAction ? <Link to={primaryAction.to} className="rounded-full bg-[#D6A84B] px-6 py-3 font-semibold text-[#071A2B] transition hover:bg-[#EAD8B1]">{primaryAction.label}</Link> : null}
              {secondaryAction ? <a href={secondaryAction.to} className="rounded-full border border-white/40 px-6 py-3 font-semibold text-white transition hover:border-[#D6A84B] hover:text-[#EAD8B1]">{secondaryAction.label}</a> : null}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
};

export default PageHero;
