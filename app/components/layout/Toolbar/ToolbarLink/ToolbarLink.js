import React from "react";
import { Link } from "react-router-dom";
import classes from "./ToolbarLink.css";
import { clearLog } from "../../../../utils/briansHelpers";

const ToolbarLink = props => {
  const {  config: { route, display }  } = props;
  //clearLog('TOOLBAR_LINK route', route)
  return (
    <Link className={classes.Link} to={route}>
      {display}
    </Link>
  );
};

export default ToolbarLink;

//to="/counter
