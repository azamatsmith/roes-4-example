import React from 'react';
import {storiesOf} from '@storybook/react';
import {checkA11y} from '@storybook/addon-a11y';
import Colors from './';

storiesOf('All Colors', module)
  .addDecorator(checkA11y)
  .add('Color Pallette', () => <Colors />);
