import React from "react";
import { GiGalaxy, GiSpinningBlades } from "react-icons/gi";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Header = () => {
    const [activeSection, setActiveSection] = useState('inicio');
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    
    const isLandingPage = location.pathname === '/';
    const isGalaxyPage = location.pathname === '/galaxias';

    // Función para hacer scroll suave a una sección o navegar
    const scrollToSection = (sectionId) => {
        if (isLandingPage) {
            // Si estamos en la landing page, hacer scroll suave
            const element = document.getElementById(sectionId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
                setActiveSection(sectionId);
            }
        } else {
            // Si estamos en otra página, navegar al inicio y luego hacer scroll
            navigate('/', { replace: true });
            setTimeout(() => {
                const element = document.getElementById(sectionId);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                    setActiveSection(sectionId);
                }
            }, 100);
        }
    };

    // Detectar la sección actual mientras se hace scroll
    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            
            // Actualizar estado de scroll para cambiar el estilo del header
            setIsScrolled(scrollY > 50);
            
            // Solo detectar secciones si estamos en la landing page
            if (isLandingPage) {
                const sections = ['inicio', 'proyectos', 'sobre-mi', 'contacto'];
                const scrollPosition = scrollY + 100;

                for (const section of sections) {
                    const element = document.getElementById(section);
                    if (element) {
                        const { offsetTop, offsetHeight } = element;
                        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                            setActiveSection(section);
                            break;
                        }
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isLandingPage]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-20 transition-all duration-300 border-b border-gray-800 backdrop-blur-sm ${
      isScrolled 
        ? 'py-3 px-6 bg-[rgba(17,17,17,0.1)]' 
        : 'py-6 px-8 bg-[rgba(17,17,17,1)]'
    }`}>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center space-x-3 mb-4 md:mb-0">
          <GiSpinningBlades className={`text-blue-400 animate-spin-slow transition-all duration-300 ${
            isScrolled ? 'text-xl' : 'text-2xl'
          }`} />
          <h1 className={`font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 transition-all duration-300 ${
            isScrolled ? 'text-xl' : 'text-2xl'
          }`}>
            PORTAFOLIO DAVID (Zay)
          </h1>
        </div>

        <div className={`flex space-x-1 bg-gray-800 rounded-full transition-all duration-300 ${
          isScrolled ? 'p-0.5' : 'p-1'
        }`}>
          {["inicio", "proyectos", "sobre-mi", "contacto"].map(
            (item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`rounded-full text-sm capitalize transition-all ${
                  isScrolled ? 'px-3 py-1.5' : 'px-4 py-2'
                } ${
                  activeSection === item
                    ? "bg-gradient-to-r from-blue-500 to-purple-600  text-white"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {item === 'sobre-mi' ? 'sobre mí' : item}
              </button>
            )
          )}
          {isGalaxyPage ? (
            <button
              onClick={() => navigate('/')}
              className={`rounded-full text-sm capitalize transition-all text-gray-300 hover:text-white bg-blue-600 bg-opacity-50 hover:bg-opacity-70 ${
                isScrolled ? 'px-3 py-1.5' : 'px-4 py-2'
              }`}
            >
              <GiSpinningBlades className="inline mr-1" />
              inicio
            </button>
          ) : (
            <button
              onClick={() => navigate('/galaxias')}
              className={`rounded-full text-sm capitalize transition-all text-gray-300 hover:text-white bg-purple-600 bg-opacity-50 hover:bg-opacity-70 ${
                isScrolled ? 'px-3 py-1.5' : 'px-4 py-2'
              }`}
            >
              <GiGalaxy className="inline mr-1" />
              galaxias
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
