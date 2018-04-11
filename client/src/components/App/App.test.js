import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {
  let wrapper;

  // let window = {
  //   addEventListener: jest.fn(),
  //   scrollTo: jest.fn()
  // }
  global.window = window;

  window.addEventListener = jest.fn();
  window.scrollTo = jest.fn();

  beforeEach(() => {
    wrapper = shallow(<App />, { disableLifeCycleMethods: true });
    window.addEventListener.mockClear();
    window.scrollTo.mockClear();
  });

  it.skip('should match the Snapshot', () => {
    expect(wrapper).to.match.snapshot();
  });

  it('has default state', () => {
    expect(wrapper.instance().state).toEqual({
      scrollPosition: 750,
      questionsEnabled: true,
      currentUserId: null
    });
  });

  describe('componentDidMount', () => {
    it('calls addEventListener on window', () => {
      expect(window.addEventListener).not.toHaveBeenCalled();

      wrapper.instance().componentDidMount();

      expect(window.addEventListener).toHaveBeenCalled();
    });
  });

  describe('stopScroll', () => {
    it('calls scrollTo on window when questions are enabled and scroll position is greater that current limit', () => {
      expect(window.scrollTo).not.toHaveBeenCalled();
      window.scrollY = 800;

      wrapper.instance().stopScroll();

      expect(window.scrollTo).toHaveBeenCalledWith(0, 750);
    });
  });

  describe('startScroll', () => {
    let event = {
      preventDefault: jest.fn()
    }

    it('calls preventDefault on event passed in', () => {
      expect(event.preventDefault).not.toHaveBeenCalled();

      wrapper.instance().startScroll(event, 800);

      expect(event.preventDefault).toHaveBeenCalled();
    });

    it('sets state with scrollPosition passed in', () => {
      wrapper.instance().startScroll(event, 800);
      expect(wrapper.instance().state.scrollPosition).toEqual(800);
    });
  });

  describe('saveUser', () => {
    it('sets state with user id passed in', () => {
      wrapper.instance().saveUser(9);
      expect(wrapper.instance().state.currentUserId).toEqual(9);
    });
  });

  describe('toggleQuestionsEnabled', () => {
    it('sets questionsEnabled to opposite of current state', () => {
      wrapper.instance().toggleQuestionsEnabled();

      expect(wrapper.instance().state.questionsEnabled).toEqual(false);

      wrapper.instance().toggleQuestionsEnabled();

      expect(wrapper.instance().state.questionsEnabled).toEqual(true);
    });
  });
});
