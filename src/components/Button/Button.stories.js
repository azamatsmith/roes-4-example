import React from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {checkA11y} from '@storybook/addon-a11y';
import Button from './';

storiesOf('Button', module)
  .addDecorator(checkA11y)
  .addWithJSX('default', () => <Button>Patient Lookup</Button>)
  .addWithJSX('with theme="success"', () => (
    <Button theme="success">Submit</Button>
  ))
  .addWithJSX('with theme="danger"', () => (
    <Button theme="danger">Cancel</Button>
  ))
  .addWithJSX('with theme="secondary"', () => (
    <Button theme="secondary">Submit</Button>
  ));
