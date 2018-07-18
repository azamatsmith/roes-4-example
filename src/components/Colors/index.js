import React from 'react';
import PropTypes from 'prop-types';

const colorList = [
  {color: '#36a5ec', class: '.blue'},
  {color: '#00449E', class: '.dark-blue'},
  {color: '#4a4a4a', class: '.near-black'},
  {color: '#f33131', class: '.red'},
  {color: '#ffcc4c', class: '.yellow'},
  {color: '#4ac09d', class: '.green'},
  {color: '#f6f7f9', class: '.light-gray', text: 'near-black'},
  {color: '#ffffff', class: '.white', text: 'near-black', border: true},
];

export default class Colors extends React.Component {
  static propTypes = {};

  static defaultProps = {};

  _renderColors = () =>
    colorList.map(el => (
      <div
        className={`pa3 flex flex items-center justify-between f5 ${el.text ||
          'white'} ${el.border ? 'ba b--light-gray' : ''}`}
        style={{backgroundColor: el.color, width: 400}}
      >
        <span>{el.color.toUpperCase()}</span>
        <span>{el.class}</span>
      </div>
    ));

  render() {
    return (
      <div className="Colors avenir">
        <h1>Colors</h1>
        {this._renderColors()}
        <h2>Gradients</h2>
        <div className="pa5 bg-blue-gradient white tc">.bg-blue-gradient</div>
      </div>
    );
  }
}
