import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import UpIcon from "../../assets/icons/UpArrow";
import DownArrow from "../../assets/icons/DownArrow";

const Header = () => {
    const logo = "/assets/img/logo-new.png";
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeDropdownIndex, setActiveDropdownIndex] = useState(null);
    const [activeMobileDropdownIndex, setActiveMobileDropdownIndex] = useState(null); // For mobile-specific dropdown

    const dropdownRef = useRef(null);
    const menuRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        const handleClickOutside = (event) => {
            // If click happens outside of the dropdown or menu, close the dropdown
            if (dropdownRef.current && !dropdownRef.current.contains(event.target) && !menuRef.current.contains(event.target)) {
                setActiveDropdownIndex(null);
            }
        };

        window.addEventListener("scroll", handleScroll);
        window.addEventListener("click", handleClickOutside);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("click", handleClickOutside);
        };
    }, []);

    const menuItems = [
        { label: "Home", path: "/" },
        { label: "About Us", path: "/about" },
        { label: "Services", path: "/services", hasDropdown: true, children: [
            { label: "UAE Packages", path: "/services/service1" },
            { label: "Excursions", path: "/services/service2" },
            { label: "Limousine", path: "/services/service3" },
            { label: "VISA", path: "/services/service4" },
        ] },
        {
            label: "Can I Help You",
            path: "/help",
            hasDropdown: true,
            children: [
                { label: "FAQ", path: "/help/faq" },
                { label: "Support", path: "/help/support" },
                { label: "Chat", path: "/help/chat" },
            ],
        },
        { label: "Contact us", path: "/contact" },
    ];

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${
                isScrolled ? "bg-white shadow-lg" : "bg-transparent"
            }`}
        >
            <div className="container mx-auto flex justify-between items-center p-4" ref={menuRef}>
                {/* Logo */}
                <Link to="/" className="flex items-center">
                    <img
                        src={logo}
                        alt="Company Logo"
                        className="md:w-44 md:h-32 w-32 h-32 object-contain "
                    />
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex gap-x-16">
                    {menuItems.map((item, index) => (
                        <div
                            key={index}
                            className="relative"
                            ref={dropdownRef}
                        >
                            {!item.hasDropdown ? (
                                <Link
                                    to={item.path}
                                    className={`hover:text-gray-600 ${
                                        isScrolled ? "text-black font-bold"  : "text-black font-bold"
                                    }`}
                                >
                                    {item.label}
                                </Link>
                            ) : (
                                <span
                                className={`cursor-pointer hover:text-gray-600 flex items-center ${
                                  isScrolled ? "text-black font-bold" : "text-black font-bold"
                                }`}
                                onClick={() =>
                                  setActiveDropdownIndex(
                                    activeDropdownIndex === index ? null : index
                                  )
                                }
                              >
                                {item.label} 
                                {activeDropdownIndex === index ? <UpIcon height='21px' width='21px' /> : <DownArrow height='21px' width='21px'  />}
                              </span>
                              
                            )}
                            {item.hasDropdown && activeDropdownIndex === index && (
                                <div className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-lg text-black w-48">
                                    <ul>
                                        {item.children.map((child, childIndex) => (
                                            <li
                                                key={childIndex}
                                                className="p-2 hover:bg-gray-200"
                                            >
                                                <Link to={child.path}>{child.label}</Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    ))}
                </nav>

                {/* Contact Us Button */}
                <button
                    className="hidden lg:inline-block bg-gradient-to-r from-red-500 to-gray-700 text-white lg:px-10 lg:py-3 rounded-xl font-bold shadow-md hover:shadow-lg hover:scale-105 transition-transform"
                    aria-label="Contact Us"
                >
                    Login
                </button>

                {/* Mobile Menu Button */}
                <button
                    className={`lg:hidden text-2xl focus:outline-none ${
                        isScrolled ? "text-black" : "text-white"
                    }`}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    ☰
                </button>
            </div>

            {/* Mobile Menu */}
            <div
                className={`fixed inset-0 bg-gray-800 bg-opacity-90 z-40 flex flex-col py-5 px-10 text-white transition-transform duration-500 ${
                    isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
                }`}
            >
                <button
                    className="absolute top-4 right-4 text-2xl focus:outline-none"
                    onClick={() => setIsMobileMenuOpen(false)}
                >
                    ✕
                </button>

                <nav className="flex flex-col space-y-6 text-xl ">
                    {menuItems.map((item, index) => (
                        <div key={index} className="relative">
                            {!item.hasDropdown ? (
                                <Link
                                    to={item.path}
                                    className="hover:text-gray-300"
                                    onClick={() => setIsMobileMenuOpen(false)} // Close menu on navigation
                                >
                                    {item.label}
                                </Link>
                            ) : (
                                <div>
                                    <span
                                        className="cursor-pointer hover:text-gray-300"
                                        onClick={() =>
                                            setActiveMobileDropdownIndex(
                                                activeMobileDropdownIndex === index ? null : index
                                            )
                                        }
                                    >
                                        {item.label} {activeMobileDropdownIndex === index ? "▲" : "▼"} {/* Expand/Contract Icon */}
                                    </span>
                                    {/* Show child items in mobile */}
                                    {activeMobileDropdownIndex === index && (
                                        <div className="flex flex-col space-y-2 mt-4">
                                            {item.children.map((child, childIndex) => (
                                                <Link
                                                    key={childIndex}
                                                    to={child.path}
                                                    className="text-gray-300 hover:text-gray-500"
                                                    onClick={() => setIsMobileMenuOpen(false)} // Close menu on child selection
                                                >
                                                    {child.label}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    ))}
                </nav>
            </div>
        </header>
    );
};

export default Header;
