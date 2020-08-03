import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../context/auth-context";
import "../style/MainNavLinks.css";

export const MainNavLinks = (props) => {
  const auth = useContext(AuthContext);
  return (
    <ul className="nav-links">
      <li>
        <NavLink to="/" exact>
          ALL USERS
        </NavLink>
      </li>
      {auth.loggedIn ? (
        <li>
          <NavLink to="/u1/places">MY PLACES</NavLink>
        </li>
      ) : null}
      {auth.loggedIn ? (
        <li>
          <NavLink to="/places/new">ADD PLACE</NavLink>
        </li>
      ) : null}
      {!auth.loggedIn ? (
        <li>
          <NavLink to="/auth">AUTHENTICATE</NavLink>
        </li>
      ) : null}
      {auth.loggedIn ? (
        <li>
          <button onClick={auth.logout}>LOGOUT</button>
        </li>
      ) : null}
    </ul>
  );
};
