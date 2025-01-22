import React from 'react';
import PriceCard from '../../components/cards/PriceCard';

// Import local images
const imagePaths = [
  '/assets/img/dubai/desert.webp',
  '/assets/img/dubai/burj.webp',
  '/assets/img/dubai/dive.webp',
  '/assets/img/dubai/frame.webp',
  '/assets/img/dubai/swim.webp',
  '/assets/img/dubai/garden.webp',
  '/assets/img/dubai/Louvre.webp',
  '/assets/img/dubai/mall.webp',
  '/assets/img/dubai/cruise.webp',
  '/assets/img/dubai/museum.webp',

];

// Generate card data with random local images
export const cardData = Array.from({ length: 48 }, (_, index) => ({
  id: index + 1,
  image: imagePaths[Math.floor(Math.random() * imagePaths.length)], // Random image
  title: `Card Title ${index + 1}`,
  reviews: Math.floor(Math.random() * 200),
  rating: (Math.random() * 5).toFixed(1),
  originalPrice: (Math.random() * 200 + 50).toFixed(2),
  discountedPrice: (Math.random() * 50 + 20).toFixed(2),
//   isRecommended: Math.random() > 0.5, // Randomly recommend
}));

function Activities() {
  return (
    <div className="container mx-auto ">
      {/* Title Section */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Top Activities in Dubai</h1>
        <p className="text-gray-500 mt-2">Discover the best activities and attractions Dubai has to offer!</p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {cardData.map((card) => (
          <PriceCard key={card.id} {...card} />
        ))}
      </div>
    </div>
  );
}

export default Activities;
