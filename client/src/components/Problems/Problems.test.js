/* eslint-disable */
import React from 'react';
import Problems from './Problems';
import { shallow } from 'enzyme';

describe('Problems', () => {
  it.skip('should match the Snapshot', () => {
    const wrapper = shallow(<Problems />);
    expect(wrapper).to.match.snapshot();
  });

  it('should', () => {
  
  });
});

