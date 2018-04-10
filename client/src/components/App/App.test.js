import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

describe('APP', () => {
  it.skip('should match the Snapshot', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).to.match.snapshot();
  });

  it('should', () => {
  
  });
});
