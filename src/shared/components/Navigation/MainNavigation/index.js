import React, { useState } from "react";
import { Link } from "react-router-dom";

import MainHeader from "../MainHeader";
import NavLinks from "../NavLinks";
import SideDrawer from "../SideDrawer";
import Backdrop from "../../UIElements/Backdrop";

import styles from "./index.module.css";
const MainNavigation = (props) => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  const openDrawerHandler = () => {
    setDrawerIsOpen(true);
  };

  const closeDrawerHandler = () => {
    setDrawerIsOpen(false);
  };
  return (
    <>
      {drawerIsOpen && <Backdrop onClick={closeDrawerHandler} />}
      <SideDrawer show={drawerIsOpen} onClick={closeDrawerHandler}>
        <nav className={styles["main-navigation__drawer-nav"]}>
          <NavLinks />
        </nav>
      </SideDrawer>
      <MainHeader>
        <button
          className={styles["main-navigation__menu-btn"]}
          onClick={openDrawerHandler}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <h1 className={styles["main-navigation__title"]}>
          <Link to="/">Your places</Link>
        </h1>
        <nav className={styles["main-navigation__header-nav"]}>
          <NavLinks />
        </nav>
      </MainHeader>
    </>
  );
};

export default MainNavigation;
