// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import classes from './addSnippit.css';

export default class AddSnippitPage extends Component {

  render() {

    return (
      <div className={classes.SomeStyle}>
        <h1>Hello Add Snippit</h1>
      </div>

    );
  }
}

// const {
//   increment,
//   incrementIfOdd,
//   incrementAsync,
//   decrement,
//   counter
// } = this.props;

//
// <div>
//   <div className={styles.backButton} data-tid="backButton">
//     <Link to="/">
//       <i className="fa fa-arrow-left fa-3x" />
//     </Link>
//   </div>
//   <div className={`counter ${styles.counter}`} data-tid="counter">
//     {counter}
//   </div>
//   <div className={styles.btnGroup}>
//     <button className={styles.btn} onClick={increment} data-tclass="btn">
//       <i className="fa fa-plus" />
//     </button>
//     <button className={styles.btn} onClick={decrement} data-tclass="btn">
//       <i className="fa fa-minus" />
//     </button>
//     <button
//       className={styles.btn}
//       onClick={incrementIfOdd}
//       data-tclass="btn"
//     >
//       odd
//     </button>
//     <button
//       className={styles.btn}
//       onClick={() => incrementAsync()}
//       data-tclass="btn"
//     >
//       async
//     </button>
//   </div>
// </div>