import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  getActivities,
  getCountryDetails,
  removeCountry,
  setPage,
} from "../../Redux/actions/index.js";
import ActivityCard from "../Activity/ActivityCard";
import styles from "./CountryDetails.module.css";
import countries from "../../img/countries.png";

export default function CountryDetails(props) {
  const { id } = props.match.params;
  const { country } = useSelector((state) => state);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(getCountryDetails(id));
    dispatch(getActivities({}));
    return () => {
      dispatch(removeCountry());
    };
  }, [ dispatch, id ]);

  function goBack() {
    history.goBack();
    dispatch(setPage(1));
  }

  return (
    <div className={styles.wrapper}>
      <button className={styles.link} onClick={goBack}>
        «
      </button>
      <div className={styles.box}>
        {country?.name ? (
          <React.Fragment>
            <div className={styles.container}>
              <h4>{country.name}</h4>
              <img src={country.flag} alt={countries} />
              <div>
                <p>
                  <strong>Código de país: {country.id}</strong>
                </p>
                <p>Capital: {country.capital}</p>
                <p>Continent: {country.continent}</p>
                <p>Subregión: {country.subregion}</p>
                <p>Area: {country.area}</p>
                <p>Population: {country.population}</p>
              </div>
            </div>

            <div className={styles.container}>
              <h3>Tourist activities</h3>
              {country.activities.length > 0
                ? country.activities.map((activity) => {
                  return (
                    <ActivityCard
                      key={activity.id}
                      name={activity.name}
                      difficulty={activity.difficulty}
                      duration={activity.duration}
                      season={activity.season.join(", ").trim()}
                    />
                  );
                })
                : <p className={styles.textNull}><strong>No Activities found</strong></p>}
            </div>
          </React.Fragment>
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </div>
  );
}
