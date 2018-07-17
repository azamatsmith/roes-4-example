import React from 'react';
import PropTypes from 'prop-types';

export default class SelectedPatient extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    ssn: PropTypes.string.isRequired,
    dob: PropTypes.string.isRequired,
  };

  static defaultProps = {};

  render() {
    const {dob, name, ssn} = this.props;
    return (
      <div className="SelectedPatient">
        <h2 className="fw5 mt0">{name}</h2>
        <div className="flex">
          <span>SSN: {ssn}</span>
          <span className="ml5">DOB: {dob}</span>
        </div>
      </div>
    );
  }
}
