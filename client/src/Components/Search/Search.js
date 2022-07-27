import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getCountries, setName, setPage } from "../../Redux/actions";
import styles from "./Search.module.css";

export default function Search() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    e.preventDefault();
    setInput(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(setName(input)); //guardo el name en store
    dispatch(getCountries({ page: 1, name: input }));
    dispatch(setPage(1));
    setInput("");
  };

  return (
    <form className={styles.searchBox} onSubmit={onSubmit}>
      <input
        className={styles.inputSearch}
        type="text"
        placeholder="Search!  (Ex: Argentina, Uruguay..)"
        onChange={handleInputChange}
        value={input}
      />
      <button className={styles.btnSearch} type="submit"></button>
    </form>
  );
}
