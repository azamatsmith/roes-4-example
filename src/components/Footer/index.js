import React from 'react';
import sealImage from './va-seal.svg';
import './Footer.css';

export default class Footer extends React.Component {
  render() {
    return (
      <div className="Footer flex items-center justify-center near-black bg-white pv4 w-100">
        <img alt="VA seal" src={sealImage} style={{height: 80, width: 80}} />
        <div className="ml3">
          <div className="mv1 f4 fw6">U.S. Department of Veterans Affairs</div>
          <div className="mv1 f4 fw6">Denver Logistics Center</div>
        </div>
      </div>
    );
  }
}
