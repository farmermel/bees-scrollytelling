/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import Impact from './Impact';
import { shallow } from 'enzyme';

describe('IMPACT', () => {
  it.skip('should match the Snapshot', () => {
    const wrapper = shallow(<Impact />);
    expect(wrapper).to.match.snapshot();
  });

  it('should', () => {
  
  });
});

