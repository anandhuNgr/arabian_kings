export const navigationLinks = [
  { label: 'Home', path: '/' },
  { label: 'UAE Tours', path: '/tours' },
  { label: 'Holiday Packages', path: '/packages' },
  { label: 'Services', path: '/services' },
  { label: 'Experiences', path: '/experiences' },
  { label: 'Transportation', path: '/transportation' },
  { label: 'About Us', path: '/about' },
  { label: 'Contact', path: '/contact' },
];

export const experiences = [
  {
    title: 'Dubai City Tour',
    location: 'Dubai',
    description: 'A polished introduction to Dubai’s skyline, heritage landmarks and iconic waterfronts.',
    duration: 'Half day',
    image: '/assets/img/dubai/burj.webp',
    path: '/tours/dubai-city-tour',
  },
  {
    title: 'Abu Dhabi City Tour',
    location: 'Abu Dhabi',
    description: 'Discover the capital’s grand architecture, cultural landmarks and elegant waterfronts.',
    duration: 'Full day',
    image: '/assets/img/city-water.jpg',
    path: '/tours/abu-dhabi-city-tour',
  },
  {
    title: 'Desert Safari',
    location: 'Dubai Desert',
    description: 'An adventurous evening with dune driving, sunset views and a traditional Bedouin-style experience.',
    duration: '6–7 hours',
    image: '/assets/img/jeep-safari.webp',
    path: '/tours/desert-safari',
  },
  {
    title: 'Dhow Cruise',
    location: 'Dubai Marina',
    description: 'A relaxed evening on the water with dining, skyline views and a refined atmosphere.',
    duration: '2–3 hours',
    image: '/assets/img/dubai/cruise.webp',
    path: '/tours/dhow-cruise',
  },
];

export const tourCategories = [
  { name: 'Adventure', image: '/assets/img/jeep-safari.webp' },
  { name: 'Family', image: '/assets/img/people.webp' },
  { name: 'Luxury', image: '/assets/img/luxury-hotel.webp' },
  { name: 'Culture', image: '/assets/img/uae.webp' },
  { name: 'Nature', image: '/assets/img/travel.webp' },
  { name: 'Corporate', image: '/assets/img/airport.webp' },
  { name: 'Wellness', image: '/assets/img/dubai/garden.webp' },
];

export const featuredPackages = [
  {
    title: 'Dubai & Abu Dhabi Discovery',
    destination: 'Dubai, Abu Dhabi',
    duration: '4 nights',
    type: 'Private tour',
    inclusions: ['Hotel transfers', 'Guided sightseeing', 'Flexible itinerary'],
    price: 'On request',
    image: '/assets/img/dubai-women.webp',
    path: '/packages/dubai-abu-dhabi-discovery',
  },
  {
    title: 'Desert Escape & Dhow Evening',
    destination: 'Dubai',
    duration: '3 nights',
    type: 'Family friendly',
    inclusions: ['Safari experience', 'Dinner cruise', 'Airport pickup'],
    price: 'On request',
    image: '/assets/img/dubai/cruise.webp',
    path: '/packages/desert-escape',
  },
  {
    title: 'Luxury Emirates Retreat',
    destination: 'Dubai, Ras Al Khaimah',
    duration: '5 nights',
    type: 'Luxury',
    inclusions: ['Premium transfers', 'Resort stays', 'Concierge planning'],
    price: 'On request',
    image: '/assets/img/luxury-hotel.webp',
    path: '/packages/luxury-emirates-retreat',
  },
];

export const servicesOverview = [
  {
    title: 'UAE Packages',
    description: 'Curated multi-day stays, transfers and private tours for families, couples and groups.',
    image: '/assets/img/dubai/burj.webp',
    path: '/services/service1',
  },
  {
    title: 'Excursions',
    description: 'Flexible half-day and full-day trips to Dubai, Abu Dhabi, desert safaris and cultural highlights.',
    image: '/assets/img/travelling.webp',
    path: '/services/service2',
  },
  {
    title: 'Limousine',
    description: 'Luxury transfers, airport meet-and-greet and chauffeur service with high-end vehicles.',
    image: '/assets/img/lamosine.webp',
    path: '/services/service3',
  },
  {
    title: 'VISA',
    description: 'Visa support for tourist, business and transit permits with rapid documentation guidance.',
    image: '/assets/img/VISAS.webp',
    path: '/services/service4',
  },
];

export const serviceDetails = {
  service1: {
    eyebrow: 'UAE Packages',
    title: 'Choose a bespoke UAE package that fits your travel goals',
    text: 'We design every package with luxury transfers, premium accommodation and guided sightseeing across Dubai, Abu Dhabi and beyond.',
    image: '/assets/img/dubai/burj.webp',
    features: [
      'Custom itinerary planning',
      'Private airport transfers',
      'Hotel and resort bookings',
      'Daily sightseeing with experienced guides',
      '24/7 travel support',
    ],
    highlights: [
      'Family-friendly, luxury and corporate packages',
      'Flexible durations from 3 to 10 nights',
      'Personalised activities, dining and excursions',
      'Local expertise for smooth, memorable travel',
    ],
  },
  service2: {
    eyebrow: 'Excursions',
    title: 'Premium excursions for unforgettable moments in the Emirates',
    text: 'From city tours to desert adventures and evening cruises, we make every excursion elegant, effortless and tailored to your preferences.',
    image: '/assets/img/dubai/cruise.webp',
    features: [
      'Desert safari experiences',
      'Dubai city highlights',
      'Abu Dhabi cultural tours',
      'Private dhow cruises and sunset trips',
      'Flexible pickups and timings',
    ],
    highlights: [
      'Small-group and private excursion options',
      'Expert local guides and concierge support',
      'Choose from daytime, sunset and evening journeys',
      'Fully managed transport and entrance logistics',
    ],
  },
  service3: {
    eyebrow: 'Limousine',
    title: 'Executive limousine service with luxury vehicles and professional chauffeurs',
    text: 'Travel in comfort and style with our limousine transfer service, perfect for airport journeys, business travel and special occasions.',
    image: '/assets/img/airport.webp',
    features: [
      'Airport meet-and-greet',
      'Luxury sedans and SUVs',
      'Professional English-speaking chauffeurs',
      'Real-time flight tracking',
      'Hourly and point-to-point bookings',
    ],
    highlights: [
      'Discreet, punctual and comfortable service',
      'Ideal for arrivals, departures and business travel',
      'VIP handling for guests and corporate clients',
      'Safety, hygiene and premium vehicle standards',
    ],
  },
  service4: {
    eyebrow: 'VISA',
    title: 'Visa processing and travel documentation support for UAE visitors',
    text: 'Our visa service simplifies entry to the UAE with expert support for tourist, business, transit and multi-entry permits.',
    image: '/assets/img/VISAS.webp',
    features: [
      'Tourist and business visa applications',
      'Visa status tracking and updates',
      'Document preparation and submission',
      'Fast-track processing options',
      'Dedicated support through approval',
    ],
    highlights: [
      'Clear guidance on UAE entry requirements',
      'Support for multiple nationalities',
      'Local sponsorship and visa handling',
      'Convenient service with minimal paperwork',
    ],
  },
};

export const destinations = [
  { name: 'Dubai', image: '/assets/img/dubai/burj.webp', description: 'Iconic skyline, luxury stays and waterfront experiences.' },
  { name: 'Abu Dhabi', image: '/assets/img/lighted-abhudabi.jpg', description: 'Elegant architecture, museums and refined cultural encounters.' },
  { name: 'Sharjah', image: '/assets/img/travel.webp', description: 'Art, heritage and a calmer take on the Emirates.' },
  { name: 'Ras Al Khaimah', image: '/assets/img/jeep-safari.webp', description: 'Mountain views, resorts and scenic adventures.' },
];

export const blogPosts = [
  {
    title: 'Best time to visit Dubai',
    excerpt: 'Plan your UAE journey around the seasons for comfortable sightseeing and outdoor adventures.',
    image: '/assets/img/dubai-women.webp',
    path: '/blog/best-time-to-visit-dubai',
  },
  {
    title: 'Dubai travel guide for families',
    excerpt: 'A practical guide to family-friendly attractions, transfers and pacing for a relaxed holiday.',
    image: '/assets/img/people.webp',
    path: '/blog/dubai-guide-for-families',
  },
  {
    title: 'What to wear on a desert safari',
    excerpt: 'Helpful tips to stay comfortable in the desert while keeping your style polished.',
    image: '/assets/img/jeep-safari.webp',
    path: '/blog/what-to-wear-on-a-desert-safari',
  },
];

export const faqs = [
  {
    question: 'Do you offer private tours in Dubai and Abu Dhabi?',
    answer: 'Yes. We create private and small-group experiences tailored to your travel style, pace and interests.',
  },
  {
    question: 'Can you help with airport transfers and local transportation?',
    answer: 'Absolutely. We coordinate reliable airport transfers, private chauffeured journeys and group transport arrangements.',
  },
  {
    question: 'Is customised planning available for families and groups?',
    answer: 'Yes. Our team can design personalised itineraries for families, couples, groups and corporate travellers.',
  },
];

export const contactDetails = {
  phone: '+971 50 967 5843',
  whatsapp: 'https://wa.me/971509675843?text=Hello%20there!%20I%20would%20like%20to%20inquire%20about%20your%20services.',
  email: 'info@arabiankingstravelandtourism.ae',
  address: 'Dubai, United Arab Emirates',
  hours: 'Mon–Sat: 9:00 AM – 8:00 PM',
  instagram: 'https://www.instagram.com/arabiankingstravelandtourism?igsh=MTRzd2Vycnliemk5cg==',
  facebook: 'https://www.facebook.com/profile.php?id=61569554835750&ref=xav_ig_profile_web',
};
