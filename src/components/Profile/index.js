import React from 'react';
import PropTypes from 'prop-types';

export default class Profile extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
  };

  static defaultProps = {};

  render() {
    const {name, src} = this.props;
    return (
      <div className="Profile flex items-center">
        <img className="br-100" src={src} />
        <span className="white ml2">{name}</span>
      </div>
    );
  }
}
