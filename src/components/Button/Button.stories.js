import React from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {checkA11y} from '@storybook/addon-a11y';
import {withInfo} from '@storybook/addon-info';
import Button from './';

storiesOf('Button', module)
  .addDecorator(checkA11y)
  .addWithJSX('with text', () => <Button>Patient Lookup</Button>)
  .add('with info', withInfo('default')(() => <Button>Patient Lookup</Button>));
