import React from "react";
import { Stars } from "@components/ui/Stars";
import { FaUserAstronaut, FaBriefcase } from "react-icons/fa";
import { MdSchool } from "react-icons/md";

const AboutMe = () => {
  const experiences = [
    {
      title: "Desarrollador Full Stack – Startup Española (Remoto)",
      period: "Mar 2026 – Actualidad",
      description: "Desarrollo y mantenimiento de funcionalidades para un CRM empresarial orientado a la gestión comercial y crecimiento de una empresa de e-commerce y dropshipping. Participación en levantamiento de requisitos, elaboración de PRD y definición funcional de nuevas características. Implementación de soluciones backend con Python (FastAPI) y frontend con Preact, trabajando sobre una arquitectura modular. Desarrollo y corrección de funcionalidades en entornos productivos, aplicando principios TDD, DDD y KISS. Integración de APIs y gestión de bases de datos SQL para soportar procesos operativos y comerciales del negocio."
    },
    {
      title: "Desarrollador Junior / Prácticas - Siesa",
      period: "Sept 2025 – Feb 2026",
      description: "Desarrollo de una plataforma interna de plantillas IT utilizando Laravel y React, integrando un sistema de control de acceso para estandarizar las operaciones del equipo de soporte. Resolución de incidentes técnicos en entornos de producción, asegurando la correcta configuración y despliegue de las aplicaciones corporativas. Administración del ciclo de vida de tickets de soporte mediante Freshdesk, garantizando la atención oportuna y el cumplimiento de los tiempos de respuesta. Asistencia técnica directa a clientes y usuarios finales para optimizar el uso de las herramientas de software de la compañía."
    },
    {
      title: "Desarrollador Full Stack / DevOps – Celco S.A.S",
      period: "Ene 2025 – Ago 2025",
      description: "Diseño y despliegue de \"MMaintenance\", plataforma web (Django, PostgreSQL) para la digitalización del mantenimiento en la industria metalmecánica, logrando reducir en un 80% el tiempo de documentación manual. Desarrollo de aplicación móvil para técnicos de campo con React Native y Expo, integrando formularios dinámicos y firmas digitales para la generación automatizada de reportes PDF. Implementación de arquitectura de sincronización offline en la app móvil, garantizando la captura de datos en zonas rurales sin conectividad y su posterior sincronización automática al recuperar la red."
    },
    {
      title: "Desarrollador Freelance – Estructuras Soldadas",
      period: "2026",
      description: "Desarrollo y despliegue de sitio web profesional para empresa de soldadura y estructuras metálicas, utilizada por cliente real en producción. Implementación de landing page con secciones de servicios, portafolio de trabajos realizados, formulario de contacto e información de ubicación. Diseño responsive optimizado para visualización en dispositivos de escritorio y móviles en entorno industrial. Producción: www.estructurassoldadas.es"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white relative overflow-hidden">
      <Stars numStars={400} starColor="rgba(200, 200, 255," maxRadius={4} />

      {/* Nebulosa */}
      <div className="absolute top-1/4 -left-20 w-64 h-64 bg-purple-900 rounded-full filter blur-3xl opacity-20"></div>
      <div className="absolute bottom-1/4 -right-20 w-64 h-64 bg-blue-900 rounded-full filter blur-3xl opacity-20"></div>

      <main className="relative z-10 max-w-6xl mx-auto py-12 px-6">
        <section className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 flex items-center">
            <FaUserAstronaut className="mr-2 text-blue-400" /> Sobre Mí
          </h2>

          <div className="bg-gray-800 bg-opacity-60 backdrop-blur-sm rounded-xl p-6 mb-8 border border-gray-700">
            <p className="mb-4">
              Soy un desarrollador fullstack apasionado por la tecnología y la
              astronomía. Me encanta crear aplicaciones web que no solo sean 
              funcionales, sino también visualmente atractivas. Mi enfoque está
              en la experiencia del usuario y en resolver problemas complejos
              de manera creativa.
            </p>
            <p>
              Siempre estoy buscando aprender nuevas tecnologías y mejorar mis
              habilidades. Me gusta trabajar en proyectos desafiantes que me 
              permitan crecer profesionalmente y contribuir a la comunidad.
            </p>
          </div>

          <h3 className="text-xl font-semibold mb-4 flex items-center">
            <FaBriefcase className="mr-2 text-blue-400" /> Experiencia
          </h3>
          <div className="space-y-4 mb-8">
            {experiences.map((exp, index) => (
              <div key={index} className="flex">
                <div className="flex flex-col items-center mr-4">
                  <div className="w-3 h-3 bg-purple-500 rounded-full mt-1"></div>
                  {index < experiences.length - 1 && <div className="w-px h-full bg-gray-600"></div>}
                </div>
                <div className="pb-6">
                  <h4 className="font-semibold text-white">{exp.title}</h4>
                  <p className="text-purple-400 text-sm">{exp.period}</p>
                  <p className="text-gray-300 text-sm mt-2 leading-relaxed">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>

          <h3 className="text-xl font-semibold mb-4 flex items-center">
            <MdSchool className="mr-2 text-blue-400" /> Educación
          </h3>
          <div className="space-y-4 mb-8">
            <TimelineItem
              title="Tecnólogo en Desarrollo de Software"
              subtitle="Universidad Del Valle"
              year="2022-2026 (Graduado)"
            />
          </div>

          
        </section>
      </main>
    </div>
  );
};

const TimelineItem = ({ title, subtitle, year }) => (
  <div className="flex">
    <div className="flex flex-col items-center mr-4">
      <div className="w-3 h-3 bg-blue-500 rounded-full mt-1"></div>
      <div className="w-px h-full bg-gray-600"></div>
    </div>
    <div className="pb-6">
      <h4 className="font-semibold">{title}</h4>
      <p className="text-gray-400 text-sm">{subtitle}</p>
      <p className="text-gray-500 text-xs mt-1">{year}</p>
    </div>
  </div>
);

export default AboutMe;