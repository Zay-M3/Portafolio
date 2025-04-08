import { FaRocket, FaCode, FaGlobeAmericas } from "react-icons/fa";
import { GiGalaxy } from "react-icons/gi";
import { IoMdPlanet } from "react-icons/io";
import IconP from "./../../assets/icon.jpg"; // Asegúrate de que la ruta sea correcta
import Stars from "../../componets/Stars"; // Import the new component
import { useNavigate } from "react-router";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gray-900 text-white relative overflow-hidden">
      <Stars numStars={100} />

      {/* Nebulosa */}
      <div className="absolute top-1/4 -left-20 w-64 h-64 bg-purple-900 rounded-full filter blur-3xl opacity-20"></div>
      <div className="absolute bottom-1/4 -right-20 w-64 h-64 bg-blue-900 rounded-full filter blur-3xl opacity-20"></div>

      <main className="relative z-10 max-w-6xl mx-auto py-12 px-6">
        <section className="text-center">
          <div className="flex justify-center mb-8">
            <div className="relative group animate-float">
              <div className="w-48 h-48 rounded-full border-4 border-blue-500 overflow-hidden relative z-10 shadow-[0_0_20px_#3b82f6]">
                <img
                  src={IconP}
                  alt="Tu nombre"
                  className="w-full h-full object-cover hover:filter hover:sepia-20 hover:hue-rotate-180 transition-all duration-500"
                />
              </div>
              <div className="absolute inset-0 rounded-full border-4 border-transparent group-hover:border-blue-300 opacity-0 group-hover:opacity-100 transition-all duration-500 -rotate-45 group-hover:rotate-0"></div>
              <div className="absolute -bottom-2 -right-2 bg-red-500 text-white rounded-full w-14 h-14 flex items-center justify-center z-20 group-hover:animate-pulse">
                <FaRocket className="text-x1 animate-bounce" />
              </div>
              <div className="absolute -inset-4 rounded-full border border-blue-400 opacity-0 group-hover:opacity-40 transition-opacity duration-700"></div>
            </div>
          </div>

          <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 ">
            Hola! soy David Estrada
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Desarollador Junior FullStack con pasión por la tecnologia, con un
            enfoque en resolver problemas y crear experiencias únicas en la web.
          </p>
          <div className="flex justify-center space-x-4 mb-8">
            <a
              href="https://github.com/Zay-M3"
              target="_blank"
              className="text-gray-400 hover:text-blue-300 transition-colors"
            >
              <FaGithub size={30} />
            </a>
            <a
              href="https://www.linkedin.com/in/oscar-david-estrada-betancourt-491732331/"
              target="_blank"
              className="text-gray-400 hover:text-blue-300 transition-colors"
            >
              <FaLinkedin size={30} />
            </a>
            <a
              href="mailto:oscardavidestradabetancourth@gmail.com"
              className="text-gray-400 hover:text-blue-300 transition-colors"
            >
              <FaEnvelope size={30}  />
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <StatCard
              icon={<FaCode className="animate-pulse " />}
              number="3+"
              label="Proyectos"
            />
            <StatCard
              icon={<IoMdPlanet className="animate-pulse " />}
              number="1"
              label="Años experiencia"
            />
            <StatCard
              icon={<GiGalaxy className="animate-pulse " />}
              number="∞"
              label="Ideas"
            />
            <StatCard
              icon={<FaGlobeAmericas className="animate-pulse " />}
              number="5K+"
              label="Líneas de código"
            />
          </div>

          <button
            onClick={() => navigate("/galaxias")}
            className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full hover:from-blue-700 hover:to-purple-700 transition-all flex items-center mx-auto space-x-2"
          >
            <span>Explorar Galaxias</span>
            <GiGalaxy className="animate-pulse " />
          </button>
        </section>
      </main>
    </div>
  );
};

const StatCard = ({ icon, number, label }) => (
  <div className="bg-gray-800 bg-opacity-60 backdrop-blur-sm rounded-xl p-4 text-center border border-gray-700">
    <div className="text-3xl mb-2 text-blue-400">{icon}</div>
    <div className="text-2xl font-bold mb-1">{number}</div>
    <div className="text-gray-400 text-sm">{label}</div>
  </div>
);

export default Home;
