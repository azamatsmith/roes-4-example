import React from 'react';
import Profile from '../Profile';
import image from '../Profile/paige-marshall.png';
import './Header.css';

export default class Header extends React.Component {
  static propTypes = {};

  static defaultProps = {};

  render() {
    return (
      <header
        className="Header flex items-center justify-between vw-100 ph4 w-100"
        style={{height: 60}}
      >
        <h3 className="white tracked fw5">ROES</h3>
        <Profile name="Dr. Paige Marshall" src={image} />
      </header>
    );
  }
}
