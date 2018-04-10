/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import { shallow } from 'enzyme';

describe('HEADER', () => {
  it.skip('should match the Snapshot', () => {
    const wrapper = shallow(<User />);
    expect(wrapper).to.match.snapshot();
  });

  it('should', () => {
  
  });
});

