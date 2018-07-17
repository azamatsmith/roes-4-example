import React from 'react';
import PropTypes from 'prop-types';

export const inputStyles = 'db br1 pa2 ba b---near-black near-black';
export const labelStyles = ' db mb2 near-black ';

export default class Input extends React.Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  };

  static defaultProps = {};

  render() {
    const {id, label, ...rest} = this.props;
    return (
      <div className="Input">
        <label className={labelStyles} htmlFor={id}>
          {label}
        </label>
        <input className={inputStyles} id={id} {...rest} />
      </div>
    );
  }
}
