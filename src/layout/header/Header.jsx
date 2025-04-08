import React from "react";
import { GiGalaxy, GiSpinningBlades } from "react-icons/gi";
import { useNavigate } from "react-router";
import { useState } from "react";

const Header = () => {
    const navigate = useNavigate(); 
    const [activeSection, setActiveSection] = useState('inicio');

  return (
    <nav className="relative z-20 py-6 px-8 border-b border-gray-800 backdrop-blur-sm bg-gray-900 bg-opacity-60">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center space-x-3 mb-4 md:mb-0">
          <GiSpinningBlades className="text-blue-400 text-2xl animate-spin-slow" />
          <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            PORTAFOLIO DAVID (Zay)
          </h1>
        </div>

        <div className="flex space-x-1 bg-gray-800 rounded-full p-1">
          {["inicio", "proyectos", "galaxias", "sobre-mi", "contacto"].map(
            (item) => (
              <button
                key={item}
                onClick={() => {navigate(`/${item}`), setActiveSection(item)}}
                className={`px-4 py-2 rounded-full text-sm capitalize transition-all ${
                  activeSection === item
                    ? "bg-gradient-to-r from-blue-500 to-purple-600  text-white"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {item}
              </button>
            )
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
