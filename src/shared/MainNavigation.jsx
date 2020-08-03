import React, { useState } from "react";
import "../style/MainNavigation.css";
import { MainHeader } from "./MainHeader";
import { Link, NavLink } from "react-router-dom";
import { MainNavLinks } from "./MainNavLinks";
import { MainSideDrawer } from "./MainSideDrawer";
import Backdrop from "./Backdrop";

export const MainNavigation = () => {
  const [drawerOn, setDrawerOn] = useState(false);
  return (
    <React.Fragment>
      {drawerOn && <Backdrop onClick={() => setDrawerOn(false)} />}
      <MainSideDrawer show={drawerOn} onClick={() => setDrawerOn(false)}>
        <nav className="main-navigation__drawer-nav">
          <MainNavLinks />
        </nav>
      </MainSideDrawer>
      <MainHeader>
        <button
          className="main-navigation__menu-btn"
          onClick={() => setDrawerOn(true)}
        >
          <span />
          <span />
          <span />
        </button>
        <h1 className="main-navigation__title">
          <Link to="/">YourPlaces</Link>
        </h1>
        <nav className="main-navigation__header-nav">
          <MainNavLinks />
        </nav>
      </MainHeader>
    </React.Fragment>
  );
};
