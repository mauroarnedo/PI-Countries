import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getCountries, createActivity } from "../../Redux/actions/index.js";
import styles from "./styles.module.css";

function validate(input) {
  const errors = {};
  if (!input.name || input.name === "") errors.name = "Se requiere un nombre";
  if (!input.difficulty || input.difficulty === "" || isNaN(input.difficulty))
    errors.difficulty = "Se requiere un nivel de dificultad entre 1 y 5";
  if (!input.duration || input.duration > 24 || input.duration < 1)
    errors.duration = "Se requiere duración de actividad entre 1 y 24 horas";
  if (!input.season.length)
    errors.season = "Se requiere al menos una temporada";
  if (!input.countries.length)
    errors.countries = "Se requiere al menos un país";

  return errors;
}

export default function PostActivity() {
  const dispatch = useDispatch();
  const { countries } = useSelector((state) => state);
  const [input, setInput] = useState({
    name: "",
    difficulty: "",
    duration: "",
    season: [],
    countries: [],
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    dispatch(getCountries({}));
  }, [dispatch]);

  const handleInputChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  };

  const handleSeasonSelection = (e) => {
    if (input.season.includes(e.target.value)) {
      let seasonSelected = input.season.filter((s) => s !== e.target.value);
      setInput({
        ...input,
        season: seasonSelected,
      });
    } else {
      setInput({
        ...input,
        season: [...input.season, e.target.value],
      });
    }
  };

  const handleCountriesSelection = (e) => {
    if (input.countries.includes(e.target.value)) {
      let countriesSelected = input.countries.filter(
        (c) => c !== e.target.value
      );
      setInput({
        ...input,
        countries: countriesSelected,
      });
    } else {
      setInput({
        ...input,
        countries: [...input.countries, e.target.value],
      });
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(createActivity(input));
    setInput({
      name: "",
      difficulty: "",
      duration: "",
      season: [],
      countries: [],
    });
    alert("You create an activity successfully");
  };

  return (
    <div className={styles.wrapper}>
      <NavLink to="/home" >
        <button className={styles.link}>Home</button>
      </NavLink>

      <form className={styles.form} onSubmit={onSubmit} autoComplete="off" >
        <div className={styles.elements}>
          <input
            className={styles.select}
            value={input.name}
            onChange={handleInputChange}
            name="name"
            type="text"
            placeholder="Name"
          ></input>
          {errors.name && <p>{errors.name}</p>}
        </div>

        <div>
          <select
            className={styles.selectDifficulty}
            onChange={handleInputChange}
            name="difficulty"
          >
            <option value="">Difficulty</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          {errors.difficulty && <p>{errors.difficulty}</p>}
        </div>

        <div>
          <input
            className={styles.select}
            value={input.duration}
            onChange={handleInputChange}
            name="duration"
            type="number"
            placeholder="Duration (hours)"
          ></input>
          {errors.duration && <p>{errors.duration}</p>}
        </div>

        <div>
          <select
            className={styles.selectSeason}
            onChange={handleSeasonSelection}
            name="season"
          >
            <option id="" value="">
              Season/s
            </option>
            <option id="summer" value="summer">
              Summer
            </option>
            <option id="autumn" value="autumn">
              Autumn
            </option>
            <option id="winter" value="winter">
              Winter
            </option>
            <option id="spring" value="spring">
              Spring
            </option>
          </select>
          {errors.season && <p>{errors.season}</p>}
          {input.season.length > 0 &&
            input.season.map((s) => <div key={s}>{s}</div>)}
        </div>

        <div>
          <select
            className={styles.selectCountry}
            onChange={handleCountriesSelection}
            name="country"
          >
            <option value="" key="">
              Country/ies
            </option>
            {countries.all &&
              countries.all.map((c) => {
                return (
                  <option value={c.id} key={c.id}>
                    {c.name}, {c.id}
                  </option>
                );
              })}
          </select>
          {errors.countries && <p>{errors.countries}</p>}
          {input.countries.length > 0 &&
            input.countries.map((c) => <div key={c}>{c}</div>)}
        </div>
        <input
          className={styles.btnCrear}
          disabled={Object.values(errors).length > 0}
          type="submit"
          value="create"
        />
      </form>
    </div>
  );
}
