import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";

import Home from "./pages/home/Home.jsx";
import NoFound from "./pages/no-found/NoFound.jsx";
import Layout from "./layout/Layout.jsx";
import Proyects from "./pages/Proyects.jsx";
import AboutMe from "./pages/AboutMe.jsx";
import ContacMe from "./pages/ContacMe.jsx";
import Galaxy from "./pages/Galaxy.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/inicio" element={<Home />} />
        <Route path="*" element={<NoFound />} />
        <Route path="/proyectos" element={<Proyects />} />
        <Route path="/galaxias" element={<Galaxy />} />
        <Route path="/sobre-mi" element={<AboutMe />} />
        <Route path="/contacto" element={<ContacMe />} />
      </Routes>
    </Layout>
  </BrowserRouter>
);
