import React from 'react';
import PropTypes from 'prop-types';
import './Dropdown.css';

export default class Dropdown extends React.Component {
  static propTypes = {
    dropdownWidth: PropTypes.number,
    items: PropTypes.arrayOf(PropTypes.string),
    showOnHover: PropTypes.bool,
    showOnClick: PropTypes.bool,
  };

  static defaultProps = {
    dropdownWidth: 150,
    items: [],
    showOnHover: true,
    showOnClick: false,
  };

  state = {show: false};

  _handleClick = () => {
    if (!this.props.showOnClick) {
      return;
    }
    this.setState({show: !this.state.show});
  };

  _handleHover = show => {
    if (!this.props.showOnHover) {
      return;
    }
    this.setState({show});
  };

  _renderDropdown = () => {
    const {dropdownWidth} = this.props;
    const parent = this.dropdownWrapper.getBoundingClientRect();
    const left = parent.width / 2 - dropdownWidth / 2;
    const items = this.props.items.map((item, i) => (
      <div className="Dropdown-item mv2 di w-100" key={`${item}-${i}`}>
        {item}
      </div>
    ));
    return (
      <div
        className="Dropdown-box absolute glow ph3 mt2 flex flex-column mr1 z1 bg-white near-black"
        style={{left, width: dropdownWidth}}
      >
        {items}
      </div>
    );
  };

  render() {
    const {children} = this.props;
    const {show} = this.state;
    return (
      <div
        className="Dropdown relative pointer link blue hover-dark-blue"
        ref={el => (this.dropdownWrapper = el)}
        onClick={this._handleClick}
        onMouseEnter={() => this._handleHover(true)}
        onMouseLeave={() => this._handleHover(false)}
      >
        {children}
        {show && this._renderDropdown()}
      </div>
    );
  }
}
