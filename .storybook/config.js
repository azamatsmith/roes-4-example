import React from 'react';
import {addDecorator, configure, setAddon} from '@storybook/react';
import {setOptions} from '@storybook/addon-options';
import JSXAddon from 'storybook-addon-jsx';
import infoAddon, {setDefaults} from '@storybook/addon-info';
import '../src/main.css';

const infoAddonDefaults = {
  inline: true,
  text: true,
  header: false,
  source: true,
  styles(stylesheet) {
    return {
      ...stylesheet,
      infoPage: {
        marginTop: '4rem',
      },
    };
  },
};

setOptions({
  name: 'ROES Styleguide',
});

setAddon(JSXAddon);
setDefaults(infoAddonDefaults);
setAddon(infoAddon);
addDecorator(story => (
  <div className="sans-serif mv5 flex justify-center">{story()}</div>
));

const req = require.context('../src/components', true, /\.stories\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
