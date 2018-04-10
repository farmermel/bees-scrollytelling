import React from 'react';
import './Statistics.css';

const getStatistics = async () => {
  const output = await fetch('/api/v1/answers');
  const response = await output.json();
  return response
}

const cleanStatistics = async () => {
  const response = await getStatistics();
  const map = response.reduce( (answers, questionObj, index) => {

    return answers
  }, {})

  console.log(map)
}

const Statistics = () => {
  cleanStatistics();

  return <div className='Statistics'>
    <p>Statistics</p>
  </div>;
};

export default Statistics;
