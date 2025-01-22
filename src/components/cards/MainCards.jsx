import React from "react";

const Card = ({ image, alt, text }) => {
    return (
        <div className="relative group w-full shadow-lg overflow-hidden">
            <img
                src={image}
                alt={alt}
                className="w-full lg:h-[500px] object-cover rounded-lg"
            />
            <div
                className="absolute inset-0 bg-black bg-opacity-20 flex items-end transform translate-y-0 group-hover:translate-y-full transition-transform duration-300 ease-in-out rounded-lg"
            >
                <p
                    className="text-black text-lg font-bold p-3 bg-white w-full text-center rounded-bl-lg rounded-br-lg"
                >
                    {text}
                </p>
            </div>
        </div>
    );
};

export default Card;
