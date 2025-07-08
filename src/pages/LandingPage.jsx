import React from "react";
import Home from "./home/Home";
import Proyects from "./Proyects";
import AboutMe from "./AboutMe";
import ContacMe from "./ContacMe";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Sección Home */}
      <section id="inicio">
        <Home />
      </section>

      {/* Sección Proyectos */}
      <section id="proyectos">
        <Proyects />
      </section>

      {/* Sección Sobre Mí */}
      <section id="sobre-mi">
        <AboutMe />
      </section>

      {/* Sección Contacto */}
      <section id="contacto">
        <ContacMe />
      </section>
    </div>
  );
};

export default LandingPage;
