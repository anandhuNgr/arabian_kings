import React from 'react';

const UnderConstruction = () => {
  return (
    <section className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center p-8 bg-white">
      <img
        src="/assets/img/construction.webp" // Replace with your image URL or path
        alt="Under Construction"
        className="w-[500px] h-[400px] mb-6 object-cover"
      />
      <h1 className="text-5xl font-bold text-gray-800 mb-4">Under Construction</h1>
      <p className="text-lg text-gray-600 mb-6">
        We're working hard to bring you an amazing experience. Please check back soon!
      </p>
      <div className="flex items-center justify-center w-16 h-16 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
    </section>
  );
};

export default UnderConstruction;
