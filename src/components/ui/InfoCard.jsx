import React from 'react';
import { Link } from 'react-router-dom';

const InfoCard = ({ title, description, image, path, badge }) => {
  return (
    <Link to={path} className="group overflow-hidden rounded-[2rem] border border-[#EAD8B1]/60 bg-white shadow-[0_25px_60px_rgba(7,26,43,0.08)] transition hover:-translate-y-1">
      <div className="relative h-56 overflow-hidden">
        <img src={image} alt={title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
        {badge ? <span className="absolute left-4 top-4 rounded-full bg-[#071A2B]/85 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white">{badge}</span> : null}
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-playfair text-[#071A2B]">{title}</h3>
        <p className="mt-3 text-sm leading-7 text-[#20252A]/80">{description}</p>
      </div>
    </Link>
  );
};

export default InfoCard;
