import React from "react";
import Tabs from "../../components/tabs/Tab";



const destinations = {
  Hotels: [
    { title: "Everest trek to Base Camp", price: "$105.00", image: "assets/img/dubai/swim.webp" },
    { title: "Kathmandu tour", price: "$85.00", image: "assets/img/dubai/garden.webp" },
    { title: "Beautiful Pokhara", price: "$100.00", image: "assets/img/dubai/dive.webp" },
  ],
  Tours: [
    { title: "Langkawi beaches", price: "$120.00", image: "assets/img/dubai/frame.webp" },
    { title: "Kuala Lumpur tour", price: "$90.00", image: "assets/img/dubai/desert.webp" },
  ],
  Events: [
    { title: "Bali adventure", price: "$150.00", image: "assets/img/airport.webp" },
    { title: "Jakarta city tour", price: "$95.00", image: "assets/img/travel.webp" },
  ],
};

const Deals = () => {
  const tabs = Object.keys(destinations);

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-center text-3xl font-bold mb-8 ">Check Out Amazing Deals</h1>
      <Tabs tabs={tabs}>
        {tabs.map((tab) => (
          <div key={tab} className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {destinations[tab].map((place, index) => (
              <div
                key={index}
                className="border rounded-lg p-4 shadow-lg hover:shadow-2xl transition duration-300"
              >
                <img
                  src={place.image}
                  alt={place.title}
                  className="w-full h-40 object-cover rounded-t-lg mb-3"
                />
                <h3 className="text-lg font-bold">{place.title}</h3>
                <p className="text-purple-500 font-medium">{place.price}</p>
              </div>
            ))}
          </div>
        ))}
      </Tabs>
    </div>
  );
};

export default Deals;
