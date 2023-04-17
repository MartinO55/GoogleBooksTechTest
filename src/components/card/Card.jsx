import React from "react";
import styles from "./Card.module.scss";

const Card = ({ title, author, description, image }) => {
  return (
    <>
      {
        <div className={styles.Card}>
          <div className={styles.Card_TitleElement}>
            <div className={styles.Card_TitleElement_Byline}>
              <h3>{title}</h3>
              <p>{author}</p>
            </div>
            <img src={image} />
          </div>
          <p>{description}</p>
        </div>
      }
    </>
  );
};

export default Card;
