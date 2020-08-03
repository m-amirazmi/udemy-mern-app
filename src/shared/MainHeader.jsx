import React from "react";
import "../style/MainHeader.css";

export const MainHeader = (props) => {
  return <header className="main-header">{props.children}</header>;
};
