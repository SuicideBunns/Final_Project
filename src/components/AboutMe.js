import React from 'react';

const AboutMe = () => {
  return (
    <section id="about" className="my-20 text-center">
      <h2 className="text-3xl font-bold text-red-500 mb-6">About Me</h2>

      <div className="bg-gray-900 p-6 rounded-2xl shadow-lg">
        <p className="text-gray-300 leading-relaxed" justify="center">
          I am a second year student who is studying at University of Cordillera. 
          My passion lies in coding and creating innovative codes. 
          I started to study coding because I was amazed on how people make websites, games, etc.
          I also had created a Python game like Tower of Hanoi and Card Deck Shuffling. 
          I also can create a basic HTML and CSS website. Today I am very happy to help my fellow 
          students who are having troubles in their projects.
        </p>
      </div>
    </section>
  );
};

export default AboutMe;