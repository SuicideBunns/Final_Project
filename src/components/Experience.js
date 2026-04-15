import React from 'react';

const Experience = () => {
  return (
    <section id="projects" className="my-20 text-center">
      <h2 className="text-3xl font-bold text-red-500 mb-6">Projects</h2>

      <div className="grid md:grid-cols-2 gap-6">

        <div className="bg-gray-900 p-6 rounded-xl">
          <h3 className="text-xl font-semibold">Portfolio Website</h3>
          <p className="text-gray-400 mt-2">
            Built using HTML, CSS, React and Tailwind CSS.
          </p>
        </div>

        <div className="bg-gray-900 p-6 rounded-xl">
          <h3 className="text-xl font-semibold">Data Cleaning Project</h3>
          <p className="text-gray-400 mt-2">
            Processed datasets using Python and Pandas.
          </p>
        </div>

        <div className="bg-gray-900 p-6 rounded-xl">
          <h3 className="text-xl font-semibold">Python 2D Game</h3>
          <p className="text-gray-400 mt-2">
            Developed a 2D python Game like Tower of Hanoi.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Experience;