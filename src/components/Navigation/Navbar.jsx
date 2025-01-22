import React from "react";
import { Link } from "react-router-dom";

const NavList = ({ items, className = "", onClick }) => {
    return (
        <ul className={`space-y-2 ${className}`}>
            {items.map((item, index) => (
                <li key={index} className="hover:text-gray-600 font-playfair">
                    <Link to={item.path} onClick={onClick}>
                        {item.label}
                    </Link>
                </li>
            ))}
        </ul>
    );
};

export default NavList;
