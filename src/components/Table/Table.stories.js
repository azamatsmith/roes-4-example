import React from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {checkA11y} from '@storybook/addon-a11y';
import {withInfo} from '@storybook/addon-info';
import {Table, Td, Th, Tr} from './';

storiesOf('Table', module)
  .addDecorator(checkA11y)
  .addWithJSX('default', () => (
    <Table className="ma4">
      <thead>
        <Tr>
          <Th>Order Number</Th>
          <Th>By</Th>
          <Th>Item</Th>
        </Tr>
      </thead>
      <tbody>
        <Tr>
          <Td>100</Td>
          <Td>MAB</Td>
          <Td>Blood Pressure Cuff</Td>
        </Tr>
        <Tr>
          <Td>101</Td>
          <Td>MAB</Td>
          <Td>ZA3012</Td>
        </Tr>
        <Tr>
          <Td>102</Td>
          <Td>MAB</Td>
          <Td>Glucose Meter</Td>
        </Tr>
      </tbody>
    </Table>
  ));
