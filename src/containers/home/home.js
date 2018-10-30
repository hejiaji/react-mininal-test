import React, { Component } from 'react';
import home from './home.css';

class Home extends Component {
  render() {
    return (
      <div className={home.App}>
        <p className={home.AppIntro}>
          Hey What's up?
        </p>
      </div>
    );
  }
}

export default Home;
