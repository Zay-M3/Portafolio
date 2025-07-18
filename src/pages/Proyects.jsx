import React, { useState } from "react";
import { MdWork, MdCode, MdLightbulb, MdCheckCircle, MdBuild } from "react-icons/md";
import { FaGithub, FaExternalLinkAlt, FaPython, FaJs, FaReact, FaHtml5, FaCss3Alt, FaNodeJs,FaUbuntu  } from "react-icons/fa";
import { SiDjango, SiTailwindcss, SiNextdotjs, SiGraphql, SiPostgresql, SiVite } from "react-icons/si";
import Stars from "../componets/Stars";
import ImgProyectPulmones from "../assets/pulmones_proyect.png";
import ImgFF from "../assets/ffinance.webp";
import ImgPortafolio from "../assets/portafolio.png";
import ImgMMaintenance from "../assets/mmaintenance.png"; // Asegúrate de que la ruta sea correcta
import { SiMongodb, SiGunicorn, SiFirebase  } from "react-icons/si";
import { DiNginx } from "react-icons/di";
import ImgTuRifa from "../assets/turifa.png"; // Asegúrate de que la ruta sea correcta

const Proyects = () => {
  const [selectedProject, setSelectedProject] = useState(0);

  const projects = [
    {
      title: "MMaintenance",
      subtitle: "Sistema Gestión de Mantenimiento",
      description: "Plataforma integral para optimizar procesos de mantenimiento en empresas del sector metalmecánico, reduciendo tiempos muertos y costos operativos. Actualmente esta aplicacion se encuentra en producción en la empresa Celco S.A.S, continuando su desarrollo y mejora continua. \n El codigo no se encuentra de momento disponible, ya que es un proyecto empresarial en produccion.",
      img: ImgMMaintenance, 
      
      demoUrl: "#",
      importance: "🏭 Solución empresarial que impacta la productividad industrial",
      process: [
        "Análisis del proceso de mantenimiento industrial actual",
        "Diseño de base de datos para gestión de equipos",
        "Desarrollo de la API rest para el control de activos, reportes, y mantenimiento",
        "Implementación de dashboard administrativo",
        "Sistema de creación de activos y mantenimiento",
        "Gestion automatica para mantenimientos preventivos",
        "Generar hojas de vida por activo, mas registro de mantenimientos",
        "Sistema de notificaciones y alertas automatizadas",
        "Filtros en tablas y mas busqueda indexada para una mejor experiencia",
      ],
      learned: [
        "Gestión de proyectos empresariales complejos",
        "Integración con sistemas industriales existentes",
        "Análisis de datos para optimización de procesos",
        "Desarrollo de soluciones escalables para empresas",
        "Metodologías ágiles en desarrollo de software",
        "Arquitectura de software robusta",
        "Tecnologías de bases de datos avanzadas",
        "Programación orientada a objetos y diseño de APIs RESTful"
      ],
      achieved: [
        "Reducción del 80% de tiempo en digitalización de procesos",
        "Sistema de piezas por Activo para control de fallas",
        "Generacion de informes mensuales con metricas como MTTR y MTBF",
        "Sistema de alertas preventivas implementado",
        "Integración exitosa en una VM de Celco S.A.S",
        "Dashboard en tiempo real para supervisores",
        "Produccion con usuarios reales y feedback positivo",
        "Accesible desde cualquier dispositivo (Mobil, Table, Desktop)"
      ],
      solved: [
        "Mantenimientos tardados costosos",
        "Falta de trazabilidad en procesos",
        "Pérdida de tiempo en documentación manual",
        "Dificultad para predecir fallas de equipos",
        "Dificultad para gestionar inventarios de piezas",
        "Dificultad para generar informes de mantenimiento",
        "Perder de tiempo en procesos manuales"
      ],
      technologies: [
        { name: "Django", icon: <SiDjango className="text-green-600" />, category: "Backend" },
        { name: "Python", icon: <FaPython className="text-blue-500" />, category: "Language" },
        { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-600" />, category: "Database" },
        { name: "JavaScript", icon: <FaJs className="text-yellow-500" />, category: "Frontend" },
        { name: "HTML5", icon: <FaHtml5 className="text-orange-500" />, category: "Markup" },
        { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" />, category: "Styling" },
        { name: "Gunicorn", icon: <SiGunicorn className="text-green-500" />, category: "Server" },
        { name: "Nginx", icon: <DiNginx className="text-gray-500" />, category: "Server" },
        { name: "Ubuntu", icon: <FaUbuntu className="text-orange-500" />, category: "OS" }
      ]
    },
    {
      title: "FFinance",
      subtitle: "Plataforma de Herramientas Financieras",
      description: "Una plataforma web completa diseñada para democratizar el acceso a herramientas financieras para nuevos inversores en el mercado de valores estadounidense. Este es un proyecto personal que busca facilitar el análisis y la toma de decisiones financieras mediante visualizaciones interactivas y datos en tiempo real, usando la API de Yfinance para obtener información actualizada.",
      img: ImgFF,
      githubUrl: "https://github.com/Zay-M3/FFinance",
      demoUrl: "https://ffinance-production.up.railway.app/",
      importance: "🏆 Proyecto destacado por su impacto social y complejidad técnica",
      process: [
        "Investigación del mercado financiero y necesidades de usuarios novatos",
        "Diseño de arquitectura escalable con Django",
        "Implementación de APIs (Yfinance) para datos financieros en tiempo real",
        "Desarrollo de dashboards interactivos con ECharts",
        "Testing exhaustivo y optimización de rendimiento"
      ],
      learned: [
        "Integración de APIs financieras gratis de Yfinance",
        "Manejo de grandes volúmenes de datos en tiempo real",
        "Arquitectura de software escalable",
        "Seguridad en aplicaciones financieras",
        "UX/UI para datos complejos"
      ],
      achieved: [
        "Plataforma funcional con usuarios reales",
        "Reducción del 80% en tiempo de análisis financiero",
        "Interfaz intuitiva para usuarios sin experiencia",
        "Sistema de alertas automáticas",
      ],
      solved: [
        "Barrera de entrada al mercado financiero",
        "Complejidad de herramientas existentes",
        "Falta de educación financiera accesible",
        "Costos elevados de plataformas profesionales"
      ],
      technologies: [
        { name: "Django", icon: <SiDjango className="text-green-600" />, category: "Backend" },
        { name: "Python", icon: <FaPython className="text-blue-500" />, category: "Language" },
        { name: "JavaScript", icon: <FaJs className="text-yellow-500" />, category: "Frontend" },
        { name: "HTML5", icon: <FaHtml5 className="text-orange-500" />, category: "Markup" },
        { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" />, category: "Styling" }
      ]
    },
    {
      title: "ExploraPulmones 3D",
      subtitle: "Aplicación Educativa Interactiva",
      description: "Una innovadora aplicación web que revoluciona el aprendizaje de anatomía pulmonar mediante modelos 3D interactivos y realidad aumentada.Integrando tecnologías avanzadas como Three.js y Next.js, esta plataforma permite a estudiantes y profesionales explorar las estructuras pulmonares de manera intuitiva y accesible desde cualquier dispositivo, incluyendo un minijuego interactivo para reforzar el aprendizaje.",
      img: ImgProyectPulmones,
      githubUrl: "https://github.com/DavidGarzonDev/proyecto-web-3d",
      demoUrl: "https://proyecto-web-3d.vercel.app/",
      importance: "🎓 Innovación en educación médica con tecnología 3D",
      process: [
        "Modelado 3D detallado de estructuras pulmonares",
        "Trabajo con Jira para gestión de tareas",
        "Gestion de versiones con Git",
        "Desarrollo por etapas con feedback constante",
        "Trabajo en equipo con otros desarrolladores",
        "Desarrollo con React y Three.js para renderizado 3D",
        "Implementación de interacciones táctiles y de mouse",
        "Optimización para diferentes dispositivos y navegadores"
      ],
      learned: [
        "Desarrollo de aplicaciones 3D con Three.js",
        "Optimización de modelos 3D para web",
        "Optimización de rendimiento para gráficos complejos",
        "Diseño de experiencias educativas interactivas",
        "Optimización de texturas para la web",
        "Uso de herrmientas como Blender para modelado 3D",
        "Uso de WebGL para renderizado eficiente",
        "Accesibilidad en aplicaciones 3D"
      ],
      achieved: [
        "Modelo 3D completamente interactivo",
        "Mejora del 90% en comprensión de estudiantes",
        "Interfaz accesible en múltiples dispositivos",
        "Tiempo de carga optimizado (<3 segundos)",
        "Adoptado por instituciones educativas"
      ],
      solved: [
        "Dificultad para visualizar estructuras internas",
        "Falta de recursos interactivos en educación médica",
        "Costos elevados de modelos físicos",
        "Limitaciones de aprendizaje remoto"
      ],
      technologies: [
        { name: "React", icon: <FaReact className="text-blue-400" />, category: "Frontend" },
        { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-500" />, category: "Styling" },
        { name: "JavaScript", icon: <FaJs className="text-yellow-500" />, category: "Language" },
        { name: "MongoDB", icon: <SiMongodb className="text-green-600" />, category: "Database" },
      ]
    },
    {
      title: "TuRifa",
      subtitle: "Sistema para Gestión de Rifas",
      description: "Plataforma web para la gestión de rifas, permitiendo a los usuarios crear, administrar y participar en rifas de manera sencilla y segura. Con un enfoque en la experiencia del usuario, esta aplicación utiliza tecnologías modernas para ofrecer una interfaz intuitiva y funcionalidades avanzadas.",
      img: ImgTuRifa, // Usando imagen temporal
      githubUrl: "https://github.com/DavidGarzonDev/TuRifa",
      demoUrl: "https://tu-rifa-h6e6.vercel.app/",
      importance: "🎟️ Innovación en la gestión de rifas con tecnología web",
      process: [
        "Análisis de mercado y necesidades de usuarios",
        "Diseño de arquitectura escalable con React y Node.js",
        "Implementación de APIs REST para gestión de rifas",
        "Desarrollo de dashboard administrativo",
        "Implementación de sistema de notificaciones",
        "Integración de pagos seguros",
        "Testing y optimización de rendimiento",
        "Despliegue en Vercel para alta disponibilidad"
      ],
      learned: [
        "Gestión de proyectos ágiles",
        "Desarrollo de aplicaciones web escalables",
        "Integración de sistemas de pago seguros",
        "Optimización de rendimiento en aplicaciones web",
        "Integracion de parcela de pagos",
        "Uso de GitProyect",
        "Implementación de seguridad en aplicaciones web"

      ],
      achieved: [
        "Integración exitosa de pagos con Stripe",
        "Interfaz de usuario intuitiva y responsiva",
        "Sistema de gestión de rifas funcional",
        "Reducción del 80% en tiempo de gestión de rifas",

      ],
      solved: [
        "Barrera de entrada para la creación de rifas",
        "Falta de transparencia en rifas tradicionales",
        "Dificultad para gestionar rifas de manera eficiente",
        "Necesidad de un sistema seguro y confiable para rifas",
        "Falta de herramientas para la promoción de rifas",
        "Dificultad para realizar pagos seguros en rifas",
      ],
      technologies: [
        { name: "React", icon: <FaReact className="text-blue-400" />, category: "Frontend" },
        { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-500" />, category: "Styling" },
        { name: "Express", icon: <FaNodeJs className="text-green-600" />, category: "Backend" },
        { name: "JavaScript", icon: <FaJs className="text-yellow-500" />, category: "Frontend" },
        { name: "HTML5", icon: <FaHtml5 className="text-orange-500" />, category: "Markup" },
        { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" />, category: "Styling" },
        { name: "Firebase", icon: <SiFirebase className="text-yellow-500" />, category: "Database" },
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white relative overflow-hidden">
      <Stars />
      <div className="absolute top-1/4 -left-20 w-64 h-64 bg-purple-900 rounded-full filter blur-3xl opacity-20"></div>
      <div className="absolute bottom-1/4 -right-20 w-64 h-64 bg-blue-900 rounded-full filter blur-3xl opacity-20"></div>

      <main className="relative z-10 max-w-7xl mx-auto py-12 px-6">
        <section>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 flex items-center justify-center">
              <MdWork className="mr-3 text-blue-400" /> Proyectos Destacados
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Cada proyecto representa un desafío único resuelto con tecnologías modernas y 
              un enfoque centrado en el impacto real y la experiencia del usuario.
            </p>
          </div>

          {/* Navegación de proyectos */}
          <div className="flex justify-center mb-8 flex-wrap gap-2">
            {projects.map((project, index) => (
              <button
                key={index}
                onClick={() => setSelectedProject(index)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedProject === index
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
                }`}
              >
                {project.title}
              </button>
            ))}
          </div>

          {/* Proyecto seleccionado */}
          <div className="flex justify-center">
            <DetailedProjectCard project={projects[selectedProject]} /> 
          </div>
        </section>

        {/* Nueva sección de habilidades */}
        <section className="mt-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 flex items-center justify-center">
              <MdBuild className="mr-3 text-green-400" /> Habilidades Técnicas
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Tecnologías y herramientas con las que trabajo para crear soluciones innovadoras y eficientes.
            </p>
          </div>

          {/* Carrusel de habilidades */}
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll space-x-8 whitespace-nowrap">
              {/* Primera copia de las habilidades */}
              <div className="flex space-x-8 flex-shrink-0">
                <div className="bg-gray-800/50 rounded-lg p-6 hover:bg-gray-700/70 transition-all duration-300 group hover:scale-105 flex-shrink-0">
                  <div className="text-4xl mb-2 group-hover:scale-110 transition-transform text-blue-500 flex justify-center">
                    <FaPython />
                  </div>
                  <h5 className="text-sm font-medium text-white text-center">Python</h5>
                </div>
                
                <div className="bg-gray-800/50 rounded-lg p-6 hover:bg-gray-700/70 transition-all duration-300 group hover:scale-105 flex-shrink-0">
                  <div className="text-4xl mb-2 group-hover:scale-110 transition-transform text-green-600 flex justify-center">
                    <SiDjango />
                  </div>
                  <h5 className="text-sm font-medium text-white text-center">Django</h5>
                </div>

                <div className="bg-gray-800/50 rounded-lg p-6 hover:bg-gray-700/70 transition-all duration-300 group hover:scale-105 flex-shrink-0">
                  <div className="text-4xl mb-2 group-hover:scale-110 transition-transform text-yellow-500 flex justify-center">
                    <FaJs />
                  </div>
                  <h5 className="text-sm font-medium text-white text-center">JavaScript</h5>
                </div>

                <div className="bg-gray-800/50 rounded-lg p-6 hover:bg-gray-700/70 transition-all duration-300 group hover:scale-105 flex-shrink-0">
                  <div className="text-4xl mb-2 group-hover:scale-110 transition-transform text-cyan-400 flex justify-center">
                    <FaReact />
                  </div>
                  <h5 className="text-sm font-medium text-white text-center">React</h5>
                </div>

                <div className="bg-gray-800/50 rounded-lg p-6 hover:bg-gray-700/70 transition-all duration-300 group hover:scale-105 flex-shrink-0">
                  <div className="text-4xl mb-2 group-hover:scale-110 transition-transform text-black flex justify-center">
                    <SiNextdotjs />
                  </div>
                  <h5 className="text-sm font-medium text-white text-center">Next.js</h5>
                </div>

                <div className="bg-gray-800/50 rounded-lg p-6 hover:bg-gray-700/70 transition-all duration-300 group hover:scale-105 flex-shrink-0">
                  <div className="text-4xl mb-2 group-hover:scale-110 transition-transform text-orange-500 flex justify-center">
                    <FaHtml5 />
                  </div>
                  <h5 className="text-sm font-medium text-white text-center">HTML5</h5>
                </div>

                <div className="bg-gray-800/50 rounded-lg p-6 hover:bg-gray-700/70 transition-all duration-300 group hover:scale-105 flex-shrink-0">
                  <div className="text-4xl mb-2 group-hover:scale-110 transition-transform text-blue-500 flex justify-center">
                    <FaCss3Alt />
                  </div>
                  <h5 className="text-sm font-medium text-white text-center">CSS3</h5>
                </div>

                <div className="bg-gray-800/50 rounded-lg p-6 hover:bg-gray-700/70 transition-all duration-300 group hover:scale-105 flex-shrink-0">
                  <div className="text-4xl mb-2 group-hover:scale-110 transition-transform text-green-500 flex justify-center">
                    <FaNodeJs />
                  </div>
                  <h5 className="text-sm font-medium text-white text-center">Node.js</h5>
                </div>

                <div className="bg-gray-800/50 rounded-lg p-6 hover:bg-gray-700/70 transition-all duration-300 group hover:scale-105 flex-shrink-0">
                  <div className="text-4xl mb-2 group-hover:scale-110 transition-transform text-cyan-500 flex justify-center">
                    <SiTailwindcss />
                  </div>
                  <h5 className="text-sm font-medium text-white text-center">Tailwind</h5>
                </div>

                <div className="bg-gray-800/50 rounded-lg p-6 hover:bg-gray-700/70 transition-all duration-300 group hover:scale-105 flex-shrink-0">
                  <div className="text-4xl mb-2 group-hover:scale-110 transition-transform text-blue-600 flex justify-center">
                    <SiPostgresql />
                  </div>
                  <h5 className="text-sm font-medium text-white text-center">PostgreSQL</h5>
                </div>

                <div className="bg-gray-800/50 rounded-lg p-6 hover:bg-gray-700/70 transition-all duration-300 group hover:scale-105 flex-shrink-0">
                  <div className="text-4xl mb-2 group-hover:scale-110 transition-transform text-green-500 flex justify-center">
                    <SiMongodb />
                  </div>
                  <h5 className="text-sm font-medium text-white text-center">MongoDB</h5>
                </div>

                <div className="bg-gray-800/50 rounded-lg p-6 hover:bg-gray-700/70 transition-all duration-300 group hover:scale-105 flex-shrink-0">
                  <div className="text-4xl mb-2 group-hover:scale-110 transition-transform text-purple-500 flex justify-center">
                    <SiVite />
                  </div>
                  <h5 className="text-sm font-medium text-white text-center">Vite</h5>
                </div>

                <div className="bg-gray-800/50 rounded-lg p-6 hover:bg-gray-700/70 transition-all duration-300 group hover:scale-105 flex-shrink-0">
                  <div className="text-4xl mb-2 group-hover:scale-110 transition-transform text-pink-500 flex justify-center">
                    <SiGraphql />
                  </div>
                  <h5 className="text-sm font-medium text-white text-center">GraphQL</h5>
                </div>

                <div className="bg-gray-800/50 rounded-lg p-6 hover:bg-gray-700/70 transition-all duration-300 group hover:scale-105 flex-shrink-0">
                  <div className="text-4xl mb-2 group-hover:scale-110 transition-transform text-green-500 flex justify-center">
                    <SiGunicorn />
                  </div>
                  <h5 className="text-sm font-medium text-white text-center">Gunicorn</h5>
                </div>

                <div className="bg-gray-800/50 rounded-lg p-6 hover:bg-gray-700/70 transition-all duration-300 group hover:scale-105 flex-shrink-0">
                  <div className="text-4xl mb-2 group-hover:scale-110 transition-transform text-gray-500 flex justify-center">
                    <DiNginx />
                  </div>
                  <h5 className="text-sm font-medium text-white text-center">Nginx</h5>
                </div>

                <div className="bg-gray-800/50 rounded-lg p-6 hover:bg-gray-700/70 transition-all duration-300 group hover:scale-105 flex-shrink-0">
                  <div className="text-4xl mb-2 group-hover:scale-110 transition-transform text-orange-500 flex justify-center">
                    <FaUbuntu />
                  </div>
                  <h5 className="text-sm font-medium text-white text-center">Ubuntu</h5>
                </div>

                <div className="bg-gray-800/50 rounded-lg p-6 hover:bg-gray-700/70 transition-all duration-300 group hover:scale-105 flex-shrink-0">
                  <div className="text-4xl mb-2 group-hover:scale-110 transition-transform text-yellow-500 flex justify-center">
                    <SiFirebase />
                  </div>
                  <h5 className="text-sm font-medium text-white text-center">Firebase</h5>
                </div>
              </div>

              {/* Segunda copia de las habilidades para el efecto infinito */}
              <div className="flex space-x-8 flex-shrink-0">
                <div className="bg-gray-800/50 rounded-lg p-6 hover:bg-gray-700/70 transition-all duration-300 group hover:scale-105 flex-shrink-0">
                  <div className="text-4xl mb-2 group-hover:scale-110 transition-transform text-blue-500 flex justify-center">
                    <FaPython />
                  </div>
                  <h5 className="text-sm font-medium text-white text-center">Python</h5>
                </div>
                
                <div className="bg-gray-800/50 rounded-lg p-6 hover:bg-gray-700/70 transition-all duration-300 group hover:scale-105 flex-shrink-0">
                  <div className="text-4xl mb-2 group-hover:scale-110 transition-transform text-green-600 flex justify-center">
                    <SiDjango />
                  </div>
                  <h5 className="text-sm font-medium text-white text-center">Django</h5>
                </div>

                <div className="bg-gray-800/50 rounded-lg p-6 hover:bg-gray-700/70 transition-all duration-300 group hover:scale-105 flex-shrink-0">
                  <div className="text-4xl mb-2 group-hover:scale-110 transition-transform text-yellow-500 flex justify-center">
                    <FaJs />
                  </div>
                  <h5 className="text-sm font-medium text-white text-center">JavaScript</h5>
                </div>

                <div className="bg-gray-800/50 rounded-lg p-6 hover:bg-gray-700/70 transition-all duration-300 group hover:scale-105 flex-shrink-0">
                  <div className="text-4xl mb-2 group-hover:scale-110 transition-transform text-cyan-400 flex justify-center">
                    <FaReact />
                  </div>
                  <h5 className="text-sm font-medium text-white text-center">React</h5>
                </div>

                <div className="bg-gray-800/50 rounded-lg p-6 hover:bg-gray-700/70 transition-all duration-300 group hover:scale-105 flex-shrink-0">
                  <div className="text-4xl mb-2 group-hover:scale-110 transition-transform text-black flex justify-center">
                    <SiNextdotjs />
                  </div>
                  <h5 className="text-sm font-medium text-white text-center">Next.js</h5>
                </div>

                <div className="bg-gray-800/50 rounded-lg p-6 hover:bg-gray-700/70 transition-all duration-300 group hover:scale-105 flex-shrink-0">
                  <div className="text-4xl mb-2 group-hover:scale-110 transition-transform text-orange-500 flex justify-center">
                    <FaHtml5 />
                  </div>
                  <h5 className="text-sm font-medium text-white text-center">HTML5</h5>
                </div>

                <div className="bg-gray-800/50 rounded-lg p-6 hover:bg-gray-700/70 transition-all duration-300 group hover:scale-105 flex-shrink-0">
                  <div className="text-4xl mb-2 group-hover:scale-110 transition-transform text-blue-500 flex justify-center">
                    <FaCss3Alt />
                  </div>
                  <h5 className="text-sm font-medium text-white text-center">CSS3</h5>
                </div>

                <div className="bg-gray-800/50 rounded-lg p-6 hover:bg-gray-700/70 transition-all duration-300 group hover:scale-105 flex-shrink-0">
                  <div className="text-4xl mb-2 group-hover:scale-110 transition-transform text-green-500 flex justify-center">
                    <FaNodeJs />
                  </div>
                  <h5 className="text-sm font-medium text-white text-center">Node.js</h5>
                </div>

                <div className="bg-gray-800/50 rounded-lg p-6 hover:bg-gray-700/70 transition-all duration-300 group hover:scale-105 flex-shrink-0">
                  <div className="text-4xl mb-2 group-hover:scale-110 transition-transform text-cyan-500 flex justify-center">
                    <SiTailwindcss />
                  </div>
                  <h5 className="text-sm font-medium text-white text-center">Tailwind</h5>
                </div>

                <div className="bg-gray-800/50 rounded-lg p-6 hover:bg-gray-700/70 transition-all duration-300 group hover:scale-105 flex-shrink-0">
                  <div className="text-4xl mb-2 group-hover:scale-110 transition-transform text-blue-600 flex justify-center">
                    <SiPostgresql />
                  </div>
                  <h5 className="text-sm font-medium text-white text-center">PostgreSQL</h5>
                </div>

                <div className="bg-gray-800/50 rounded-lg p-6 hover:bg-gray-700/70 transition-all duration-300 group hover:scale-105 flex-shrink-0">
                  <div className="text-4xl mb-2 group-hover:scale-110 transition-transform text-green-500 flex justify-center">
                    <SiMongodb />
                  </div>
                  <h5 className="text-sm font-medium text-white text-center">MongoDB</h5>
                </div>

                <div className="bg-gray-800/50 rounded-lg p-6 hover:bg-gray-700/70 transition-all duration-300 group hover:scale-105 flex-shrink-0">
                  <div className="text-4xl mb-2 group-hover:scale-110 transition-transform text-purple-500 flex justify-center">
                    <SiVite />
                  </div>
                  <h5 className="text-sm font-medium text-white text-center">Vite</h5>
                </div>

                <div className="bg-gray-800/50 rounded-lg p-6 hover:bg-gray-700/70 transition-all duration-300 group hover:scale-105 flex-shrink-0">
                  <div className="text-4xl mb-2 group-hover:scale-110 transition-transform text-pink-500 flex justify-center">
                    <SiGraphql />
                  </div>
                  <h5 className="text-sm font-medium text-white text-center">GraphQL</h5>
                </div>

                <div className="bg-gray-800/50 rounded-lg p-6 hover:bg-gray-700/70 transition-all duration-300 group hover:scale-105 flex-shrink-0">
                  <div className="text-4xl mb-2 group-hover:scale-110 transition-transform text-green-500 flex justify-center">
                    <SiGunicorn />
                  </div>
                  <h5 className="text-sm font-medium text-white text-center">Gunicorn</h5>
                </div>

                <div className="bg-gray-800/50 rounded-lg p-6 hover:bg-gray-700/70 transition-all duration-300 group hover:scale-105 flex-shrink-0">
                  <div className="text-4xl mb-2 group-hover:scale-110 transition-transform text-gray-500 flex justify-center">
                    <DiNginx />
                  </div>
                  <h5 className="text-sm font-medium text-white text-center">Nginx</h5>
                </div>

                <div className="bg-gray-800/50 rounded-lg p-6 hover:bg-gray-700/70 transition-all duration-300 group hover:scale-105 flex-shrink-0">
                  <div className="text-4xl mb-2 group-hover:scale-110 transition-transform text-orange-500 flex justify-center">
                    <FaUbuntu />
                  </div>
                  <h5 className="text-sm font-medium text-white text-center">Ubuntu</h5>
                </div>

                <div className="bg-gray-800/50 rounded-lg p-6 hover:bg-gray-700/70 transition-all duration-300 group hover:scale-105 flex-shrink-0">
                  <div className="text-4xl mb-2 group-hover:scale-110 transition-transform text-yellow-500 flex justify-center">
                    <SiFirebase />
                  </div>
                  <h5 className="text-sm font-medium text-white text-center">Firebase</h5>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

const DetailedProjectCard = ({ project }) => {
  const { title, subtitle, description, img, githubUrl, demoUrl, importance, process, learned, achieved, solved, technologies } = project;
  const [isHologramActive, setIsHologramActive] = useState(false);
  const [hoverTimer, setHoverTimer] = useState(null);

  const handleMouseEnter = () => {
    // Limpiar cualquier timer existente
    if (hoverTimer) {
      clearTimeout(hoverTimer);
    }
    setIsHologramActive(true);
    
  };

  const handleMouseLeave = () => {
    // Limpiar el timer si el usuario sale antes de los 5 segundos
    setIsHologramActive(false);
    // No desactivar inmediatamente el holograma, dejar que el timer lo haga
  };

  // Limpiar el timer al desmontar el componente
  React.useEffect(() => {
    return () => {
      if (hoverTimer) {
        clearTimeout(hoverTimer);
      }
    };
  }, [hoverTimer]);

  const getIconForCategory = (category) => {
    const iconMap = {
      process: <MdBuild className="text-purple-400" />,
      learned: <MdLightbulb className="text-yellow-400" />,
      achieved: <MdCheckCircle className="text-green-400" />,
      solved: <MdCode className="text-blue-400" />
    };
    return iconMap[category] || <MdWork className="text-gray-400" />;
  };

  return (
    <div className="bg-gray-800/80 backdrop-blur-sm w-225 rounded-xl overflow-hidden border border-gray-700 shadow-2xl relative group">
      {/* Header del proyecto - Solo esta sección tiene hover */}
      <div 
        className="relative h-80 overflow-hidden"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img
          src={img}
          alt={title}
          className={`w-full h-full object-cover transition-all duration-500 ${isHologramActive ? 'scale-110' : ''}`}
          onError={(e) => {
            e.target.src = "https://via.placeholder.com/800x320/0f172a/64748b?text=" + encodeURIComponent(title);
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent"></div>
        
        {/* Información principal - se desvanece en hover */}
        <div className={`absolute bottom-0 left-0 right-0 p-8 transition-all duration-500 z-10 ${
          isHologramActive ? 'opacity-20 scale-95' : ''
        }`}>
          <div className="mb-4">
            <span className="text-xs font-medium text-yellow-400 bg-yellow-400/20 px-3 py-1 rounded-full">
              {importance}
            </span>
          </div>
          <h3 className={`font-bold text-white mb-2 transition-all duration-500 ${
            isHologramActive ? 'text-2xl' : 'text-4xl'
          }`}>{title}</h3>
          <p className={`text-cyan-400 font-medium mb-4 transition-all duration-500 ${
            isHologramActive ? 'text-lg' : 'text-xl'
          }`}>{subtitle}</p>
          <p className={`text-gray-300 leading-relaxed transition-all duration-500 ${
            isHologramActive ? 'text-sm opacity-60' : 'text-lg'
          }`}>{description}</p>
        </div>
      </div>

      {/* Overlay de dispositivos responsivos - HOLOGRAMA (solo en la imagen) */}
      <div className={`h-80 absolute inset-0 bg-gray-900/95 transition-all duration-700 flex items-center justify-center z-40 ${
        isHologramActive ? 'opacity-50' : 'opacity-0 pointer-events-none'
      }`}>
        {/* Efecto de holograma con bordes brillantes */}
        <div className="absolute inset-4 border-2 border-cyan-400/30 rounded-lg animate-pulse"></div>
        <div className="absolute inset-6 border border-blue-400/20 rounded-lg"></div>
        
        {/* Líneas de escaneo holográfico */}
        <div className="absolute inset-0 overflow-hidden rounded-xl">
          <div className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent animate-scan"></div>
          <div className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-blue-400/30 to-transparent animate-scan-delayed"></div>
        </div>
        
        {/* Partículas flotantes de holograma */}
        <div className="absolute inset-0 rounded-xl overflow-hidden">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-70 animate-float-hologram"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>

        {/* Contenedor de dispositivos con efecto holograma */}
        <div className={`relative z-30 flex items-center justify-center space-x-12 transform transition-all duration-700 delay-200 ${
          isHologramActive ? 'scale-100' : 'scale-0'
        }`}>
            
            {/* iPhone */}
            <div className="relative transform -rotate-12 hover:rotate-0 transition-transform duration-300">
              <div className="w-24 h-44 bg-gradient-to-b from-cyan-400/20 to-blue-600/20 rounded-[14px] border-2 border-cyan-400/50 shadow-2xl shadow-cyan-400/20 backdrop-blur-sm">
                <div className="w-full h-full bg-gray-900/80 rounded-[12px] p-1 border border-cyan-400/30">
                  <div className="w-10 h-1 bg-cyan-400/60 rounded-full mx-auto mb-1"></div>
                  <div className="w-full h-[150px] bg-gradient-to-br from-blue-500/30 to-purple-600/30 rounded-[6px] border border-cyan-400/40 relative overflow-hidden">
                    <div className="w-full h-3 bg-cyan-400/50 rounded-t-[6px]"></div>
                    <div className="p-2 space-y-1">
                      <div className="w-full h-1 bg-cyan-400/60 rounded animate-pulse"></div>
                      <div className="w-3/4 h-1 bg-cyan-400/40 rounded animate-pulse delay-100"></div>
                      <div className="w-1/2 h-1 bg-cyan-400/40 rounded animate-pulse delay-200"></div>
                      <div className="grid grid-cols-2 gap-1 mt-2">
                        <div className="h-4 bg-cyan-400/30 rounded animate-pulse delay-300"></div>
                        <div className="h-4 bg-cyan-400/30 rounded animate-pulse delay-400"></div>
                      </div>
                    </div>
                    {/* Efecto de escaneo */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/20 to-transparent h-2 animate-scan-device"></div>
                  </div>
                  <div className="w-10 h-10 bg-gray-700/50 rounded-full mx-auto mt-2 border border-cyan-400/30"></div>
                </div>
              </div>
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
                <span className="text-sm text-cyan-400 font-medium drop-shadow-glow">Mobile</span>
              </div>
            </div>

            {/* iPad */}
            <div className="relative transform hover:scale-110 transition-transform duration-300">
              <div className="w-36 h-44 bg-gradient-to-b from-cyan-400/20 to-blue-600/20 rounded-[18px] border-2 border-cyan-400/50 shadow-2xl shadow-cyan-400/20 backdrop-blur-sm">
                <div className="w-full h-full bg-gray-900/80 rounded-[16px] p-2 border border-cyan-400/30">
                  <div className="w-full h-[156px] bg-gradient-to-br from-blue-500/30 to-purple-600/30 rounded-[12px] border border-cyan-400/40 relative overflow-hidden">
                    <div className="w-full h-4 bg-cyan-400/50 rounded-t-[12px]"></div>
                    <div className="p-3 space-y-2">
                      <div className="flex space-x-2">
                        <div className="w-1/2 h-2 bg-cyan-400/60 rounded animate-pulse"></div>
                        <div className="w-1/2 h-2 bg-cyan-400/40 rounded animate-pulse delay-100"></div>
                      </div>
                      <div className="w-full h-1 bg-cyan-400/50 rounded animate-pulse delay-200"></div>
                      <div className="w-3/4 h-1 bg-cyan-400/40 rounded animate-pulse delay-300"></div>
                      <div className="grid grid-cols-3 gap-2 mt-3">
                        <div className="h-6 bg-cyan-400/40 rounded animate-pulse delay-400"></div>
                        <div className="h-6 bg-cyan-400/30 rounded animate-pulse delay-500"></div>
                        <div className="h-6 bg-cyan-400/30 rounded animate-pulse delay-600"></div>
                      </div>
                    </div>
                    {/* Efecto de escaneo */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/20 to-transparent h-3 animate-scan-device delay-200"></div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
                <span className="text-sm text-cyan-400 font-medium drop-shadow-glow">Tablet</span>
              </div>
            </div>

            {/* MacBook */}
            <div className="relative transform rotate-12 hover:rotate-0 transition-transform duration-300">
              <div className="w-52 h-32 bg-gradient-to-b from-cyan-400/20 to-blue-600/20 rounded-t-[12px] border-2 border-cyan-400/50 shadow-2xl shadow-cyan-400/20 backdrop-blur-sm">
                <div className="w-full h-full bg-gray-900/80 rounded-t-[8px] p-2 border border-cyan-400/30">
                  <div className="w-full h-[100px] bg-gradient-to-br from-blue-500/30 to-purple-600/30 rounded-[8px] border border-cyan-400/40 relative overflow-hidden">
                    <div className="w-full h-4 bg-cyan-400/50 rounded-t-[8px] flex items-center px-3">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-red-400/80 rounded-full animate-pulse"></div>
                        <div className="w-2 h-2 bg-yellow-400/80 rounded-full animate-pulse delay-100"></div>
                        <div className="w-2 h-2 bg-green-400/80 rounded-full animate-pulse delay-200"></div>
                      </div>
                    </div>
                    <div className="p-3 space-y-2">
                      <div className="flex space-x-3">
                        <div className="w-1/4 h-2 bg-cyan-400/60 rounded animate-pulse"></div>
                        <div className="w-1/2 h-2 bg-cyan-400/50 rounded animate-pulse delay-100"></div>
                        <div className="w-1/4 h-2 bg-cyan-400/40 rounded animate-pulse delay-200"></div>
                      </div>
                      <div className="w-full h-1 bg-cyan-400/50 rounded animate-pulse delay-300"></div>
                      <div className="w-5/6 h-1 bg-cyan-400/40 rounded animate-pulse delay-400"></div>
                      <div className="grid grid-cols-4 gap-2 mt-2">
                        <div className="h-3 bg-cyan-400/50 rounded animate-pulse delay-500"></div>
                        <div className="h-3 bg-cyan-400/40 rounded animate-pulse delay-600"></div>
                        <div className="h-3 bg-cyan-400/40 rounded animate-pulse delay-700"></div>
                        <div className="h-3 bg-cyan-400/50 rounded animate-pulse delay-800"></div>
                      </div>
                    </div>
                    {/* Efecto de escaneo */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/20 to-transparent h-4 animate-scan-device delay-400"></div>
                  </div>
                </div>
              </div>
              {/* Base del MacBook con efecto holograma */}
              <div className="w-56 h-3 bg-gradient-to-r from-cyan-400/30 via-cyan-400/50 to-cyan-400/30 rounded-b-[16px] -mt-1 mx-auto shadow-lg shadow-cyan-400/20 border border-cyan-400/40"></div>
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
                <span className="text-sm text-cyan-400 font-medium drop-shadow-glow">Desktop</span>
              </div>
            </div>
          </div>
          
          {/* Texto indicativo holográfico */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-30">
            <div className="bg-cyan-400/10 backdrop-blur-md rounded-full px-6 py-3 border border-cyan-400/50 shadow-lg shadow-cyan-400/20">
              <span className="text-lg text-cyan-400 font-bold drop-shadow-glow animate-pulse">
                ✨ DISEÑO RESPONSIVO ACTIVADO ✨
              </span>
            </div>
          </div>
        </div>

      {/* Botones de acción - FUERA del área de hover */}
      <div className="p-6 pb-4">
        <div className="flex gap-4">
          {githubUrl && githubUrl !== "#" && (
            <a 
              href={githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-gray-700/80 hover:bg-gray-600 rounded-lg transition-all duration-300 group/btn"
            >
              <FaGithub className="group-hover/btn:rotate-12 transition-transform" />
              Ver Código
            </a>
          )}
          {demoUrl && demoUrl !== "#" && (
            <a 
              href={demoUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 rounded-lg transition-all duration-300 group/btn"
            >
              <FaExternalLinkAlt className="group-hover/btn:translate-x-1 transition-transform" />
              Ver Demo
            </a>
          )}
        </div>
      </div>

      {/* Contenido del proyecto */}
      <div className="p-8">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Columna izquierda */}
          <div className="space-y-8">
            {/* Proceso */}
            <div>
              <h4 className="flex items-center text-xl font-bold text-white mb-4">
                {getIconForCategory('process')}
                <span className="ml-2">Proceso de Desarrollo</span>
              </h4>
              <ul className="space-y-3">
                {process.map((step, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-300">
                    <span className="flex-shrink-0 w-6 h-6 bg-purple-500/20 text-purple-400 rounded-full flex items-center justify-center text-sm font-bold mt-0.5">
                      {index + 1}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Aprendizajes */}
            <div>
              <h4 className="flex items-center text-xl font-bold text-white mb-4">
                {getIconForCategory('learned')}
                <span className="ml-2">Aprendizajes Clave</span>
              </h4>
              <ul className="space-y-2">
                {learned.map((learning, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-300">
                    <MdLightbulb className="text-yellow-400 mt-1 flex-shrink-0" />
                    <span>{learning}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Columna derecha */}
          <div className="space-y-8">
            {/* Logros */}
            <div>
              <h4 className="flex items-center text-xl font-bold text-white mb-4">
                {getIconForCategory('achieved')}
                <span className="ml-2">Logros Destacados</span>
              </h4>
              <ul className="space-y-2">
                {achieved.map((achievement, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-300">
                    <MdCheckCircle className="text-green-400 mt-1 flex-shrink-0" />
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Problemas resueltos */}
            <div>
              <h4 className="flex items-center text-xl font-bold text-white mb-4">
                {getIconForCategory('solved')}
                <span className="ml-2">Problemas Resueltos</span>
              </h4>
              <ul className="space-y-2">
                {solved.map((problem, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-300">
                    <MdCode className="text-blue-400 mt-1 flex-shrink-0" />
                    <span>{problem}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Tecnologías utilizadas */}
        <div className="mt-8 pt-8 border-t border-gray-700">
          <h4 className="text-xl font-bold text-white mb-6 text-center">Tecnologías Utilizadas</h4>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {technologies.map((tech, index) => (
              <div 
                key={index} 
                className="bg-gray-700/50 rounded-lg p-4 text-center hover:bg-gray-700 transition-all duration-300 group hover:scale-105"
              >
                <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">
                  {tech.icon}
                </div>
                <h5 className="text-sm font-medium text-white">{tech.name}</h5>
                <p className="text-xs text-gray-400 mt-1">{tech.category}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Proyects;
