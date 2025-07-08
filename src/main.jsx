import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import LandingPage from "./pages/LandingPage.jsx";
import NoFound from "./pages/no-found/NoFound.jsx";
import Layout from "./layout/Layout.jsx";
import Galaxy from "./pages/Galaxy.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Layout>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/galaxias" element={<Galaxy />} />
        <Route path="*" element={<NoFound />} />
      </Routes>
    </Layout>
  </BrowserRouter>
);
