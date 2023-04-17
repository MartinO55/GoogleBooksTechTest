import React from "react";
import styles from "./FontWrapper.module.scss";

const FontWrapper = ({ children }) => {
  return <div className={styles.FontWrap}>{children}</div>;
};

export default FontWrapper;
