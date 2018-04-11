import React from 'react';
import { shallow } from 'enzyme';
import BeeFacts from './BeeFacts';

describe('BeeFacts', () => {
  it.skip('should match the Snapshot', () => {
    const wrapper = shallow(<BeeFacts />);
    expect(wrapper).to.match.snapshot();
  });

  it('should', () => {
  
  });
});

