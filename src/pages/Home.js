import React from 'react';

const Home = () => {
  return (
    <div className="home">
      <section className="bg-cover bg-center h-screen text-white flex flex-col justify-center items-center" style={{ backgroundImage: "url('/path_to_hero_image.jpg')" }}>
        <h1 className="text-5xl font-bold mb-4">Welcome to SOLDI</h1>
        <p className="text-xl mb-8">Leading the Digital Transformation.</p>
        <button className="bg-blue-500 text-white py-2 px-6 rounded-lg shadow-md hover:bg-blue-600 transition duration-300">Explore Our Services</button>
      </section>
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">About Us</h2>
          <p className="text-lg text-gray-700">SOLDI is dedicated to revolutionizing marketing strategies by transitioning businesses from local to digital prominence.</p>
        </div>
      </section>
      <section className="py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-2">Digital Marketing Strategies</h3>
              <p className="text-gray-600">Tailored marketing strategies to enhance your digital presence.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-2">Application Development</h3>
              <p className="text-gray-600">Custom applications designed to meet your business needs.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-2">Partnership Establishment</h3>
              <p className="text-gray-600">Building strong business relationships and collaborations.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
