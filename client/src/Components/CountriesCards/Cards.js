import React from "react";
import { NavLink } from "react-router-dom";
import styles from './Cards.module.css'
import meme from "../../img/meme.jpg";

export default function CountryCard({ flag, name, id, continent, population }) {
    return (
        <div className={styles.card}>
                <h4>{name}</h4>
                <NavLink to={`/countries/${id}`}><img src={flag} alt={meme} /></NavLink>
                <p>Continent: {continent}</p>
                <p>Population: {population}</p>
        </div>
    )
}