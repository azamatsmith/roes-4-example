import React from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {checkA11y} from '@storybook/addon-a11y';
import Select from './';

storiesOf('Select', module)
  .addDecorator(checkA11y)
  .addWithJSX('with a placeholder ', () => (
    <Select id="select" label="Ordering Station">
      <option>791</option>
      <option>600</option>
      <option>500</option>
      <option>200</option>
    </Select>
  ));
