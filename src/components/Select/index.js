import React from 'react';
import PropTypes from 'prop-types';
import {labelStyles} from '../Input';
import './Select.css';

export default class Select extends React.Component {
  static propTypes = {
    children: PropTypes.any.isRequired,
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  };

  static defaultProps = {};

  render() {
    const {children, id, label, ...rest} = this.props;
    return (
      <div className="Select flex flex-column near-black">
        <label className={labelStyles} htmlFor={id}>
          {label}
        </label>
        <select
          className="w-100 pv2 pl2 pr3 ba br1 bg-white near-black"
          id={id}
          {...rest}
        >
          {children}
        </select>
      </div>
    );
  }
}
