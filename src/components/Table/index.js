import React from 'react';
import './Table.css';

export const Table = ({children, className}) => (
  <table className={`Table flex-1 near-black ${className}`}>{children}</table>
);

export const Tr = ({children}) => <tr className="Tr flex-1">{children}</tr>;

export const Td = ({children}) => <td className="pa3">{children}</td>;

export const Th = ({children}) => (
  <th className="flex-1 tl ttu fw4 pa3">{children}</th>
);
