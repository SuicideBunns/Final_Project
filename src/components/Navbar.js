import React from 'react';

const Navbar = () => {

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900 text-white shadow-md z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">

        <h1 className="font-bold text-xl">My Portfolio</h1>

        <div className="space-x-6">
          <button onClick={() => scrollToSection("home")} className="hover:text-blue-400">
            Home
          </button>

          <button onClick={() => scrollToSection("about")} className="hover:text-blue-400">
            About
          </button>

          <button onClick={() => scrollToSection("skills")} className="hover:text-blue-400">
            Skills
          </button>

          <button onClick={() => scrollToSection("projects")} className="hover:text-blue-400">
            Projects
          </button>

          <button onClick={() => scrollToSection("contact")} className="hover:text-blue-400">
            Contact
          </button>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;