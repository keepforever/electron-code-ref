// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.css';

type Props = {};

export default class Home extends Component<Props> {
  props: Props;

  render() {
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
    return (
      <div>
        <div className={styles.container} data-tid="container">
          <h2>Home</h2>
          <Link to="/counter">Lick my balls</Link>
          {Languages.vals.map((lang, index) => {
            return (
              <div style={{height: 100, width: 100}} key={index}>
                <h3>{lang}</h3>
              </div>
            )
          })}
        </div>
      </div>
    );
  }
}
