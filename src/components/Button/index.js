import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

export default class Button extends React.Component {
  static propTypes = {
    theme: PropTypes.oneOf(['primary', 'secondary']),
  };

  static defaultProps = {
    theme: 'primary',
  };

  _getStyle = theme => {
    switch (theme) {
      case 'primary':
        return 'ba b--transparent bg-blue white hover-bg-dark-blue';
      case 'secondary':
        return 'b--blue blue hover-white hover-bg-blue';
      case 'success':
        return 'ba b--transparent bg-green white hover-bg-dark-green';
      case 'danger':
        return 'ba b--transparent bg-red white  hover-bg-dark-red';
      default:
        return 'bn bg-blue white hover-bg-dark-blue';
    }
  };

  render() {
    const {children, theme, ...rest} = this.props;
    return (
      <button
        className={`Button ttu no-underline translate-y-2 pointer br1 avenir ${this._getStyle(
          theme
        )}`}
        {...rest}
      >
        {children}
      </button>
    );
  }
}
