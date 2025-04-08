import React from "react";
import { MdWork } from "react-icons/md";
import { IoMdPlanet } from "react-icons/io";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Stars from "../componets/Stars";
import ImgProyectPulmones from "../assets/pulmones_proyect.png";
import ImgFF from "../assets/ffinance.webp";
import ImgPortafolio from "../assets/portafolio.png";

const Proyects = () => {
  const projects = [
    {
      title: "FFinance",
      description: "Finance es un proyecto diseñado para proporcionar herramientas gratuitas a nuevos usuarios del mercado de valores estadounidense. Es un proyecto pequeño creado por un estudiante, un entusiasta de la programación.",
      tags: ["Django", "APis", "Python", "JavaScript", "HTML", "CSS", "Echarts"],
      img: ImgFF,
      githubUrl: "https://github.com/Zay-M3/FFinance",
      demoUrl: "https://ffinance-production.up.railway.app/"
    },
    {
      title: "MMaintenance",
      description: "Esta es una aplicación web donde buscamos agilizar los procesos en el área de mantenimiento de una empresa del sector industrial metalmecánico.",
      tags: ["Django", "APis", "Python", "JavaScript", "HTML", "CSS", "Echarts", "Posgrest"],
      githubUrl: "https://github.com/Zay-M3/MMaintenance",
      demoUrl: "https://mmaintenance-demo.com"
    },
    {
      title: "ExploraPulmones 3D",
      description: "Es una aplicación web interactiva que enseña sobre la anatomía pulmonar y enfermedades respiratorias mediante un modelo 3D. Este proyecto destaca mis habilidades en desarrollo web 3D e interactividad. 🚀",
      tags: ["Next.js", "Tailwind", "GraphQL"],
      img: ImgProyectPulmones,
      githubUrl: "https://github.com/DavidGarzonDev/proyecto-web-3d",
      demoUrl: "https://proyecto-web-3d.vercel.app/"
    },
    {
      title: "Portafolio Espacial",
      description: "Mi portafolio personal, donde muestro mis proyectos y habilidades. Utiliza tecnologías modernas para una experiencia fluida y atractiva, incluyendo animaciones y un diseño responsivo.",
      tags: ["React", "Tailwind CSS", "Vite"],
      img: ImgPortafolio,
      githubUrl: "https://github.com/Zay-M3/Portafolio",
      demoUrl: "https://tudominio.com"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white relative overflow-hidden">
      <Stars />
      <div className="absolute top-1/4 -left-20 w-64 h-64 bg-purple-900 rounded-full filter blur-3xl opacity-20"></div>
      <div className="absolute bottom-1/4 -right-20 w-64 h-64 bg-blue-900 rounded-full filter blur-3xl opacity-20"></div>

      {/* Efectos espaciales */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-900 rounded-full filter blur-[100px] opacity-10"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-900 rounded-full filter blur-[100px] opacity-10"></div>
      </div>

      <main className="relative z-10 max-w-6xl mx-auto py-12 px-6">
        <section>
          <h2 className="text-3xl font-bold mb-8 flex items-center">
            <MdWork className="mr-2 text-blue-400" /> Mis Proyectos
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <ProjectCard 
                key={index}
                title={project.title}
                description={project.description}
                tags={project.tags}
                img={project.img}
                githubUrl={project.githubUrl}
                demoUrl={project.demoUrl}
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

const ProjectCard = ({ title, description, tags, img, githubUrl, demoUrl }) => (
  <div className="group bg-gray-800/60 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700 hover:border-cyan-400 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20 transform hover:-translate-y-1">
    <div className="h-48 relative overflow-hidden">
      {/* Imagen con overlay de nebulosa */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-200/40 via-blue-200/30 to-pink-200/20"></div>
      <img
        src={img}
        alt={title}
        className="w-full h-full object-cover object-center mix-blend-overlay group-hover:mix-blend-normal transition-all duration-500 group-hover:scale-105"
        onError={(e) => {
          e.target.src = "https://via.placeholder.com/400x225/0f172a/64748b?text=Proyecto";
          e.target.className = "w-full h-full object-contain p-4";
        }}
      />
      
      {/* Efecto de partículas */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: `${Math.random() * 4}px`,
              height: `${Math.random() * 4}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.7,
              animation: `float ${Math.random() * 6 + 3}s infinite ease-in-out`
            }}
          />
        ))}
      </div>
      
      {/* Botones flotantes */}
      <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {githubUrl && (
          <a href={githubUrl} target="_blank" className="p-3 bg-gray-800/90 rounded-full hover:bg-gray-700 transition-all transform hover:scale-110">
            <FaGithub className="text-xl" />
          </a>
        )}
        {demoUrl && (
          <a href={demoUrl} target="_blank" className="p-3 bg-cyan-500/90 rounded-full hover:bg-cyan-500 transition-all transform hover:scale-110">
            <FaExternalLinkAlt className="text-xl" />
          </a>
        )}
      </div>
    </div>
    
    <div className="p-6">
      <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
      <p className="text-gray-300 mb-4">{description}</p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag) => (
          <span key={tag} className="px-2 py-1 bg-gray-700/80 rounded text-xs text-gray-200 hover:bg-gray-600 transition-colors">
            {tag}
          </span>
        ))}
      </div>
      
      <div className="flex gap-3">
        {githubUrl && (
          <a href={githubUrl} target="_blank" className="flex items-center px-3 py-2 bg-gray-700/80 rounded-lg text-sm hover:bg-gray-600 transition-colors flex-1 justify-center gap-2">
            <FaGithub /> Código
          </a>
        )}
        {demoUrl && (
          <a href={demoUrl} target="_blank" className="flex items-center px-3 py-2 bg-cyan-600/90 rounded-lg text-sm hover:bg-cyan-500 transition-colors flex-1 justify-center gap-2">
            <FaExternalLinkAlt /> Demo
          </a>
        )}
      </div>
    </div>
    
    <style jsx>{`
      @keyframes float {
        0%, 100% { transform: translateY(0) translateX(0); }
        25% { transform: translateY(-5px) translateX(5px); }
        50% { transform: translateY(5px) translateX(-5px); }
        75% { transform: translateY(-3px) translateX(-3px); }
      }
    `}</style>
  </div>
);

export default Proyects;