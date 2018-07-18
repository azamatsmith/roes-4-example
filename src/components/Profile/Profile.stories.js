import React from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {checkA11y} from '@storybook/addon-a11y';
import {withInfo} from '@storybook/addon-info';
import Profile from './';

storiesOf('Profile', module)
  .addDecorator(checkA11y)
  .addWithJSX('default', () => (
    <div className="ml4">
      <Profile
        name="Rose Atwood"
        src="https://images.unsplash.com/photo-1496857239036-1fb137683000?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=0be3993626ee4fa5c365186c8945fc1a&auto=format&fit=crop&w=1050&q=80"
        textColor="near-black"
      />
    </div>
  ));
