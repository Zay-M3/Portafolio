import React from "react";
import Stars from "../componets/Stars";
import { FaUserAstronaut } from "react-icons/fa";
import { MdSchool } from "react-icons/md";

const AboutMe = () => {
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
            <MdSchool className="mr-2 text-blue-400" /> Educación
          </h3>
          <div className="space-y-4 mb-8">
            <TimelineItem
              title="Tecnologia en Desarollo en Software"
              subtitle="Universidad Del Valle"
              year="2022-2025"
            />
          </div>

          <h3 className="text-xl font-semibold mb-4">Habilidades</h3>
          <div className="flex flex-wrap gap-2 mb-4">
            {[
              "React",
              "TypeScript",
              "Three.js",
              "Django",
              "Node.js",
              "GraphQL",
              "Boostrap",
              "Python",
              "JavaScript",
              "Tailwind CSS",
            ].map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 bg-gray-800 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
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
