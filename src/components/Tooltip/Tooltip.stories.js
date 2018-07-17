import React from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {checkA11y} from '@storybook/addon-a11y';
import {withInfo} from '@storybook/addon-info';
import Tooltip from './';

storiesOf('Tooltip', module)
  .addDecorator(checkA11y)
  .add(
    'all props',
    withInfo('default')(() => (
      <Tooltip title="An informative tip">
        <div className="dib pa2 bg-dark-blue white br2">Hover Me</div>
      </Tooltip>
    ))
  )
  .addWithJSX('with position="left"', () => (
    <Tooltip position="bottom" title="positioned to the left" position="left">
      <div className="dib pa2 bg-dark-blue white br2">Hover Me</div>
    </Tooltip>
  ))
  .addWithJSX('with position="right"', () => (
    <Tooltip position="bottom" title="positioned to the right" position="right">
      <div className="dib pa2 bg-dark-blue white br2">Hover Me</div>
    </Tooltip>
  ))
  .addWithJSX('with position="bottom"', () => (
    <Tooltip
      position="bottom"
      title="positioned on the bottom"
      position="bottom"
    >
      <div className="dib pa2 bg-dark-blue white br2">Hover Me</div>
    </Tooltip>
  ))
  .addWithJSX('with trigger="click"', () => (
    <Tooltip
      position="bottom"
      title="positioned on the bottom with click"
      position="bottom"
      trigger="click"
    >
      <div
        className="dib pa2 bg-dark-blue white br-100 f4 flex items-center justify-center pointer"
        style={{height: 30, width: 30}}
      >
        ?
      </div>
    </Tooltip>
  ));
