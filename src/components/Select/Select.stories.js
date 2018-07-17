import React from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {checkA11y} from '@storybook/addon-a11y';
import {withInfo} from '@storybook/addon-info';
import Select from './';

storiesOf('Select', module)
  .addDecorator(checkA11y)
  .add(
    'all props',
    withInfo('default')(() => (
      <Select id="select" label="Ordering Station">
        <option>791</option>
        <option>600</option>
        <option>500</option>
        <option>200</option>
      </Select>
    ))
  )
  .addWithJSX('custom width', () => (
    <Select id="select" label="Ordering Station" style={{width: 220}}>
      <option>791</option>
      <option>600</option>
      <option>500</option>
      <option>200</option>
    </Select>
  ))
  .addWithJSX('with onChange', () => (
    <Select
      id="select"
      label="Ordering Station"
      style={{width: 220}}
      onChange={action('onChange')}
    >
      <option>791</option>
      <option>600</option>
      <option>500</option>
      <option>200</option>
    </Select>
  ));
