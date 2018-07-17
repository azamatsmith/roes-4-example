import React from 'react';
import ReactDOM from 'react-dom';
import {mount} from 'enzyme';
import Input from './';

describe('<Input />', () => {
  const props = {
    id: 'test-input',
    label: 'Email Address',
    onChange: jest.fn(),
  };

  const defaultWrapper = mount(<Input {...props} />);

  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Input {...props} />, div);
  });

  it('should render a label', () => {
    expect(defaultWrapper.find('label').length).toEqual(1);
    expect(defaultWrapper.find('label').text()).toEqual('Email Address');
  });

  it('should accept a onChange prop', () => {
    const el = defaultWrapper.find('input');
    expect(props.onChange).toHaveBeenCalledTimes(0);
    el.simulate('change', 'user input');
    expect(props.onChange).toHaveBeenCalledTimes(1);
  });
});
