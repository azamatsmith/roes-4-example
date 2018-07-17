import React from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {checkA11y} from '@storybook/addon-a11y';
import Link from './';

storiesOf('Link', module)
  .addDecorator(checkA11y)
  .addWithJSX('with href', () => <Link href="#">07/14/2018</Link>);
