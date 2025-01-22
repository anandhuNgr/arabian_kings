import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import Card from "../../components/cards/MainCards";

const TravelSection = () => {
    const cardsData = [
        {
            image: "/assets/img/uae.webp",
            alt: "Airlines discount",
            text: "UAE PACKAGES",
            link: "/services/service1"  // Add a link for each card
        },
        {
            image: "/assets/img/excursion.webp",
            alt: "EXCURSIONS",
            text: "EXCURSIONS",
            link: "/services/service2"
        },
        {
            image: "/assets/img/lamosine.webp",
            alt: "Limousine",
            text: "LIMOUSINE",
            link: "/services/service3"
        },
        {
            image: "/assets/img/VISAS.webp",
            alt: "Luxury resorts",
            text: "VISA",
            link: "/services/service4"
        },
    ];

    return (
        <section className="bg-white py-16 lg:container lg:mx-auto">
            <div className="mx-auto lg:px-4 p-2 flex lg:flex-row flex-col w-full gap-10 items-center">
                {/* Right Side: Cards */}
                <div className="w-full">
                    <div className="grid lg:grid-cols-4 grid-cols-1 gap-6">
                        {cardsData.map((card, index) => (
                            <Link to={card.link} key={index}>  {/* Wrap each card with Link */}
                                <Card image={card.image} alt={card.alt} text={card.text} />
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TravelSection;
