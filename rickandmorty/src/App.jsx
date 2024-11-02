import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import EpisodiosPage from "./pages/EpisodiosPage";
import LocacionesPage from "./pages/LocacionesPages";
import PersonajesPage from "./pages/PersonajesPage";
import DetallesPersonaje from "./components/Detalles/DetallesPersonaje";
import HomePage from "./components/Home/Home";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/episodes" element={<EpisodiosPage />} />
          <Route path="/locations" element={<LocacionesPage />} />
          <Route path="/character" element={<PersonajesPage />} />
          <Route path="/character/:id" element={<DetallesPersonaje />} />
          <Route path="*" element={<h1>404</h1>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
