import React from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {checkA11y} from '@storybook/addon-a11y';
import {withInfo} from '@storybook/addon-info';
import Dropdown from './';

storiesOf('Dropdown', module)
  .addDecorator(checkA11y)
  .addWithJSX('with showOnHover', () => (
    <Dropdown items={['item 1', 'item 2', 'item 3']}>3 Items</Dropdown>
  ))
  .addWithJSX('with showOnClick', () => (
    <Dropdown
      showOnClick
      showOnHover={false}
      items={['item 1', 'item 2', 'item 3']}
    >
      3 Items
    </Dropdown>
  ));
