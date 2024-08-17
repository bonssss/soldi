import React from 'react';
import 'tailwindcss/tailwind.css';
import About from './About';
import Services from './Services ';
import BG from '../assets/bg.jpg'

const Home = () => {
  return (
    <div className="home">
      {/* Welcome Section */}
      <section
  className="relative h-screen bg-cover bg-center flex flex-col justify-center items-center overflow-hidden"
  style={{ position: 'relative' }}
>
  <div
    style={{
      content: '',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundImage: `url(${BG})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      opacity: 0.1, // Adjust the opacity here
      zIndex: -1 // Make sure the background is behind the content
    }}
  />


        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900 to-transparent opacity-75"></div>

        {/* Creative Shapes */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute w-96 h-96 bg-gradient-to-r from-[#FF9100] to-blue-900 rounded-full opacity-40 -top-20 -left-20 transform rotate-45"></div>
          <div className="absolute w-80 h-80 bg-gradient-to-t from-[#FF9100] to-blue-900 rounded-full opacity-30 -bottom-20 -right-20 transform rotate-12"></div>
        </div>

        {/* Welcome Text with Animation */}
        <div className="relative z-10 text-center animate-fade-in">
          <h1 className="text-6xl font-bold mb-4 text-[#FF9100] animate-bounce">
            Welcome to SOLDI
          </h1>
          <p className="text-2xl mb-8 text-gray-900 font-bold">
  Digital Solutions And Marketing
</p>

          <button className="bg-[#FF9100] text-blue-900 py-2 px-6 rounded-lg shadow-md hover:bg-yellow-600 transition duration-300">
            Explore Our Services
          </button>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16 bg-gray-100">
        <About/>
      </section>

      {/* Our Services Section */}
      <section className="py-16 bg-white">
        <Services/>
      </section>
    </div>
  );
};

export default Home;
