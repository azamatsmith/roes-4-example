import React from 'react';
import PropTypes from 'prop-types';
import './Table.css';

export const Table = ({children, className}) => (
  <table className={`Table flex-1 near-black ${className}`}>{children}</table>
);

export const Tr = ({children}) => <tr className="Tr flex-1">{children}</tr>;

export const Td = ({children}) => <td className="pa3">{children}</td>;

export const Th = ({children}) => (
  <th className="flex-1 tl ttu fw4 pa3">{children}</th>
);

Table.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
};

Table.defaultProps = {
  children: null,
  className: '',
};

Tr.propTypes = {
  children: PropTypes.any,
};

Tr.defaultProps = {
  children: null,
};

Th.propTypes = {
  children: PropTypes.any,
};

Th.defaultProps = {
  children: null,
};

Td.propTypes = {
  children: PropTypes.any,
};

Td.defaultProps = {
  children: null,
};
