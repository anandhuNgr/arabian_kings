import React from 'react';

const Card = ({ image, alt, text }) => {
  return (
    <div className="group relative w-full overflow-hidden rounded-[1.75rem] shadow-[0_20px_50px_rgba(7,26,43,0.12)]">
      <img src={image} alt={alt} className="h-72 w-full object-cover transition duration-500 group-hover:scale-105" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#071A2B]/80 via-[#071A2B]/20 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-6">
        <p className="text-lg font-semibold text-white">{text}</p>
      </div>
    </div>
  );
};

export default Card;
