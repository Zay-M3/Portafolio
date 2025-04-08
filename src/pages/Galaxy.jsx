import { useState, useEffect, useRef } from 'react';
import { GiGalaxy } from 'react-icons/gi';
import { FaSearch, FaInfoCircle, FaExpand } from 'react-icons/fa';

const Galaxy = () => {
  const [galaxies, setGalaxies] = useState([
    { id: 1, name: 'Andrómeda', type: 'Espiral', discovered: 964, x: 15, y: 30, size: 120, discoveredBy: 'Astrónomos persas', stars: '1 billón' },
    { id: 2, name: 'Vía Láctea', type: 'Espiral barrada', discovered: -350, x: 50, y: 60, size: 110, discoveredBy: 'Demócrito', stars: '250 mil millones' },
    { id: 3, name: 'Triángulo', type: 'Espiral', discovered: 1654, x: 70, y: 20, size: 60, discoveredBy: 'Giovanni Battista Hodierna', stars: '40 mil millones' },
    { id: 4, name: 'Sombrero', type: 'Espiral', discovered: 1781, x: 25, y: 70, size: 80, discoveredBy: 'Pierre Méchain', stars: '100 mil millones' },
    { id: 5, name: 'Remolino', type: 'Espiral', discovered: 1773, x: 80, y: 50, size: 70, discoveredBy: 'Charles Messier', stars: '160 mil millones' },
  ]);

  const [selectedGalaxy, setSelectedGalaxy] = useState(null);
  const [zoom, setZoom] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [startPos, setStartPos] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  // Efecto para manejar el movimiento del contenedor
  useEffect(() => {
    const container = containerRef.current;
    
    const handleMouseDown = (e) => {
      setIsDragging(true);
      setStartPos({
        x: e.clientX - position.x,
        y: e.clientY - position.y
      });
    };

    const handleMouseMove = (e) => {
      if (!isDragging) return;
      setPosition({
        x: e.clientX - startPos.x,
        y: e.clientY - startPos.y
      });
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    if (container) {
      container.addEventListener('mousedown', handleMouseDown);
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      if (container) {
        container.removeEventListener('mousedown', handleMouseDown);
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('mouseup', handleMouseUp);
      }
    };
  }, [isDragging, position, startPos]);

  // Manejar zoom con rueda del mouse
  const handleWheel = (e) => {
    e.preventDefault();
    const delta = e.deltaY * -0.01;
    setZoom(prevZoom => Math.min(Math.max(0.5, prevZoom + delta), 3));
  };

  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < 200; i++) {
      stars.push(
        <div
          key={`star-${i}`}
          className="absolute bg-white rounded-full"
          style={{
            width: `${Math.random() * 2}px`,
            height: `${Math.random() * 2}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            opacity: Math.random() * 0.7 + 0.3,
          }}
        />
      );
    }
    return stars;
  };

  return (
    <div className="relative h-screen w-full bg-gray-900 overflow-hidden">
     
      <div className="absolute inset-0">
        {renderStars()}
      </div>

      <div className="absolute top-4 right-4 z-20 flex space-x-2">
        <button 
          onClick={() => setZoom(1)} 
          className="p-2 bg-gray-800 bg-opacity-70 rounded-full text-white hover:bg-gray-700 transition"
          title="Resetear zoom"
        >
          <FaSearch />
        </button>
        <button 
          onClick={() => setZoom(z => Math.min(z + 0.2, 3))} 
          className="p-2 bg-gray-800 bg-opacity-70 rounded-full text-white hover:bg-gray-700 transition"
          title="Acercar"
        >
          +
        </button>
        <button 
          onClick={() => setZoom(z => Math.max(z - 0.2, 0.5))} 
          className="p-2 bg-gray-800 bg-opacity-70 rounded-full text-white hover:bg-gray-700 transition"
          title="Alejar"
        >
          -
        </button>
      </div>


      <div 
        ref={containerRef}
        className={`absolute inset-0 ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
        onWheel={handleWheel}
        style={{
          transform: `translate(${position.x}px, ${position.y}px) scale(${zoom})`,
          transition: isDragging ? 'none' : 'transform 0.3s ease',
        }}
      >
        {galaxies.map(galaxy => (
          <div
            key={galaxy.id}
            className="absolute flex flex-col items-center transition-transform hover:scale-110"
            style={{
              left: `${galaxy.x}%`,
              top: `${galaxy.y}%`,
              width: `${galaxy.size}px`,
              height: `${galaxy.size}px`,
              transform: 'translate(-50%, -50%)',
            }}
            onClick={() => setSelectedGalaxy(galaxy)}
          >
            <GiGalaxy 
              className={`text-5xl ${
                galaxy.type === 'Espiral' ? 'text-blue-400' : 
                galaxy.type === 'Espiral barrada' ? 'text-purple-400' : 
                'text-yellow-400'
              } transition-all hover:rotate-45`}
            />
            <span className="text-white text-sm mt-1 bg-black bg-opacity-50 px-1 rounded">
              {galaxy.name}
            </span>
          </div>
        ))}
      </div>

      {/* Panel de información de galaxia */}
      {selectedGalaxy && (
        <div className="absolute bottom-4 left-4 right-4 z-20 bg-gray-800 bg-opacity-80 rounded-lg p-4 text-white max-w-md mx-auto backdrop-blur-sm">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-2xl font-bold flex items-center">
                <GiGalaxy className="mr-2" />
                {selectedGalaxy.name}
              </h2>
              <div className="mt-2 grid grid-cols-2 gap-2">
                <div>
                  <p className="text-gray-400 text-sm">Tipo</p>
                  <p>{selectedGalaxy.type}</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Descubierta</p>
                  <p>{selectedGalaxy.discovered > 0 ? selectedGalaxy.discovered : `${Math.abs(selectedGalaxy.discovered)} a.C.`}</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Descubierta por</p>
                  <p>{selectedGalaxy.discoveredBy}</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Estrellas</p>
                  <p>{selectedGalaxy.stars}</p>
                </div>
              </div>
            </div>
            <button 
              onClick={() => setSelectedGalaxy(null)} 
              className="p-1 text-gray-400 hover:text-white"
            >
              ✕
            </button>
          </div>
          <div className="mt-4 flex space-x-2">
            <button className="flex items-center px-3 py-1 bg-blue-600 rounded text-sm">
              <FaInfoCircle className="mr-1" /> Más info
            </button>
            <button className="flex items-center px-3 py-1 bg-purple-600 rounded text-sm">
              <FaExpand className="mr-1" /> Vista 3D
            </button>
          </div>
        </div>
      )}

      {/* Instrucciones */}
      <div className="absolute top-4 left-4 z-20 bg-gray-800 bg-opacity-70 rounded-lg p-3 text-white text-sm">
        <p>🖱️ Arrastra para moverte</p>
        <p>🖱️ Rueda para hacer zoom</p>
        <p>🖱️ Haz clic en una galaxia</p>
      </div>
    </div>
  );
};

export default Galaxy;