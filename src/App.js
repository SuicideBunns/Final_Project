import React from 'react';
import './index.css';

import AboutMe from './components/AboutMe';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import img from './image/Roger.jpg'

function App() {
  return (
    <div className="bg-gray-700 text-white font-sans">


<Navbar />
      
<header className="py-24 flex flex-col items-center justify-center bg-red-500 text-white text-center">
   <div className="animate-fadeIn">
    <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg mb-6 mx-auto hover:scale-110 transition-transform duration-300">
<img
  src={img}
  alt="Profile"
  className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-l"
/>
</div>
  <h1 className="text-5xl font-bold">Hi! I'm Roger</h1>
  <p className="mt-4 text-lg opacity-90">
    IT Student | Network Security
  </p>


</div>
</header>

      <main className="max-w-6xl mx-auto px-6 text-center">
        <AboutMe /><br></br>
        <Skills /><br></br>
        <Experience /><br></br>
        <Education /><br></br>
        <Contact />
      </main>

      {/* FOOTER */}
      <footer className="text-center py-6 text-gray-500">
        © 2026 Roger Bastingo | My Portfolio
      </footer>

    </div>
  );
}

export default App;