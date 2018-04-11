/* eslint-disable */
import React from 'react';
import Problems from './Problems';
import { shallow } from 'enzyme';

describe('Problems', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Problems startScroll={jest.fn()}
                                questionsEnabled={true}
                                currentUserId={2} />);
  });

  it.skip('matches the Snapshot', () => {
    expect(wrapper).to.match.snapshot();
  });

  it('has default state', () => {
    const expected = {
      percent: 0
    };

    expect(wrapper.instance().state).toEqual(expected);
  });

  describe('updateImpactPercent', () => {
    it('sets state with percent passed in', () => {

    });
  });

  describe('handleSubmit', () => {
    it('calls startScroll with event passed in and 8000', () => {

    });

    it('sets state with economy made up of monetary and unit values in state', () => {
      
    })
  });
});

