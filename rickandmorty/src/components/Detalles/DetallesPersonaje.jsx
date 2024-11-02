import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchSingleCharacter } from "../../services/api";
import "./DetallesPersonaje.css"; // Asegúrate de que la extensión sea correcta

const DetallesPersonaje = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);
  const navigate = useNavigate(); // Hook para la navegación

  useEffect(() => {
    const getCharacterDetail = async () => {
      const response = await fetchSingleCharacter(id);
      setCharacter(response);
      console.log(response);
    };
    getCharacterDetail();
  }, [id]);

  if (!character) return <div>Cargando...</div>;

  return (
    <div>
      <div className="back-button-container">
        <button onClick={() => navigate(-1)} className="back-button">
          ←
        </button>
      </div>

      <div className="character-detail-container">
        <div>
          <h2>{character.name}</h2>
          <img
            src={character.image}
            alt={character.name}
            className="character-detail-image"
          />
        </div>
        <div>
          <p>
            <strong>Estado:</strong> {character.status}
          </p>
          <p>
            <strong>Especie:</strong> {character.species}
          </p>
          <p>
            <strong>Género:</strong> {character.gender}
          </p>
          <p>
            <strong>Origen:</strong> {character.origin.name}
          </p>
          <p>
            <strong>Ubicación actual:</strong> {character.location.name}
          </p>
          <p>
            <strong>Episodios:</strong> {character.episode.length}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DetallesPersonaje;
