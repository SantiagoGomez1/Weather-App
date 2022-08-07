import React, { useState } from "react";
import Nav from "../Nav/Nav.jsx";
import Styles from "./Main.module.css";
import Cards from "../Cards/Cards.jsx";

const Main = () => {
  const [cities, setCities] = useState([]);

  const ApiKey = "f46ce4fd33864f05ad510208220708";

  function onSearch(cities) {
    fetch(
      `https://api.weatherapi.com/v1/current.json?key=${ApiKey}&q=${cities}&aqi=no`
    )
      .then((response) => response.json())
      .then((recurso) => {
        if (!recurso.error) {
          const cities = {
            humidity: recurso.current.humidity,
            max: recurso.current.temp_c,
            img: recurso.current.condition.icon,
            id: recurso.location.tz_id,
            wind: recurso.current.wind_kph,
            temp: recurso.current.temp_c,
            country: recurso.location.country,
            name: recurso.location.name,
            clouds: recurso.current.cloud,
            latitud: recurso.location.lat,
            longitud: recurso.location.lon,
          };
          setCities((oldCities) => [...oldCities, cities]);
        } else {
          alert("Ciudad no encontrada");
        }
      });
  }

  function onClose(id) {
    setCities((oldCities) => oldCities.filter((c) => c.id !== id));
  }

  return (
    <div>
      <Nav onSearch={onSearch} />
      <Cards cities={cities} onClose={onClose} />
    </div>
  );
};

export default Main;
