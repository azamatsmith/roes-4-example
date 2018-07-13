import React from 'react';
import PropTypes from 'prop-types';

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
        <label className="db mb2 near-black" htmlFor={id}>
          {label}
        </label>
        <input
          className="db br1 pa2 ba b---near-black near-black"
          id={id}
          {...rest}
        />
      </div>
    );
  }
}
