import React from 'react';
import cbe from '../assets/cbe.jpg'
import eliab from '../assets/eliab.jpg'
import gojo from '../assets/gojo.jpg'
import stg from '../assets/stg.jpg'
import teacher from '../assets/teacher.jpg'
import tomoka from '../assets/tomoka.jpg'
import waliif from '../assets/waliif.jpg'

const Clients = () => {
  return (
    <div className="clients py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-blue-900 mb-8">Our Clients</h2>
        <ul className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          <li className="bg-white p-6 shadow-lg rounded-lg flex flex-col items-center justify-center">
            <img
              src="/assets/client-logos/wada-industrial.png"
              alt="WADA INDUSTRIAL PLC"
              className="max-w-full max-h-24 object-contain mb-4"
            />
            <p className="text-lg font-semibold text-blue-900">WADA INDUSTRIAL PLC</p>
          </li>
          <li className="bg-white p-6 shadow-lg rounded-lg flex flex-col items-center justify-center">
            <img
              src={eliab}
              alt="ELIAB TRADING PLC"
              className="max-w-full max-h-24 object-contain mb-4"
            />
            <p className="text-lg font-semibold text-blue-900">ELIAB TRADING PLC</p>
          </li>
          <li className="bg-white p-6 shadow-lg rounded-lg flex flex-col items-center justify-center">
            <img
              src={cbe}
              alt="COMMERCIAL BANK OF ETHIOPIA"
              className="max-w-full max-h-24 object-contain mb-4"
            />
            <p className="text-lg font-semibold text-blue-900">COMMERCIAL BANK OF ETHIOPIA</p>
          </li>
          <li className="bg-white p-6 shadow-lg rounded-lg flex flex-col items-center justify-center">
            <img
              src={waliif}
              alt="WALLIF HEALTH CARE"
              className="max-w-full max-h-24 object-contain mb-4"
            />
            <p className="text-lg font-semibold text-blue-900">WALLIF HEALTH CARE</p>
          </li>
          <li className="bg-white p-6 shadow-lg rounded-lg flex flex-col items-center justify-center">
            <img
              src={teacher}
              alt=" Teacher Association"
              className="max-w-full max-h-24 object-contain mb-4"
            />
            <p className="text-lg font-semibold text-blue-900">Ethiopian Teacher Association</p>
          </li>
          <li className="bg-white p-6 shadow-lg rounded-lg flex flex-col items-center justify-center">
            <img
              src={stg}
              alt="stgE"
              className="max-w-full max-h-24 object-contain mb-4"
            />
            <p className="text-lg font-semibold text-blue-900">St.George Sport Club</p>
          </li>
          <li className="bg-white p-6 shadow-lg rounded-lg flex flex-col items-center justify-center">
            <img
              src={tomoka}
              alt="tomoka"
              className="max-w-full max-h-24 object-contain mb-4"
            />
            <p className="text-lg font-semibold text-blue-900">Tomoka Coffee</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Clients;
