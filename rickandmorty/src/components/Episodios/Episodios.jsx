import React, { useEffect, useState } from "react";
import { fetchEpisodes } from "../../services/api";

import "./Episodios.css";

const Episodios = () => {
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    const getEpisodes = async () => {
      const data = await fetchEpisodes();
      setEpisodes(data);
    };
    getEpisodes();
  }, []);

  return (
    <div className="episodes-container">
      <h1 className="episodes-title">Episodes</h1>
      <div className="episodes-grid">
        {episodes.map((episode) => (
          <div key={episode.id} className="episode-card">
            <h3 className="episode-name">{episode.name}</h3>
            <p>
              <strong>Fecha de emisión:</strong> {episode.air_date}
            </p>
            <p>
              <strong>Episodio:</strong> {episode.episode}
            </p>
            <p>
              <strong>Personajes:</strong> {episode.characters.length}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Episodios;
