import React from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {checkA11y} from '@storybook/addon-a11y';
import {withInfo} from '@storybook/addon-info';
import Input from './';

storiesOf('Input', module)
  .addDecorator(checkA11y)
  .add(
    'all props',
    withInfo('default')(() => (
      <Input
        id="email"
        label="Email"
        placeholder="email address"
        type="email"
      />
    ))
  )
  .addWithJSX('with a placeholder ', () => (
    <Input id="email" label="Email" placeholder="email address" />
  ))
  .addWithJSX('with a defaultValue ', () => (
    <Input
      id="email"
      label="Email"
      defaultValue="previously entered text"
      type="email"
      placeholder="email address"
    />
  ))
  .addWithJSX('with onChange', () => (
    <Input
      id="email"
      label="Email"
      placeholder="email address"
      type="email"
      onChange={action('onChange')}
    />
  ));
