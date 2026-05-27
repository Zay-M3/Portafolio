import { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { GiGalaxy, GiSpinningBlades } from 'react-icons/gi'
import { FiMenu, FiX } from 'react-icons/fi'

const navItems = [
  { id: 'inicio', label: 'inicio' },
  { id: 'proyectos', label: 'proyectos' },
  { id: 'sobre-mi', label: 'sobre mí' },
  { id: 'contacto', label: 'contacto' },
]

const Header = () => {
  const [activeSection, setActiveSection] = useState('inicio')
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  const isLandingPage = location.pathname === '/'
  const isGalaxyPage = location.pathname === '/galaxias'

  const scrollToSection = (sectionId) => {
    setIsMobileMenuOpen(false)
    if (isLandingPage) {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
        setActiveSection(sectionId)
      }
    } else {
      navigate('/')
      setTimeout(() => {
        const element = document.getElementById(sectionId)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
          setActiveSection(sectionId)
        }
      }, 200)
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      if (isLandingPage) {
        const sections = ['inicio', 'proyectos', 'sobre-mi', 'contacto']
        const scrollPosition = window.scrollY + 100

        for (const section of sections) {
          const element = document.getElementById(section)
          if (element) {
            const { offsetTop, offsetHeight } = element
            if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
              setActiveSection(section)
              break
            }
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isLandingPage])

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [location])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-20 transition-all duration-300 border-b border-gray-800 backdrop-blur-sm ${
      isScrolled ? 'py-3 px-4 md:px-6 bg-[rgba(17,17,17,0.95)]' : 'py-4 px-4 md:py-6 md:px-8 bg-[#0c0b21]'
    }`}>
      <div className="max-w-6xl mx-auto">
        {/* Desktop: Logo + Nav in row */}
        <div className="hidden md:flex flex-row justify-between items-center">
          <div className="flex items-center space-x-3">
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
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`rounded-full text-sm capitalize transition-all ${
                  isScrolled ? 'px-3 py-1.5' : 'px-4 py-2'
                } ${
                  activeSection === item.id
                    ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {item.label}
              </button>
            ))}
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

        {/* Mobile: Logo + Hamburger */}
        <div className="flex md:hidden flex-row justify-between items-center">
          <div className="flex items-center space-x-2">
            <GiSpinningBlades className="text-blue-400 text-xl animate-spin-slow" />
            <h1 className="font-bold text-lg bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              PORTAFOLIO DAVID
            </h1>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-gray-300 hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Mobile: Dropdown menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-2 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`w-full text-left rounded-lg px-4 py-3 text-sm capitalize transition-all ${
                  activeSection === item.id
                    ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white"
                    : "text-gray-300 hover:bg-gray-800 hover:text-white"
                }`}
              >
                {item.label}
              </button>
            ))}
            {isGalaxyPage ? (
              <button
                onClick={() => { setIsMobileMenuOpen(false); navigate('/') }}
                className="w-full text-left rounded-lg px-4 py-3 text-sm capitalize text-gray-300 hover:bg-gray-800 hover:text-white"
              >
                <GiSpinningBlades className="inline mr-2" />
                inicio
              </button>
            ) : (
              <button
                onClick={() => { setIsMobileMenuOpen(false); navigate('/galaxias') }}
                className="w-full text-left rounded-lg px-4 py-3 text-sm capitalize text-gray-300 hover:bg-gray-800 hover:text-white"
              >
                <GiGalaxy className="inline mr-2" />
                galaxias
              </button>
            )}
          </div>
        )}
      </div>
    </nav>
  )
}

export default Header