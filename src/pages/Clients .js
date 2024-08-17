import React from 'react';

const Clients = () => {
  return (
    <div className="clients py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold">Our Clients</h2>
        <ul className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <li className="bg-white p-6 shadow rounded">WADA INDUSTRIAL PLC</li>
          <li className="bg-white p-6 shadow rounded">ELIAB TRADING PLC</li>
          <li className="bg-white p-6 shadow rounded">COMMERCIAL BANK OF ETHIOPIA</li>
          <li className="bg-white p-6 shadow rounded">WALLIF HEALTH CARE</li>
        </ul>
      </div>
    </div>
  );
};

export default Clients;
