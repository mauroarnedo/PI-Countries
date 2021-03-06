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
  }, [dispatch]);

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
    <div className={styles.container}>
      <NavLink to="/home">
        <button onClick={home} className={styles.link}>
          Home
        </button>
      </NavLink>
      <OrdersFilters />
      <Search />
      <NavLink to="/createActivity">
        <button class={styles.link}>Create an activity!</button>
      </NavLink>
    </div>
  );
}
