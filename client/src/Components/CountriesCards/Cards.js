import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Cards.module.css";
import countries from "../../img/countries.png";

export default function CountryCard({ flag, name, id, continent, population }) {
  return (
    <div className={styles.card}>
      <h4>{name}</h4>
      <NavLink to={`/countries/${id}`}>
        <img src={flag} alt={countries} />
      </NavLink>
      <p>Continent: {continent}</p>
      <p>Population: {population}</p>
    </div>
  );
}
