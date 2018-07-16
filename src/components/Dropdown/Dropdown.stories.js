import React from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {checkA11y} from '@storybook/addon-a11y';
import Dropdown from './';

storiesOf('Dropdown', module)
  .addDecorator(checkA11y)
  .addWithJSX('with text', () => (
    <Dropdown items={['item 1', 'item 2', 'item 3']}>3 Items</Dropdown>
  ));
