import React from "react";
import { NavLink } from "react-router-dom";


export default function CountryCard({ flag, name, id, continent }) {
    return (
        <div>
            <img src={flag} alt={name} />
            <NavLink to={`/countrie/${id}`}>{name}</NavLink>
            <p>Continent: {continent}</p>
        </div>
    )
}