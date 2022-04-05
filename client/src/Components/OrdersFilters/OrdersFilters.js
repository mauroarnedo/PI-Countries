import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getCountries,
  setOrderP,
  setFilterA,
  setOrderA,
  filterCountries,
} from "../../Redux/actions";
import styles from "./OrdersFilters.module.css";

export default function OrdersFilters() {
  const { page, name, orderA, orderP, filterA, activities } = useSelector(
    (state) => state
  );
  const dispatch = useDispatch();

  const handleOrderByName = (e) => {
    dispatch(setOrderA(e.target.value));
    dispatch(
      getCountries({ page, name, orderA: e.target.value, orderP, filterA })
    );
  };

  const handleOrderByPopulation = (e) => {
    dispatch(setOrderP(e.target.value));
    dispatch(
      getCountries({ page, name, filterA, orderA, orderP: e.target.value })
    );
  };

  const filterByContinent = (e) => {
    if (e.target.value !== "filter") {
      dispatch(filterCountries(e.target.value));
    } else {
      dispatch(getCountries({ page, name, orderA, orderP, filterA }));
    }
  };

  const filterByActivities = (e) => {
    dispatch(setFilterA(e.target.value));
    dispatch(
      getCountries({ page, name, orderA, orderP, filterA: e.target.value })
    );
  };

  return (
    <div className={styles.container}>
      <div>
        <select onChange={handleOrderByName}>
          <option value="name" label="Order alphabetic"></option>
          <option value="Asc">A-Z</option>
          <option value="Desc">Z-A</option>
        </select>
      </div>
      <div>
        <select onChange={handleOrderByPopulation}>
          <option value="population" label="Order by population"></option>
          <option value="higher">Higher</option>
          <option value="lower">Lower</option>
        </select>
      </div>
      <div>
        <select onChange={filterByContinent}>
          <option value="filter" label="Filter by continent"></option>
          <option value="Africa" label="Africa"></option>
          <option value="Americas" label="América"></option>
          <option value="Asia" label="Asia"></option>
          <option value="Europe" label="Europa"></option>
          <option value="Oceania" label="Oceanía"></option>
          <option value="Antarctic" label="Antártico"></option>
        </select>
      </div>
      <div>
        <select onChange={filterByActivities}>
          <option key="-1" value="" label="Filter by activity"></option>
          {activities.activities &&
            activities.activities.map((activity, i) => (
              <option
                key={i}
                value={activity.name}
                label={activity.name}
              ></option>
            ))}
        </select>
      </div>
    </div>
  );
}
