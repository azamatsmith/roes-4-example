import React from 'react';
import PropTypes from 'prop-types';

export default class Profile extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    textColor: PropTypes.string,
  };

  static defaultProps = {
    textColor: 'white',
  };

  render() {
    const {name, src, textColor} = this.props;
    return (
      <div className="Profile flex items-center">
        <img
          alt={`${name} profile`}
          className="br-100"
          src={src}
          style={{height: 38, width: 38}}
        />
        <span className={`${textColor} ml2`}>{name}</span>
      </div>
    );
  }
}
