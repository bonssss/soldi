import React from 'react';
import digitalMarketingImg from '../assets/dgital.jpg';
import appDevelopmentImg from '../assets/App.jpg';
import partnershipImg from '../assets/handshake.png';
import businessSolutionsImg from '../assets/solution.png';

const Services = () => {
  return (
    <div className="services py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-blue-900 mb-12">Our Services</h2>
        <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <li className="bg-white p-6 shadow-lg rounded-lg transition-transform transform hover:scale-105 hover:shadow-xl hover:bg-[#FF9100] hover:text-white">
            <div className="relative mb-4 h-32 overflow-hidden rounded-t-lg">
              <img
                src={digitalMarketingImg}
                alt="Digital Marketing Strategies"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-2xl font-semibold mb-2 text-blue-900 hover:text-white transition-colors duration-300">Digital Marketing Strategies</h3>
            <p className="text-gray-600 hover:text-white transition-colors duration-300">Tailored strategies to enhance your digital presence.</p>
          </li>
          <li className="bg-white p-6 shadow-lg rounded-lg transition-transform transform hover:scale-105 hover:shadow-xl hover:bg-[#FF9100] hover:text-white">
            <div className="relative mb-4 h-32 overflow-hidden rounded-t-lg">
              <img
                src={appDevelopmentImg}
                alt="Application Development"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-2xl font-semibold mb-2 text-blue-900 hover:text-white transition-colors duration-300">Application Development</h3>
            <p className="text-gray-600 hover:text-white transition-colors duration-300">Custom applications designed for your business needs.</p>
          </li>
          <li className="bg-white p-6 shadow-lg rounded-lg transition-transform transform hover:scale-105 hover:shadow-xl hover:bg-[#FF9100] hover:text-white">
            <div className="relative mb-4 h-32 overflow-hidden rounded-t-lg">
              <img
                src={partnershipImg}
                alt="Partnership Establishment"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-2xl font-semibold mb-2 text-blue-900 hover:text-white transition-colors duration-300">Partnership Establishment</h3>
            <p className="text-gray-600 hover:text-white transition-colors duration-300">Building strong business relationships and collaborations.</p>
          </li>
          <li className="bg-white p-6 shadow-lg rounded-lg transition-transform transform hover:scale-105 hover:shadow-xl hover:bg-[#FF9100] hover:text-white">
            <div className="relative mb-4 h-32 overflow-hidden rounded-t-lg">
              <img
                src={businessSolutionsImg}
                alt="Small and Medium Business Solutions"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-2xl font-semibold mb-2 text-blue-900 hover:text-white transition-colors duration-300">Small and Medium Business Solutions</h3>
            <p className="text-gray-600 hover:text-white transition-colors duration-300">Digital solutions tailored for small and medium enterprises.</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Services;
