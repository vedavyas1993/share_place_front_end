import React from "react";
import styles from "./index.module.css";
const MainHeader = (props) => {
  return <header className={styles["main-header"]}>{props.children}</header>;
};

export default MainHeader;
