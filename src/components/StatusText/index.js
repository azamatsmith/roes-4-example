import React from 'react';
import PropTypes from 'prop-types';

export default class StatusText extends React.Component {
  static propTypes = {
    children: PropTypes.any.isRequired,
    statusType: PropTypes.oneOf(['success', 'warning', 'error']).isRequired,
  };

  static defaultProps = {
    children: null,
  };

  _getColor = () => {
    switch (this.props.statusType) {
      case 'success':
        return '#4AC09D';
      case 'warning':
        return '#FFCC4C';
      case 'error':
        return '#F33131';
      default:
        return '#4AC09D';
    }
  };

  render() {
    const {children} = this.props;
    return (
      <div
        className="StatusText inline-flex tc white pa1 br2 f6"
        style={{backgroundColor: this._getColor()}}
      >
        {children}
      </div>
    );
  }
}
