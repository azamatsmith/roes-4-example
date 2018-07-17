import React from 'react';
import ReactDOM from 'react-dom';
import {mount} from 'enzyme';
import StatusText from './';

describe('<StatusText />', () => {
  const props = {
    children: <span>An Error</span>,
    statusType: 'error',
  };

  const defaultWrapper = mount(<StatusText {...props} />);

  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <StatusText statusType="success">Complete</StatusText>,
      div
    );
  });

  it('should render an error status type', () => {
    expect(defaultWrapper.text()).toEqual('An Error');
  });

  it('should render an error status type', () => {
    defaultWrapper.setProps({
      statusType: 'warning',
      children: <span>A warning</span>,
    });
    expect(defaultWrapper.text()).toEqual('A serious warning');
  });
});
