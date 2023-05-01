import React, { useState } from "react";
import styles from "./SearchBar.module.scss";

const SearchBar = ({ value, onSubmit }) => {
  const [internal, setInternal] = useState(value);

  const handleChange = (event) => {
    setInternal(event.target.value);
  };

  const handleSubmit = () => {
    onSubmit(internal);
  };

  return (
    <>
      <div className={styles.SearchBar}>
        <div className={styles.SearchBar_holder}>
          <input
            className={styles.SearchBar_input}
            placeholder="flowers"
            onChange={handleChange}
            value={internal}
          ></input>
          <button onClick={handleSubmit}>Search</button>
        </div>
      </div>
    </>
  );
};

export default SearchBar;
