import React from 'react';
import PropTypes from 'prop-types';
import './Banner.css';

export default class Banner extends React.Component {
  static propTypes = {children: PropTypes.any};

  static defaultProps = {children: null};

  state = {
    show: true,
  };

  _hideBanner = () => {
    this.setState({show: false});
  };

  render() {
    const {children} = this.props;
    const {show} = this.state;
    return (
      <div
        className="Banner flex justify-center items-center bg-yellow dark-gray fw5 relative"
        style={show ? {height: 85} : {height: 0}}
      >
        {children}
        <button
          className="absolute right-0 mr3 bn bg-transparent pointer f4"
          onClick={this._hideBanner}
        >
          ×
        </button>
      </div>
    );
  }
}
