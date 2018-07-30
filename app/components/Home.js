// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.css';

type Props = {};

export default class Home extends Component<Props> {
  props: Props;

  render() {

    return (
      <div>
        <div className={styles.container} data-tid="container">
          <h2>Home</h2>
          <Link to="/counter">Counter</Link>
          {Languages.vals.map((lang, index) => {
            return (
              <div className={styles.languages} key={index}>
                <h3>{lang}</h3>
              </div>
            )
          })}
        </div>
      </div>
    );
  }
}


const dummyData = [
  Languages: {
    title: 'Languages',
    vals: ['python', 'javascript', 'c++'],
  },
  Frameworks: {
    title: 'Frameworks',
    vals: ['React', 'Angular', 'Flask']
  },
  Tasks: {
    title: 'Tasks',
    vals: ['Text Input', 'Machiene Learning']
  }
]
