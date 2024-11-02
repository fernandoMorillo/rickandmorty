import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="home-title">Bienvenido al Portal de Rick y Morty</h1>
      <p className="home-description">
        Explora personajes, episodios y locaciones de tu serie favorita.
      </p>
      <div className="home-grid">
        <Link to="/character" className="home-card">
          <div className="card-content">
            <h2>Characters</h2>
            <p>Conoce más sobre los personajes y sus historias.</p>
          </div>
        </Link>
        <Link to="/episodes" className="home-card">
          <div className="card-content">
            <h2>Episodes</h2>
            <p>Descubre los episodios y sus detalles.</p>
          </div>
        </Link>
        <Link to="/locations" className="home-card">
          <div className="card-content">
            <h2>Locations</h2>
            <p>Explora las distintas locaciones de la serie.</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Home;
