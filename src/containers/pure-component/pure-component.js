import React, { Component } from 'react';

class Home extends React.PureComponent {
  constructor() {
    super();
    this.state = { flag: { haha: false } };
  }

  handleClick = () => {
    this.setState({ flag: { haha: false } });
  };

  render() {
    console.log("render");
    return (
      <div>
        PureComponent
        <button onClick={this.handleClick}>change</button>
      </div>
    );
  }
}

export default Home;
