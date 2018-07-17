import React from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {checkA11y} from '@storybook/addon-a11y';
import StatusText from './';

storiesOf('StatusText', module)
  .addDecorator(checkA11y)
  .addWithJSX('with withDot={true}', () => (
    <StatusText statusType="success">Complete</StatusText>
  ))
  .addWithJSX('with statusType=error', () => (
    <StatusText statusType="error">Shipment Lost</StatusText>
  ))
  .addWithJSX('with withDot={false}', () => (
    <StatusText statusType="success" withDot={false}>
      Complete
    </StatusText>
  ))
  .addWithJSX('with statusType=warning', () => (
    <StatusText statusType="warning">Pending - Ship</StatusText>
  ))
  .addWithJSX('with statusType=success', () => (
    <StatusText statusType="success">Pending - Ship</StatusText>
  ));
