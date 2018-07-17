import React from 'react';
import PropTypes from 'prop-types';
// import './SideNavItem.css';

export default class SideNavItem extends React.Component {
  static propTypes = {
    active: PropTypes.bool,
    text: PropTypes.string.isRequired,
  };

  static defaultProps = {
    active: false,
  };

  render() {
    const {active, text} = this.props;
    const borderStyle = `bl bw2 b--${active ? 'blue' : 'transparent'}`;
    const activeStyle = 'blue';
    const normalStyle = 'near-black hover-blue';
    return (
      <li className={`SideNavItem flex pv2 mv3 w-100 ${borderStyle}`}>
        <a
          className={`no-underline link ${active ? activeStyle : normalStyle}`}
          href="#"
          style={{marginLeft: 28}}
        >
          {text}
        </a>
      </li>
    );
  }
}
