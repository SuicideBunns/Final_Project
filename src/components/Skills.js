import React from 'react';

const skills = ["Java","Python", "HTML", "CSS", "JavaScript"];

const Skills = () => {
  return (
    <section id="skills" className="my-20 text-center">
      <h2 className="text-3xl font-bold text-red-500 mb-6">Skills</h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-gray-900 p-6 rounded-xl text-center hover:scale-105 transition"
          >
            <p className="text-lg font-semibold">{skill}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;