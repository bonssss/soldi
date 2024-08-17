import React from 'react';

const Team = () => {
  return (
    <div className="team py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center">Meet The Team</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="team-member text-center">
            <img src="path_to_image" alt="Yokabed Daniel" className="mx-auto rounded-full w-32 h-32" />
            <h3 className="mt-4 text-xl font-bold">Yokabed Daniel</h3>
            <p className="text-gray-600">General Manager</p>
          </div>
          <div className="team-member text-center">
            <img src="path_to_image" alt="Dawit Abera" className="mx-auto rounded-full w-32 h-32" />
            <h3 className="mt-4 text-xl font-bold">Dawit Abera</h3>
            <p className="text-gray-600">Founder & Board Chairman</p>
          </div>
          {/* Add more team members as needed */}
        </div>
      </div>
    </div>
  );
};

export default Team;
