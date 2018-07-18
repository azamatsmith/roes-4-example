import React from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {checkA11y} from '@storybook/addon-a11y';
import {withInfo} from '@storybook/addon-info';
import StatusText from './';

storiesOf('StatusText', module)
  .addDecorator(checkA11y)
  .addWithJSX('with statusType="success"', () => (
    <StatusText statusType="success">Complete</StatusText>
  ))
  .addWithJSX('with statusType=warning', () => (
    <StatusText statusType="warning">Pending Shipment</StatusText>
  ))
  .addWithJSX('with statusType=error', () => (
    <StatusText statusType="error">Shipment Lost</StatusText>
  ));
