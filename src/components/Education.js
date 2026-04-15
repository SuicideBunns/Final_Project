import React from 'react';
import globalight from '../image/Elem.png';
import kings from '../image/Highsc.png';
import uc from '../image/col.png';



const Education = () => {
  
  return (
    <section className="my-20">
      <h2 className="text-3xl font-bold text-red-500 mb-6">Education</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Elementary */}
        <div className="bg-gray-900 p-6 rounded-xl flex flex-col items-center text-center">
          <img
            src={globalight}
            alt="Globalight Vision School"
            className="w-20 h-20 object-contain mb-4 rounded-full bg-white p-1"
          />
          <p className="text-lg font-semibold">Elementary</p>
          <p className="text-gray-400">Globalight Vision School</p>
        </div>

        {/* High School */}
        <div className="bg-gray-900 p-6 rounded-xl flex flex-col items-center text-center">
          <img
            src={kings}
            alt="King's College of the Philippines"
            className="w-20 h-20 object-contain mb-4 rounded-full bg-white p-1"
          />
          <p className="text-lg font-semibold">High School</p>
          <p className="text-gray-400">King's College of the Philippines</p>
        </div>

        {/* College */}
        <div className="bg-gray-900 p-6 rounded-xl flex flex-col items-center text-center">
          <img
            src={uc}
            alt="University of the Cordilleras"
            className="w-20 h-20 object-contain mb-4 rounded-full bg-white p-1"
          />
          <p className="text-lg font-semibold">College</p>
          <p className="text-lg font-bold text-white">BS Information Technology</p>
          <p className="text-gray-400">University of the Cordilleras</p>
        </div>

      </div>
    </section>
  );
};

export default Education;