import React from 'react';
import PropTypes from 'prop-types';
import {inputStyles, labelStyles} from '../Input';
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
      <div className="Select flex flex-column">
        <label className={labelStyles} htmlFor={id}>
          {label}
        </label>
        <div>
          <select className="pa3 ba br0 b--purple bg-white" id={id} {...rest}>
            {children}
          </select>
        </div>
      </div>
    );
  }
}
