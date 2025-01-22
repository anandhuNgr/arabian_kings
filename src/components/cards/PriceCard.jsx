// Card.js
import React from "react";

const PriceCard = ({ image, title, reviews, rating, originalPrice, discountedPrice, isRecommended }) => {
  return (
    <div className="border rounded-lg shadow-md p-4 flex flex-col gap-4 relative">
      {isRecommended && (
        <div className="absolute top-2 left-2 bg-red-500 text-white rounded-full px-3 py-1 text-xs font-semibold">
          Recommended
        </div>
      )}
      <img src={image} alt={title} className="rounded-lg h-48 object-cover" />
      <div className="flex flex-col gap-2">
        <h3 className="font-semibold text-lg">{title}</h3>
        <p className="text-sm text-gray-500">{reviews} Reviews</p>
        <div className="flex items-center">
          <div className="text-red-400 text-sm font-semibold">
            {"⭐".repeat(Math.floor(rating))}
          </div>
          <span className="ml-2 text-gray-500 text-sm">({rating})</span>
        </div>
        <div className="text-right">
          {originalPrice && (
            <p className="text-sm line-through text-gray-400">
              AED {originalPrice}
            </p>
          )}
          <p className="text-lg font-bold text-gray-800">AED {discountedPrice}</p>
        </div>
      </div>
    </div>
  );
};

export default PriceCard;
