import React from "react";
import classes from "./Toolbar.css";
import NavigationItems from "../NavigationItems/NavigationItems";
import ToolbarLink from "./ToolbarLink/ToolbarLink";

const toolbar = props => (
  <header className={classes.Toolbar}>
    <div className={classes.NavContainer}>
      {links.map((link, index) => {
        return <ToolbarLink key={index} config={link} />;
      })}
    </div>
  </header>
);

export default toolbar;


const links = [
  {
    name: "logo-home",
    route: "/",
    display: "KeepForever"
  },
  {
    name: "add-snippit-page",
    route: "/snippit",
    display: "Add Snippit"
  },
  {
    name: "counter",
    route: "/counter",
    display: "Counter"
  }
];
