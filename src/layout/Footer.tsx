import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import { IoPlanet } from 'react-icons/io5'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative border-t border-gray-800 bg-gray-900 bg-opacity-80 backdrop-blur-sm">
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-blue-900 to-transparent opacity-10"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-4">
              <IoPlanet className="text-blue-400 text-2xl mr-2" />
              <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                SPACE PORTFOLIO
              </h3>
            </div>
            <p className="text-gray-400 mb-4">
              Explorando nuevas fronteras digitales y creando experiencias cósmicas en la web.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/Zay-M3" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
                <FaGithub size={20} />
              </a>
              <a href="https://www.linkedin.com/in/oscar-david-estrada-betancourt-491732331/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
                <FaLinkedin size={20} />
              </a>
              <a href="mailto:oscardavidestradabetancourth@gmail.com" className="text-gray-400 hover:text-blue-400 transition-colors">
                <FaEnvelope size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">Explorar</h4>
            <ul className="space-y-3 mt-4">
              <li><a href="/inicio" className="text-gray-400 hover:text-blue-400 transition-colors flex items-center">inicio</a></li>
              <li><a href="/proyectos" className="text-gray-400 hover:text-blue-400 transition-colors flex items-center">proyectos</a></li>
              <li><a href="/sobre-mi" className="text-gray-400 hover:text-blue-400 transition-colors flex items-center">sobre mí</a></li>
              <li><a href="/contacto" className="text-gray-400 hover:text-blue-400 transition-colors flex items-center">contacto</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">Contacto</h4>
            <ul className="space-y-3 mt-4 text-gray-400">
              <li className="flex items-start">
                <FaEnvelope className="mt-1 mr-3 flex-shrink-0 text-blue-400" />
                <span>oscardavidestrada@hotmail.com</span>
              </li>
              <li className="flex items-start">
                <span>Cali, Colombia</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 my-8"></div>

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {currentYear} Zay Space Portfolio. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer