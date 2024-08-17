import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold">
          <Link to="/">SOLDI</Link>
        </div>
        <button 
          className="block lg:hidden text-white focus:outline-none" 
          onClick={toggleMenu}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-6 w-6" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
        <nav className={`lg:flex lg:items-center lg:space-x-6 ${isOpen ? 'block' : 'hidden'}`}>
          <ul className="space-y-4 lg:space-y-0 lg:space-x-6">
            <li><Link to="/" className="hover:text-gray-400">Home</Link></li>
            <li><Link to="/about" className="hover:text-gray-400">About Us</Link></li>
            <li><Link to="/services" className="hover:text-gray-400">Services</Link></li>
            <li><Link to="/team" className="hover:text-gray-400">Team</Link></li>
            <li><Link to="/clients" className="hover:text-gray-400">Clients</Link></li>
            <li><Link to="/contact" className="hover:text-gray-400">Contact Us</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
