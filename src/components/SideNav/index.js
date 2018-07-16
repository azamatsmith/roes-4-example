import React from 'react';
import PropTypes from 'prop-types';
import SideNavItem from '../SideNavItem';
import './SideNav.css';

export default class SideNav extends React.Component {
  static propTypes = {};

  static defaultProps = {};

  render() {
    return (
      <div className="SideNav w-25 flex flex-column">
        <ul className="list pl0">
          <SideNavItem text="Order History" active />
          <SideNavItem text="Other Commodities" />
          <SideNavItem text="Device Registration" />
          <SideNavItem text="Record Updates" />
        </ul>
        <div style={{backgroundColor: '#E2E2E2', height: 1}} />
        <ul className="list pl0">
          <SideNavItem text="Station Parameters" />
          <SideNavItem text="Tools" />
          <SideNavItem text="Pending Actions" />
          <SideNavItem text="Authorized Aids" />
          <SideNavItem text="Audiogram Search" />
        </ul>
        <div className="flex-1 flex flex-column justify-end">
          <SideNavItem text="Exit" />
        </div>
      </div>
    );
  }
}
