import React from 'react';
import StrangeThing from '../../assets/strange.png';

class Gallery extends React.Component {
  render() {
    return (
      <div>
        <img src={StrangeThing} alt="image" />
      </div>
    )
  }
}

export { Gallery };