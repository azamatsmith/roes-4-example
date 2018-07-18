import React from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {checkA11y} from '@storybook/addon-a11y';
import {withInfo} from '@storybook/addon-info';
import Link from './';

storiesOf('Link', module)
  .addDecorator(checkA11y)
  .addWithJSX('default', () => (
    <Link href="https://github.com/wildsmithstudio/roes-4-example">ROES 4</Link>
  ))
  .addWithJSX('with target="_blank"', () => (
    <Link
      href="https://github.com/wildsmithstudio/roes-4-example"
      target="_blank"
    >
      ROES 4
    </Link>
  ))
  .addWithJSX('as an image', () => (
    <Link
      href="https://github.com/wildsmithstudio/roes-4-example"
      target="_blank"
    >
      <img
        alt="roes link"
        className="br2 grow"
        src="https://images.unsplash.com/photo-1496857239036-1fb137683000?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=0be3993626ee4fa5c365186c8945fc1a&auto=format&fit=crop&w=1050&q=80"
        style={{height: 100, width: 100}}
      />
    </Link>
  ));
