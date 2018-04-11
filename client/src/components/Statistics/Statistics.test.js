/* eslint-disable */
import React from 'react';
import Statistics from './Statistics';
import { shallow } from 'enzyme';

describe('Statistics', () => {
  let wrapper;

  global.window.fetch = jest.fn().mockImplementation(() => {
    return Promise.resolve({
      status: 200,
      json: () => Promise.resolve([])
    })
  })

  beforeEach(() => {
    wrapper = shallow(<Statistics currentUserId={2} />)
  });

  it.skip('matches the Snapshot', () => {
    expect(wrapper).to.match.snapshot();
  });

  it.skip('has a default state of an empty object', () => {
    wrapper = shallow(<Statistics currentUserId={2} />, { disableLifeCycleMethods: true })
    expect(wrapper.instance().state()).toEqual({});
  })

  describe('getStatistics', () => {
    it('gets the statistics and updates state with compiled data', async () => {
      wrapper.instance().cleanStatistics = jest.fn();
      wrapper.instance().getAverages = () => 'response';

      await wrapper.instance().getStatistics();

      expect(wrapper.instance().state.response).toEqual('response')
    });
  });

  describe('cleanStatistics', () => {
    const rawData = [
      {id: 48, question: "What percentage of your diet do you think is provided by bees?", user_answer: "35", users_id: 50 },
      {id: 49, question: "How much do bees contribute to the economy, anually?", user_answer: "400_million", users_id: 50 },
      {id: 50, question: "bee species", user_answer: "200", users_id: 50 },
      {id: 51, question: "What percent of bee colonies do beekeepers lose every year?", user_answer: "40", users_id: 50 },
      {id: 52, question: "What percentage of your diet do you think is provided by bees?", user_answer: "80", users_id: 51 },
      {id: 53, question: "How much do bees contribute to the economy, anually?", user_answer: "400_billion", users_id: 51 },
      {id: 54, question: "bee species", user_answer: "100", users_id: 51 },
      {id: 55, question: "What percent of bee colonies do beekeepers lose every year?", user_answer: "25", users_id: 51 }
    ];

    const cleanedData = {
      'How much do bees contribute to the economy, anually?': {count: {'400_million': 1, '400_billion': 1}, sum: 400400000000},
      'What percent of bee colonies do beekeepers lose every year?': {count: {25: 1, 40: 1}, sum: 65},
      'What percentage of your diet do you think is provided by bees?': {count: {35: 1, 80: 1}, sum: 115},
      'bee species': {count: {100: 1, 200: 1}, sum: 300}
    };

    const cleanedAverageData = {
      'How much do bees contribute to the economy, anually?': {count: {'400_million': 1, '400_billion': 1}, sum: 400400000000, average: 200200000000},
      'What percent of bee colonies do beekeepers lose every year?': {count: {25: 1, 40: 1}, sum: 65, average: 32.5},
      'What percentage of your diet do you think is provided by bees?': {count: {35: 1, 80: 1}, sum: 115, average: 57.5},
      'bee species': {count: {100: 1, 200: 1}, sum: 300, average: 150}
    };

    it('returns a cleaned statistics data object', () => {
      expect(wrapper.instance().cleanStatistics(rawData)).toEqual(cleanedData);
    })
  })

    it('returns a cleaned statistics data object with averages', () => {
    const cleanedData = {
      'How much do bees contribute to the economy, anually?': {count: {'400_million': 1, '400_billion': 1}, sum: 400400000000},
      'What percent of bee colonies do beekeepers lose every year?': {count: {25: 1, 40: 1}, sum: 65},
      'What percentage of your diet do you think is provided by bees?': {count: {35: 1, 80: 1}, sum: 115},
      'bee species': {count: {100: 1, 200: 1}, sum: 300}
    };

    const cleanedAverageData = {
      'How much do bees contribute to the economy, anually?': {count: {'400_million': 1, '400_billion': 1}, sum: 400400000000, average: 200200000000},
      'What percent of bee colonies do beekeepers lose every year?': {count: {25: 1, 40: 1}, sum: 65, average: 32.5},
      'What percentage of your diet do you think is provided by bees?': {count: {35: 1, 80: 1}, sum: 115, average: 57.5},
      'bee species': {count: {100: 1, 200: 1}, sum: 300, average: 150}
    };
      expect(wrapper.instance().getAverages(cleanedData)).toEqual(cleanedAverageData);
    })
});





