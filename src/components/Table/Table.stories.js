import React from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {checkA11y} from '@storybook/addon-a11y';
import {withInfo} from '@storybook/addon-info';
import {Table, Td, Th, Tr} from './';

storiesOf('Table', module)
  .addDecorator(checkA11y)
  .add(
    'default',
    withInfo('default')(() => (
      <Table className="">
        <thead>
          <Tr>
            <Th>Order Number</Th>
            <Th>By</Th>
            <Th>Item</Th>
          </Tr>
        </thead>
        <tbody>
          <Tr>
            <Th>100</Th>
            <Th>MAB</Th>
            <Th>Blood Pressure Cuff</Th>
          </Tr>
          <Tr>
            <Th>101</Th>
            <Th>MAB</Th>
            <Th>ZA3012</Th>
          </Tr>
          <Tr>
            <Th>102</Th>
            <Th>MAB</Th>
            <Th>Glucose Meter</Th>
          </Tr>
        </tbody>
      </Table>
    ))
  );
