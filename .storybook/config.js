import React from 'react';
import {addDecorator, configure, setAddon} from '@storybook/react';
import JSXAddon from 'storybook-addon-jsx';
import centered from '@storybook/addon-centered';
import '../src/main.css';

setAddon(JSXAddon);
addDecorator(centered);
addDecorator(story => <div className="sans-serif">{story()}</div>);

const req = require.context('../src/components', true, /\.stories\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
