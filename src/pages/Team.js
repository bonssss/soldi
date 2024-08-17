import React from 'react';
import manager from '../assets/dave.jpg'

const Team = () => {
  return (
    <div className="team py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-blue-900 mb-8">Meet The Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="team-member bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl hover:border-[#FF9100] border-2 border-transparent">
            <img 
              src={manager}
              alt="Yokabed Daniel" 
              className="mx-auto rounded-full w-32 h-32 object-cover mb-4 border-4 border-[#FF9100]"
            />
            <h3 className="text-2xl font-bold text-blue-900 mb-2">Yokabed Daniel</h3>
            <p className="text-gray-700">General Manager</p>
          </div>
          <div className="team-member bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl hover:border-[#FF9100] border-2 border-transparent">
            <img 
              src={manager} 
              alt="Dawit Abera" 
              className="mx-auto rounded-full w-32 h-32 object-cover mb-4 border-4 border-[#FF9100]"
            />
            <h3 className="text-2xl font-bold text-blue-900 mb-2">Dawit Abera</h3>
            <p className="text-gray-700">Founder & Board Chairman</p>
          </div>
          <div className="team-member bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl hover:border-[#FF9100] border-2 border-transparent">
            <img 
              src={manager} 
              alt="Dawit Abera" 
              className="mx-auto rounded-full w-32 h-32 object-cover mb-4 border-4 border-[#FF9100]"
            />
            <h3 className="text-2xl font-bold text-blue-900 mb-2">Dawit Abera</h3>
            <p className="text-gray-700">Founder & Board Chairman</p>
          </div>
          <div className="team-member bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl hover:border-[#FF9100] border-2 border-transparent">
            <img 
              src={manager} 
              alt="Dawit Abera" 
              className="mx-auto rounded-full w-32 h-32 object-cover mb-4 border-4 border-[#FF9100]"
            />
            <h3 className="text-2xl font-bold text-blue-900 mb-2">Dawit Abera</h3>
            <p className="text-gray-700">Founder & Board Chairman</p>
          </div>
          <div className="team-member bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl hover:border-[#FF9100] border-2 border-transparent">
            <img 
              src={manager} 
              alt="Dawit Abera" 
              className="mx-auto rounded-full w-32 h-32 object-cover mb-4 border-4 border-[#FF9100]"
            />
            <h3 className="text-2xl font-bold text-blue-900 mb-2">Dawit Abera</h3>
            <p className="text-gray-700">Founder & Board Chairman</p>
          </div>
          {/* Add more team members with unique images and details as needed */}
        </div>
      </div>
    </div>
  );
};

export default Team;
