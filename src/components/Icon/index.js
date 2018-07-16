import React from 'react';
import PropTypes from 'prop-types';
import * as Icons from './icons';

export default class Icon extends React.Component {
  static propTypes = {
    name: PropTypes.oneOf(['va', 'roes']).isRequired,
  };

  static defaultProps = {};

  render() {
    const {name, ...rest} = this.props;
    const IconComponent = Icons[name];
    return <IconComponent {...rest} />;
  }
}
