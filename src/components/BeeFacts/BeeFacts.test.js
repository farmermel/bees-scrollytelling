import React from 'react';
import ReactDOM from 'react-dom';
import BeeFacts from './BeeFacts';

describe('BeeFacts', () => {
  it.skip('should match the Snapshot', () => {
    const wrapper = shallow(<BeeFacts />);
    expect(wrapper).to.match.snapshot();
  });

  it('should', () => {
  
  });
});

