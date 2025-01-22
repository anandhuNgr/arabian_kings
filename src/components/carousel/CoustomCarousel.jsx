import React, { useState, useEffect } from "react";

const CustomCarousel = () => {
  // Slides data (you can replace this with your own images or content)
  const slides = [
    {
      image: "/assets/img/dubai-women.webp",
      heading: `Explore the Best of UAE`,
      subheading: "Tailored Packages for Every Journey!",
    },
    {
      image: "/assets/img/solo.webp",
      heading: "Unforgettable Adventures Await",
      subheading: "Discover UAE with Us!",
    },
    {
      image: "/assets/img/travelling.webp",
      heading: "Your Gateway to UAE Wonders",
      subheading: "Plan Your Perfect Trip Today!",
    },
  ];

  // State to manage the current active slide
  const [currentIndex, setCurrentIndex] = useState(0);

  // Autoplay: Automatically move to the next slide
  const [isAutoplay, setIsAutoplay] = useState(true);

  // Handle the "next" and "previous" slide actions
  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const goToPreviousSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  // Autoplay logic using useEffect
  useEffect(() => {
    if (isAutoplay) {
      const timer = setInterval(goToNextSlide, 5000); // Move to next slide every 5 seconds
      return () => clearInterval(timer); // Clean up the interval on unmount
    }
  }, [isAutoplay]);

  return (
    <div className="relative w-full lg:h-[70vh] h-screen overflow-hidden">
      {/* Slide Display */}
      <div className="relative w-full h-full">
        {/* First Slide */}
        <div
          className={`absolute w-full h-full bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
            currentIndex === 0 ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${slides[0].image})` }}
        ></div>

        {/* Second Slide */}
        <div
          className={`absolute w-full h-full bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
            currentIndex === 1 ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${slides[1].image})` }}
        ></div>

        {/* Third Slide with White Overlay */}
        <div
          className={`absolute w-full h-full bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
            currentIndex === 2 ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${slides[2].image})` }}
        >
          {/* White Overlay */}
          <div
            className={`absolute inset-0 ${
              currentIndex === 2 ? "bg-white bg-opacity-30" : ""
            }`}
          ></div>
        </div>

        {/* Centralized Content */}
        <div className="relative z-10 flex lg:items-center items-end lg:justify-start justify-center pb-5 lg:pb-0 w-full h-full text-white text-center px-4">
          <div className="lg:px-20 lg:w-6/12 leading-[4rem] tracking-wide">
            <h1
              className={`text-4xl md:text-6xl font-bold mb-6 ${
                slides[currentIndex].tColor || "text-black"
              }`}
            >
              {slides[currentIndex].heading}
            </h1>
            <p
              className={`text-lg md:text-xl mb-6 ${
                slides[currentIndex].tColor || "text-black"
              }`}
            >
              {slides[currentIndex].subheading}
            </p>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPreviousSlide}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white text-3xl p-2"
      >
        &#8249;
      </button>
      <button
        onClick={goToNextSlide}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white text-3xl p-2"
      >
        &#8250;
      </button>

      {/* Slide Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index ? "bg-white" : "bg-gray-500"
            }`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default CustomCarousel;
