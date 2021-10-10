import React from "react";
import { NavLink } from "react-router-dom";
import meme from "../../img/meme.jpg";

export default function CountryCard({ flag, name, id, continent, population }) {
    return (
        <div>
            <img src={flag} alt={meme} />
            <div>
            <NavLink to={`/countries/${id}`}>{name}</NavLink>
            <p>Continent: {continent}</p>
            <p>Population: {population}</p>
            </div>
        </div>
    )
}