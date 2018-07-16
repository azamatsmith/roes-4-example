import React from 'react';
import PropTypes from 'prop-types';

export default class Link extends React.Component {
  static propTypes = {
    children: PropTypes.any.isRequired,
    href: PropTypes.string.isRequired,
  };

  static defaultProps = {};

  render() {
    const {children, className, href, ...rest} = this.props;
    return (
      <a
        className={`Link blue no-underline link hover-dark-blue ${className}`}
        href={href}
      >
        {children}
      </a>
    );
  }
}
