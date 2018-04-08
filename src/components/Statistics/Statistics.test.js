/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import Statistics from './Statistics';
import { shallow } from 'enzyme';

describe('Statistics', () => {
  it.skip('should match the Snapshot', () => {
    const wrapper = shallow(<Statistics />);
    expect(wrapper).to.match.snapshot();
  });

  it('should', () => {
  
  });
});

