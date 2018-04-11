import React from 'react';
import { shallow } from 'enzyme';
import BeeFacts from './BeeFacts';

describe('BeeFacts', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<BeeFacts startScroll={jest.fn()}
                                questionsEnabled={true}
                                currentUserId={2} />)
  })

  it.skip('matches the Snapshot', () => {
    expect(wrapper).to.match.snapshot();
  });

  it('has default state', () => {
    expect(wrapper.instance().state).toEqual({beeSpecies: ''});
  });

  describe('handleChange', () => {
    const event = {
      target: {
        name: 'Jeff', value: 'websocket'
      }
    }

    it('sets state with name and value of event passed in', () => {
      wrapper.instance().handleChange(event);

      expect(wrapper.instance().state.Jeff).toEqual('websocket');
    });
  });

  describe('handleSubmit', () => {
    global.window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        status: 200,
        json: () => Promise.resolve({})
      })
    })

    const postBody = {"body": "{\"users_id\":2,\"user_answer\":\"\",\"question\":\"bee species\"}", "headers": {"Content-type": "application/json"}, "method": "POST"};

    const event = {};

    it('calls startScroll with event passed in and 6000', () => {
      wrapper.instance().handleSubmit(event);

      expect(wrapper.instance().props.startScroll).toHaveBeenCalledWith(event, 6000);
    });

    it('calls fetch with /api/v1/answers and the post body', () => {
      wrapper.instance().setState({beeSpecies: 'rusty'})
      wrapper.instance().handleSubmit(event);

      expect(window.fetch).toHaveBeenCalledWith('/api/v1/answers', postBody);
    });
  });
});