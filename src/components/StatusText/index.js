import React from 'react';
import PropTypes from 'prop-types';
// import './StatusText.css'

export default class StatusText extends React.Component {
  static propTypes = {
    children: PropTypes.any.isRequired,
    statusType: PropTypes.oneOf(['success', 'warning', 'error']).isRequired,
    withDot: PropTypes.bool,
  };

  static defaultProps = {
    children: null,
    withDot: true,
  };

  _getColor = () => {
    switch (this.props.statusType) {
      case 'success':
        return '#31826C';
      case 'warning':
        return '#FFCC4C';
      case 'error':
        return '#E90C0C';
      default:
        return '#4AC09D';
    }
  };

  _renderDot = () => (
    <div
      className="br-100 mr2"
      style={{backgroundColor: this._getColor(), height: 12, width: 12}}
    />
  );

  render() {
    const {children, withDot} = this.props;
    return (
      <div className="StatusText flex items-center f4">
        {withDot && this._renderDot()}
        <div style={{color: this._getColor()}}>{children}</div>
      </div>
    );
  }
}
