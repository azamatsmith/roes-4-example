import React from 'react';
import PropTypes from 'prop-types';
import {Tooltip} from 'react-tippy';
import 'react-tippy/dist/tippy.css';
import './Tooltip.css';

export default class Tip extends React.Component {
  static propTypes = {
    children: PropTypes.any,
    title: PropTypes.string.isRequired,
    position: PropTypes.oneOf(['top', 'bottom', 'left', 'right']),
    trigger: PropTypes.oneOf(['mouseenter', 'focus', 'click']),
  };

  static defaultProps = {
    children: null,
    position: 'top',
    trigger: 'mouseenter',
  };

  render() {
    const {children, position, title, trigger, ...rest} = this.props;
    return (
      <Tooltip
        title={title}
        position={position}
        trigger={trigger}
        style={{fontFamily: 'avenir'}}
        {...rest}
      >
        {children}
      </Tooltip>
    );
  }
}
