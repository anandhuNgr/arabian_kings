import React, { useState } from "react";

const TopDestinations = () => {
  const [enlargedIndex, setEnlargedIndex] = useState(null); // Track which image is enlarged

  const destinations = [
    { name: "Museum of The Future", img: "/assets/img/dubai/museum.webp", col: "md:col-span-2", row: "row-span-1" },
    { name: "Dubai Marina", img: "/assets/img/dubai/cruise.webp", col: "col-span-1", row: "row-span-1" },
    { name: "Burj Khalifa", img: "/assets/img/dubai/burj.webp", col: "col-span-1", row: "md:row-span-2" },
    { name: "Louvre", img: "/assets/img/dubai/Louvre.webp", col: "col-span-1", row: "row-span-1" },
    { name: "Miracle Garden", img: "/assets/img/dubai/garden.webp", col: "md:col-span-2", row: "row-span-1" },
    { name: "Dubai Mall Fountain Show", img: "/assets/img/dubai/mall.webp", col: "col-span-1", row: "row-span-1" },
    { name: "Dubai Frame", img: "/assets/img/dubai/frame.webp", col: "col-span-1", row: "row-span-1" },
  ];

  const handleImageClick = (index) => {
    // Toggle the enlargement on click
    setEnlargedIndex(enlargedIndex === index ? null : index);
  };

  const closePopup = () => {
    setEnlargedIndex(null); // Close the popup
  };

  return (
    <section className="py-12  lg:container mx-auto">
      {/* Title */}
      <h2 className="text-4xl font-bold text-center mb-10 text-gray-800">
        Top Destinations
      </h2>

      {/* Grid Container */}
      <div className="grid grid-cols-2 md:grid-cols-6 gap-4 ">
        {/* Main Offer Card */}
        <div className="relative col-span-2 md:col-span-4 row-span-2 flex items-end p-6 rounded-xl overflow-hidden shadow-lg">
          <img
            src="/assets/img/dubai/swim.webp"
            alt="Holiday Offer"
            className="absolute inset-0 h-full w-full object-cover"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
          {/* Text Content */}
          <div className="relative text-white z-10">
            <p className="text-lg mb-2">Limited Time</p>
            <h3 className="text-5xl font-bold mb-2">50% Off</h3>
            <p className="text-xl">Holiday Packages</p>
            <button className="mt-4 bg-gradient-to-r from-red-500 to-gray-700 px-5 py-2 rounded-lg hover:bg-purple-700">
              Book Now
            </button>
          </div>
        </div>

        {/* Destination Cards */}
        {destinations.map((destination, index) => (
          <div
            key={index}
            className={`group relative ${destination.col} ${destination.row} rounded-lg overflow-hidden shadow-md cursor-pointer`}
            onClick={() => handleImageClick(index)} // Handle click event to enlarge
          >
            <img
              src={destination.img}
              alt={destination.name}
              className={`w-full h-full object-cover transition-transform duration-500 ${enlargedIndex === index ? "scale-125" : ""}`} // Conditionally scale image
            />
            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-500"></div>
            {/* Destination Name */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <p className="text-white text-lg font-bold">{destination.name}</p>
            </div>
          </div>
        ))}
      </div>

      {/* View All Button */}
      <div className="text-center mt-12">
        <button className="bg-gradient-to-r from-red-500 to-gray-700 text-white px-8 py-3 rounded-lg hover:bg-purple-700 transition-transform transform hover:scale-105">
          View All Destinations
        </button>
      </div>

      {/* Modal/Popup for Enlarged Image */}
      {enlargedIndex !== null && (
        <div
          className={`fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 transition-opacity duration-500 ${
            enlargedIndex !== null ? "opacity-100" : "opacity-0"
          }`}
          onClick={closePopup} // Close the popup when clicked outside the image
        >
          <div className="relative bg-white p-4 rounded-lg shadow-lg transition-transform duration-500 transform scale-90 hover:scale-100">
            {/* Close Button */}
            <button
              className="absolute top-2 right-2 bg-red-500 text-white h-9 w-9 rounded-full hover:bg-red-700"
              onClick={closePopup} // Close the modal when clicked
            >
              X
            </button>
            <img
              src={destinations[enlargedIndex].img}
              alt={destinations[enlargedIndex].name}
              className="w-[800px] max-h-[600px] object-contain" // Fixed height and width
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default TopDestinations;




