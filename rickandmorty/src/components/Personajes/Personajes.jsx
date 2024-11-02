import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addFavorite, removeFavorite } from "../../store/favoritos";
import { fetchCharacters } from "../../services/api";
import "./Personajes.css";

const Personajes = () => {
  const [characters, setCharacters] = useState([]);
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.items);

  useEffect(() => {
    const getCharacters = async () => {
      const data = await fetchCharacters();
      setCharacters(data);
    };
    getCharacters();
  }, []);

  const handleFavoriteToggle = (event, character) => {
    event.stopPropagation(); // Evita la propagación del evento de clic
    event.preventDefault(); // Evita que el clic en el ícono navegue
    const isFavorite = favorites.some((fav) => fav.id === character.id);
    if (isFavorite) {
      dispatch(removeFavorite(character));
    } else {
      dispatch(addFavorite(character));
    }
  };

  return (
    <div className="character-container">
      <h1 className="character-title">Characters</h1>
      <div className="character-grid">
        {characters.map((character) => {
          const isFavorite = favorites.some((fav) => fav.id === character.id);
          return (
            <div key={character.id} className="character-card">
              <Link
                to={`/character/${character.id}`}
                className="character-card-link"
              >
                <img
                  src={character.image}
                  alt={character.name}
                  className="character-image"
                />
                <div className="character-info">
                  <h3>{character.name}</h3>
                  <p>
                    <strong>Status:</strong> {character.status}
                  </p>
                  <p>
                    <strong>Species:</strong> {character.species}
                  </p>
                  <p>
                    <strong>Gender:</strong> {character.gender}
                  </p>
                </div>
              </Link>

              <span
                className="favorite-icon"
                onClick={(event) => handleFavoriteToggle(event, character)}
              >
                {isFavorite ? "❤️" : "🤍"}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Personajes;
