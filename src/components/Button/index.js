import React from 'react';
import PropTypes from 'prop-types';

export default class Button extends React.Component {
  static propTypes = {
    children: PropTypes.any,
  };

  static defaultProps = {
    children: null,
  };

  render() {
    const {children, ...rest} = this.props;
    return (
      <button className="Button" {...rest}>
        {children}
      </button>
    );
  }
}
