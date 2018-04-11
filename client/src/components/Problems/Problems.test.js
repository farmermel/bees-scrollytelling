/* eslint-disable */
import React from 'react';
import Problems from './Problems';
import { shallow } from 'enzyme';

describe('Problems', () => {
  let wrapper;
  let startScroll = jest.fn();

  beforeEach(() => {
    wrapper = shallow(<Problems startScroll={startScroll}
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
    it('sets state with percent passed in', async() => {
      await wrapper.instance().updateImpactPercent(30);
      expect(wrapper.instance().state.percent).toEqual(30)
    });
  });

  describe('handleSubmit', () => {

    it('calls startScroll with event passed in and 8000', async () => {
      await wrapper.instance().handleSubmit({});
      expect(startScroll).toHaveBeenCalledWith({}, 8000)
    });

    it('sets state with economy made up of monetary and unit values in state', async () => {
      await wrapper.setState({ monetary: '100', unit: 'billion'})
      await wrapper.instance().handleSubmit({});
      expect(wrapper.instance().state.economy).toEqual('100billion')
    });

    it('calls postData', async () => {
      wrapper.instance().postData = jest.fn();
      await wrapper.instance().handleSubmit({});
      expect(wrapper.instance().postData).toHaveBeenCalled();
    })
  });

  describe('postData', () => {
    global.window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        status: 200,
        json: () => Promise.resolve({})
      })
    })

    const expectedPostBody = {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        users_id: 2,
        user_answer: 30,
        question: 'What percent of bee colonies do beekeepers lose every year?'
      })
    }
  
    it('calls fetch with correct url and post body', async() => {
      await wrapper.setState({ percent: 30 });

      window.fetch.mockClear();
      expect(window.fetch).not.toHaveBeenCalled();

      wrapper.instance().postData();

      expect(window.fetch).toHaveBeenCalledWith('/api/v1/answers', expectedPostBody)
    })
  })
});

