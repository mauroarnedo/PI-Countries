import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./LandingPage.module.css";

export default function LandingPage() {
  return (
    <div className={styles.landing}>
      <NavLink to="/home">
        <button className={styles.logo}>Welcome to dCountries!</button>
      </NavLink>
    </div>
  );
}
