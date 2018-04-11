import React, { Component } from 'react';
import PieChart from '../PieChart/PieChart';
import PropTypes from 'prop-types';
import './Problems.css';


export class Problems extends Component {
  constructor(props) {
    super(props);
    this.state = {
      percent: 0
    }
  }

  updateImpactPercent = percent => {
    this.setState({ percent });
  }

  handleSubmit = async e => {
    this.props.startScroll(e, 8000);
    await this.setState({ economy: `${this.state.monetary}${this.state.unit}`});
    const postBody = {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        users_id: this.props.currentUserId,
        user_answer: this.state.percent,
        question: 'What percent of bee colonies do beekeepers lose every year?'
      })
    }
    await fetch('/api/v1/answers', postBody);
  }

  problemQuestion = () => {
    return (
      <form onSubmit={ (e) => this.handleSubmit(e) }>
        <h2>Bees are in trouble</h2>
        <label htmlFor='problem' className='question-descr'>What percent of bee colonies do beekeepers lose every year?</label>
        <PieChart updateImpactPercent={ this.updateImpactPercent } />
        <button type='submit'>Guess</button>
      </form>
    );
  };

  pesticidesArticle = () => {
    return (
      <article className='problems-article'>
        <h1>Neonicitinoides confuse bees and make it difficult for bees to find their way back to their hive</h1>
        <p>They are also very addictive (like nicotine)</p>
        <p>Bees will seek out plants that have been sprayed with neonicitinoides</p>
        <p>Meaning each time they visit sprayed plants, they have a greater chance of not finding home</p>
      </article>
    );
  };

  monocultureArticle = () => {
    return (
      <article className='problems-article'>
        <h1>Large fields of one plant, like you see in today's agriculture, can cause harm to bee colonies</h1>
        <p>Bees become stressed out feeding on the same plant because they do not receive a nutrient-rich diet</p>
        <p>In fact, nearly 20 percent of the beekeepers who pollinated almonds lost 50 percent or more of their colonies</p>
        <p>Also, fields of one plant often cause more problems with weeds and pests</p>
        <p>Enhancing the need for pesticides and harming the pollinating bees</p>
      </article>
    );
  };

  climateChangeArticle = () => {
    return (
      <article className='problems-article'>
        <h1>Climate change create warmer temperatures</h1>
        <p>Higher temperatures effect many aspects of the honey bee way</p>
        <p>A warmer climate promotes the growth of pests in bee hives</p>
        <p>Making bees more suseptible to ------------------ colony collapse disorder, parasites?</p>
        <p>Also, climate change causes plants to flower earlier, disrupting the bee's natural schedule</p>
      </article>
    );
  };

  render() {
    return (
      <div className='Problems'>
        { this.problemQuestion() }
        { this.pesticidesArticle() }
        { this.monocultureArticle() }
        { this.climateChangeArticle() }
      </div>
    );
  }   
};

Problems.propTypes = {
  questionsEnabled: PropTypes.bool.isRequired,
  startScroll: PropTypes.func.isRequired,
  currentUserId: PropTypes.number
}