import React, { useEffect, useState } from "react";
import { fetchLocations } from "../../services/api";

import "./Locaciones.css";
const Locaciones = () => {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    const getLocations = async () => {
      const data = await fetchLocations();
      setLocations(data);
    };
    getLocations();
  }, []);

  return (
    <div className="locations-container">
      <h1 className="locations-title">Locations</h1>
      <div className="locations-grid">
        {locations.map((location) => (
          <div key={location.id} className="location-card">
            <h3 className="location-name">{location.name}</h3>
            <p>
              <strong>Tipo:</strong> {location.type}
            </p>
            <p>
              <strong>Dimensión:</strong> {location.dimension}
            </p>
            <p>
              <strong>Residentes:</strong> {location.residents.length}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Locaciones;
