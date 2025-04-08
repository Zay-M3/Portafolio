import { useNavigate } from 'react-router';
import { FaRocket, FaSatellite, FaUserAstronaut, FaGlobeAmericas, FaSearch, FaHome } from 'react-icons/fa';
import { GiGalaxy } from 'react-icons/gi';
import { IoPlanet } from 'react-icons/io5'; // Alternativa para GiBlackhole

const NoFound = () => {
    const navigate = useNavigate();
    return (
      <div className="min-h-screen bg-gray-900 text-white relative overflow-hidden">
        {/* Estrellas de fondo */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(100)].map((_, i) => (
            <div 
              key={i}
              className="absolute bg-white rounded-full"
              style={{
                width: `${Math.random() * 3}px`,
                height: `${Math.random() * 3}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: Math.random(),
                animation: `twinkle ${Math.random() * 5 + 3}s infinite alternate`
              }}
            />
          ))}
        </div>
  
        {/* Nebulosa */}
        <div className="absolute top-1/4 -left-20 w-64 h-64 bg-purple-900 rounded-full filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-1/4 -right-20 w-64 h-64 bg-blue-900 rounded-full filter blur-3xl opacity-20"></div>
  
        {/* Contenido principal */}
        <div className="relative z-10 min-h-screen flex flex-col items-center justify-center p-6">
          <div className="text-center max-w-2xl">
            {/* Agujero negro animado */}
            <div className="flex justify-center mb-8">
              <IoPlanet className="text-purple-500 text-6xl animate-pulse" />
            </div>
            
            <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
              ¡Página perdida en el espacio!
            </h1>
            
            <p className="text-xl text-gray-300 mb-8">
              La página que buscas ha sido arrastrada por un agujero negro o está orbitando en otra galaxia.
            </p>
            
            <div className="text-purple-300 font-mono text-lg mb-12">
              Código de error: <span className="text-blue-300">404</span>
            </div>
            
            {/* Sistema planetario de navegación */}
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 mb-12">
              <SpaceNavCard 
                icon={<FaHome className="text-yellow-400" />} 
                title="Inicio" 
                onClick={() => navigate('/inicio')}
              />
              <SpaceNavCard 
                icon={<GiGalaxy className="text-pink-400" />} 
                title="Galaxias" 
                onClick={() => navigate('/galaxias')}
              />
            </div>
            
            {/* Cohete animado */}
            <button 
              onClick={() => navigate(-1)}
              className="flex items-center justify-center mx-auto space-x-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full hover:from-purple-700 hover:to-blue-700 transition-all"
            >
              <FaRocket className="animate-bounce" />
              <span>Regresar a territorio conocido</span>
            </button>
          </div>
        </div>
  
        {/* Estilos para las animaciones de estrellas */}
        <style jsx>{`
          @keyframes twinkle {
            0% { opacity: 0.2; }
            100% { opacity: 1; }
          }
        `}</style>
      </div>
    );
  };

const SpaceNavCard = ({ icon, title, onClick }) => (
  <button
    onClick={onClick}
    className="flex flex-col items-center justify-center p-4 rounded-lg bg-gray-800 bg-opacity-60 backdrop-blur-sm border border-gray-700 hover:border-purple-500 hover:bg-opacity-80 transition-all"
  >
    <div className="text-2xl mb-2">{icon}</div>
    <span className="text-sm">{title}</span>
  </button>
);

export default NoFound;
