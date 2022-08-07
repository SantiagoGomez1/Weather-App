import React, { useState } from "react";
import Nav from "../Nav/Nav.jsx";
import Styles from "./Main.module.css";
import Cards from "../Cards/Cards.jsx";

const Main = () => {
  const [cities, setCities] = useState([]);

  const ApiKey = "3ef2c9a85cf6b1f23cc5cd5569ae03b1";

  function onSearch(cities) {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${cities}&appid=${ApiKey}&units=metric`
    )
      .then((response) => response.json())
      .then((recurso) => {
        if (recurso.main !== undefined) {
          const cities = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon,
          };
          setCities((oldCities) => [...oldCities, cities]);
        } else {
          alert("Ciudad no encontrada");
        }
      });
  }

  function onClose(id) {
    setCities(oldCities => oldCities.filter(c => c.id !== id));
  }

  return (
    <div>
      <Nav onSearch={onSearch} />
      <Cards cities={cities} onClose={onClose} />
    </div>
  );
};

export default Main;
