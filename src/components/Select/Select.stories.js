import React from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {checkA11y} from '@storybook/addon-a11y';
import {withInfo} from '@storybook/addon-info';
import Select from './';

storiesOf('Select', module)
  .addDecorator(checkA11y)
  .addWithJSX('default', () => (
    <Select id="select" label="Ordering Station">
      <option>791 - Denver </option>
      <option>600 - Seattle </option>
      <option>500 - New York</option>
      <option>200 - Orlando</option>
    </Select>
  ))
  .addWithJSX('custom width', () => (
    <Select id="select" label="Ordering Station" style={{width: 220}}>
      <option>791 - Denver </option>
      <option>600 - Seattle </option>
      <option>500 - New York</option>
      <option>200 - Orlando</option>
    </Select>
  ))
  .addWithJSX('with onChange', () => (
    <Select
      id="select"
      label="Ordering Station"
      style={{width: 220}}
      onChange={action('onChange')}
    >
      <option>791 - Denver </option>
      <option>600 - Seattle </option>
      <option>500 - New York</option>
      <option>200 - Orlando</option>
    </Select>
  ));
