// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './home.css';

type Props = {};

export default class NewHome extends Component<Props> {
  props: Props;

  render() {

    return (
      <div>
        <div className={styles.container} data-tid="container">
          <h2>New Home</h2>
          {Languages.vals.map((lang, index) => {
            return (
              <div className={styles.languages} key={index}>
                <h3>{lang}</h3>
              </div>
            )
          })}
        </div>
        <Link to="/counter">Counter</Link>
      </div>
    );
  }
}

const Languages = {
  title: 'Languages',
  vals: ['python', 'javascript', 'c++'],
}
const Frameworks = {
  title: 'Frameworks',
  vals: ['React', 'Angular', 'Flask']
}
const Tasks = {
  title: 'Tasks',
  vals: ['Text Input', 'Machiene Learning']
}
