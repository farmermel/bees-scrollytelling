/* eslint-disable */
import React from 'react';
import Header from './Header';
import { shallow } from 'enzyme';

describe('Header', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Header />, { disableLifeCycleMethods: true });
  })

  it.skip('matches the Snapshot', () => {
    expect(wrapper).to.match.snapshot();
  });

  it.skip('has default state', () => {
    
  });

  describe('componentDidMount', () => {
    it.skip('calls handleCurrentLocation', () => {

    });
  });

  describe('shouldComponentUpdate', () => {
    it.skip('returns false if the location of the nextState passed in is different from current location in state', () => {

    });

    it.skip('returns true if the location of the nextState passed in matches current locaiton in state', () => {

    });
  });

  describe('handleCurrentLocation', () => {
    it.skip('calls getCurrentPosition on the geolocation object on the navigator object', () => {

    })

    //don't super know how to test this
  });

  describe('handleSubmit', () => {
    it.skip('calls preventDefault on event passed in', () => {

    });

    it.skip('calls startScroll with event and 1396', () => {

    });

    it.skip('calls postToDB', () => {

    });
  });

  describe('postToDB', () => {
    it.skip('calls saveUser with userId', () => {

    });
  });

  describe('handleChange', () => {
    it.skip('sets state with name and value of target of event passed in', () => {

    });
  });
});