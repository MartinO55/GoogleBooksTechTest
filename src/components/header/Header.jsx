import React from "react";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <>
      <div className={styles.Header}>
        <h1>Search Google Books!</h1>
      </div>

      <div className={styles.Blurb}>
        <h3>About</h3>
        <p>
          This is a small react page I built to connect to the Google Books API!
          You can use the searchbar input to query the Google books database.
        </p>
      </div>
    </>
  );
};

export default Header;
