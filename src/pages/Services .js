import React from 'react';

const Services = () => {
  return (
    <div className="services py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold">Our Services</h2>
        <ul className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <li className="bg-white p-6 shadow rounded">Digital Marketing Strategies</li>
          <li className="bg-white p-6 shadow rounded">Application Development</li>
          <li className="bg-white p-6 shadow rounded">Partnership Establishment</li>
          <li className="bg-white p-6 shadow rounded">Small and Medium Business Solutions</li>
        </ul>
      </div>
    </div>
  );
};

export default Services;
