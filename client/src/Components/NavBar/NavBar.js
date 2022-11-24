import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import Search from "../Search/Search.js";
import OrdersFilters from "../OrdersFilters/OrdersFilters.js";
import { useDispatch } from "react-redux";
import {
  getCountries,
  setName,
  setPage,
  setFilterA,
  setOrderA,
  setOrderP,
} from "../../Redux/actions/index.js";
import styles from "./NavBar.module.css";

export default function NavBar() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountries({}));
  }, [ dispatch ]);

  const home = (e) => {
    e.preventDefault();
    dispatch(
      getCountries({ page: 1, name: "", filterA: "", orderA: "", orderP: "" })
    );
    dispatch(setName(""));
    dispatch(setPage(1));
    dispatch(setFilterA(""));
    dispatch(setOrderA(""));
    dispatch(setOrderP(""));
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div>
          <NavLink to="/home">
            <button onClick={home} className={styles.link}>
              Home
            </button>
          </NavLink>
        </div>
        <OrdersFilters />
        <div>
          <NavLink to="/createActivity">
            <button className={styles.link}>Create an activity!</button>
          </NavLink>
        </div>
      </div>
      <div className={styles.search}>
        <div></div>
        <Search />
        <div></div>
      </div>
    </div>
  );
}
