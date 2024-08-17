import React from 'react';

const About = () => {
  return (
    <div className="about py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">About SOLDI</h2>
        <p className="text-lg text-gray-700 mb-8">SOLDI empowers companies to expand their reach through innovative digital solutions.</p>
        <div className="flex flex-col md:flex-row md:justify-center gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-2">Vision</h3>
            <p className="text-gray-600">To be a pioneering force in the digital marketing empire by 2027.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-2">Mission</h3>
            <p className="text-gray-600">Establish strong collaborations and provide effective digital solutions for societal needs at reasonable costs.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
