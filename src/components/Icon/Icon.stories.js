import React from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {checkA11y} from '@storybook/addon-a11y';
import Icon from './';

storiesOf('Icon', module)
  .addDecorator(checkA11y)
  .addWithJSX('name="va"', () => <Icon name="va" />);
