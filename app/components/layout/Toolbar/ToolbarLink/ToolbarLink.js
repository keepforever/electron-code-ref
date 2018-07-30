import React from 'react';
import { Link } from 'react-router-dom';
import classes from './ToolbarLink.css'

const ToolbarLink = ( props ) => {
  console.log('props', props)
  const { config: { route, display } } = props
  console.log('route', route)
  console.log('display', display)
  return (
    <Link className={classes.Link} to={route}>{display}</Link>
  )
};

export default ToolbarLink;

//to="/counter
