import React from 'react';
import {Dropdown, Link, Select, StatusText} from 'components';
import {Table, Tr, Td, Th} from 'components/Table';
import SelectedPatient from './components/SelectedPatient';
import data from './data';
import './OrderHistory.css';

export default class OrderHistory extends React.Component {
  _renderItems = arr =>
    arr.length === 1 ? (
      arr[0].name || 'N/A'
    ) : (
      <div>
        {arr[0].name}{' '}
        <Dropdown items={arr.map(e => e.name)}>
          + {arr.length - 1} more
        </Dropdown>
      </div>
    );

  _renderSn = arr => {
    const serialNumbers = arr.map(e => e.serialNumber || null).filter(e => e);
    return !serialNumbers.length ? (
      'N/A'
    ) : (
      <div>
        {arr[0].serialNumber}{' '}
        <Dropdown items={arr.map(e => e.serialNumber)}>
          + {arr.length - 1} more
        </Dropdown>
      </div>
    );
  };

  _renderStatus = status => {
    const warningRe = /pend/i;
    const statusType = warningRe.test(status) ? 'warning' : 'success';
    return <StatusText statusType={statusType}>{status}</StatusText>;
  };

  _renderTableRows = () =>
    data.map(order => (
      <Tr key={order.orderNumber}>
        <Td>
          <Link href="#">{order.date}</Link>
        </Td>
        <Td>{order.orderNumber}</Td>
        <Td>{order.orderType}</Td>
        <Td>{this._renderItems(order.items)}</Td>
        <Td>{order.orderedBy}</Td>
        <Td>{this._renderSn(order.items)}</Td>
        <Td>{this._renderStatus(order.orderStatus)}</Td>
      </Tr>
    ));

  render() {
    return (
      <div className="OrderHistory w-100 flex flex-column pa4 bg-light-gray pb6">
        <div className="flex mb4 justify-between items-center">
          <SelectedPatient
            name="Zuret, Susan"
            dob="03/04/1965"
            ssn="143-45-3534"
          />
          <Select
            label="Ordering Station"
            id="ordering-station"
            style={{width: 220}}
          >
            <option>791 - Denver</option>
            <option>790 - Lakewood</option>
            <option>789 - Boulder</option>
            <option>788 - Ft. Collins</option>
          </Select>
        </div>
        <Table className="f6 br1">
          <thead>
            <Tr>
              <Th>Date</Th>
              <Th>Order Number</Th>
              <Th>Order Type</Th>
              <Th>Order Item</Th>
              <Th>By</Th>
              <Th>Serial Number</Th>
              <Th>Status</Th>
            </Tr>
          </thead>
          <tbody>{this._renderTableRows()}</tbody>
        </Table>
      </div>
    );
  }
}
