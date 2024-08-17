import React from 'react';
import aboutimage from '../assets/about image.jpg';

const About = () => {
  return (
    <div className="about py-16 bg-gradient-to-b from-gray-100 to-white">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-12 px-4 md:px-0">
        
        {/* Image Section */}
        <div className="flex-1 md:w-1/2 mb-8 md:mb-0">
          <img
            src={aboutimage}
            alt="About SOLDI"
            className="w-full h-auto rounded-xl shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out"
          />
        </div>

        {/* Text Content Section */}
        <div className="flex-1 md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl font-extrabold mb-6 text-orange-500 hover:text-orange-600 transition-colors duration-300">
            About SOLDI
          </h2>
          <p className="text-lg text-gray-800 mb-8 leading-relaxed hover:text-gray-900 transition-colors duration-300">
            At SOLDI, we empower companies to expand their reach through innovative digital solutions, driving success in the modern marketplace.
          </p>
          <div className="flex flex-col gap-8">
            <div className="bg-white p-8 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 hover:bg-gray-100">
              <h3 className="text-3xl font-bold mb-4 text-orange-500 hover:text-orange-600 transition-colors duration-300">
                Vision
              </h3>
              <p className="text-gray-700 hover:text-gray-800 transition-colors duration-300">
                To be a pioneering force in the digital marketing empire by 2027, leading with creativity and technology.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 hover:bg-gray-100">
              <h3 className="text-3xl font-bold mb-4 text-orange-500 hover:text-orange-600 transition-colors duration-300">
                Mission
              </h3>
              <p className="text-gray-700 hover:text-gray-800 transition-colors duration-300">
                Establish strong collaborations and provide effective digital solutions for societal needs at reasonable costs, making a lasting impact.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
