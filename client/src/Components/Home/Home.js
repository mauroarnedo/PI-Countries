import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getActivities,
  getCountries,
  setPage,
} from "../../Redux/actions/index.js";
import CountryCard from "../CountriesCards/Cards.js";
import styles from "./Home.module.css";

export default function Home() {
  const dispatch = useDispatch();
  const { countries, name, orderA, orderP, filterA, page } = useSelector(
    (state) => state
  );

  useEffect(() => {
    dispatch(getCountries({ name, orderA, orderP, filterA, page }));
    dispatch(getActivities({}));
  }, [ dispatch, filterA, name, orderA, orderP, page ]);

  const changePage = (page) => {
    dispatch(getCountries({ page, orderA, orderP, filterA, name }));
    dispatch(setPage(page));
  };

  return (
    <div className={styles.container}>
      <h1>Let's learn a bit about each country!</h1>
      <div>
        <button
          className={styles.navigationBtn}
          disabled={page - 1 === 0}
          onClick={() => {
            changePage(page - 1);
          }}
        >
          prev
        </button>
        <button
          className={styles.navigationBtn}
          disabled={countries?.count <= page * 10}
          onClick={() => {
            changePage(page + 1);
          }}
        >
          next
        </button>
      </div>
      <div className={styles.countries}>
        {countries?.result?.length > 0 &&
          countries.result.map((c) => {
            return (
              <CountryCard
                flag={c.flag}
                name={c.name}
                continent={c.continent}
                population={c.population}
                id={c.id}
                key={c.id}
              />
            );
          })}
      </div>
    </div>
  );
}
