import React, { Component } from 'react';
import './Statistics.css';

class Statistics extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount = () => {
    this.getStatistics();
  }

  getStatistics = async () => {
    const output = await fetch('/api/v1/answers');
    const rawResponse = await output.json();
    const response = this.cleanStatistics(rawResponse)
    await this.setState({ response })
  }

  cleanStatistics = (response) => {
    return response.reduce( (answers, questionObj, index) => {
      if (!answers[questionObj.question]) {
        answers[questionObj.question] = {};
      }

      if (!answers[questionObj.question][questionObj.user_answer]) {
        answers[questionObj.question][questionObj.user_answer] = 0;
      }

      answers[questionObj.question][questionObj.user_answer]++;

      return answers
    }, {})
  }

  render = () => {
    return (
      <div className='Statistics'>
        <p>Statistics</p>
      </div>
    )
  }
}

export default Statistics;


// {id: 1, question: "Do you LOVE bees", user_answer: "YES", users_id: 1, created_at: "2018-04-08T21:05:26.066Z", …}
