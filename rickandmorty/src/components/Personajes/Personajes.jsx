import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addFavorite, removeFavorite } from "../../store/favoritos";
import { fetchCharacters } from "../../services/api";
import Swal from "sweetalert2";
import axios from "axios";
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
    event.stopPropagation();
    event.preventDefault();
    const isFavorite = favorites.some((fav) => fav.id === character.id);
    if (isFavorite) {
      dispatch(removeFavorite(character));
    } else {
      dispatch(addFavorite(character));
    }
  };

  const handleSaveFavorites = async () => {
    try {
      const response = await axios.post("http://localhost:5000/api/favorites", {
        favorites,
      });
      if (response.status === 201) {
        Swal.fire({
          icon: "success",
          title: "¡Guardado exitosamente!",
          text: "Tus favoritos han sido guardados en la base de datos.",
          confirmButtonText: "Aceptar",
        });
      }
    } catch (error) {
      console.error("Error al guardar favoritos:", error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Hubo un problema al guardar tus favoritos.",
        confirmButtonText: "Aceptar",
      });
    }
  };

  return (
    <div className="character-container">
      <h1 className="character-title">Characters</h1>

      {favorites.length > 0 && (
        <div className="save-favorites-container">
          <button onClick={handleSaveFavorites} className="save-button">
            Guardar Favoritos
          </button>
        </div>
      )}

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
