/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import Problems from './Problems';
import { shallow } from 'enzyme';

describe('PROBLEMS', () => {
  it.skip('should match the Snapshot', () => {
    const wrapper = shallow(<Problems />);
    expect(wrapper).to.match.snapshot();
  });

  it('should', () => {
  
  });
});

