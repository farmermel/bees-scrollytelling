import React, { Component } from 'react';
import { Parallax } from 'react-scroll-parallax';
import PieChart from '../PieChart/PieChart';
import orange from '../../assets/orange.png';
// import apple from '../../assets/apple.png';
import PropTypes from 'prop-types';
import './Impact.css';
// import fruitList from '../../data/fruitList';
import fruitArrangement from '../../assets/raspberryStarfruit.png';
import wordCloud from '../../assets/wordcloud.png';
import wheat from '../../assets/wheat.jpg';
import riceball from '../../assets/riceball.png';
import corn from '../../assets/corn.jpg';

class Impact extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      percent: 0,
      unit: '',
      monetary: '',
      economy: ''
    }
  }

  static contextTypes = {
        parallaxController: PropTypes.object.isRequired,
  };

  handleSubmit = async (e, scrollStop, answer, question) => {
    this.props.startScroll(e, scrollStop);
    await this.setState({ economy: `${this.state.monetary}_${this.state.unit}`});
    const postBody = {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        users_id: this.props.currentUserId,
        user_answer: this.state[answer],
        question: question
      })
    }
    await fetch('/api/v1/answers', postBody);
  }

  updateImpactPercent = percent => {
    this.setState({ percent });
  }

  handleChangeEcon = e => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  handleLoad = () => {
    this.context.parallaxController.update();
  };


  displayDietQuestion = () => {
    return (
      <form onSubmit={(e) => this.handleSubmit(e, 2770, 'percent', 'What percentage of your diet do you think is provided by bees?')} 
            className='diet-form'>
        <div className='question-cont'>
          <h2>Let's talk about food...</h2>
          <img src={ fruitArrangement } alt='fruit arrangement'
               className='fruit-arrangement' />
          <Parallax offsetYMin={1000}>
            <img src={ orange } alt='orange' 
                 onLoad={this.handleLoad}
                 className='raining-fruit' />
          </Parallax>
        </div>
        <label htmlFor='diet' 
               className='question-descr'>What percentage of your diet do you think is provided by bees?</label>
        <PieChart updateImpactPercent={ this.updateImpactPercent } />
        <button type='submit'>Guess</button>
      </form>
    );
  }

  // makeWordCloud = () => {
  //   return fruitList.map(fruit => {
  //     return <span>{fruit}</span>
  //   })
  // }

  displayDietArticle = () => {
    return (
      <article className='diet-article'>
        <h1 id='diet-header'>In your daily diet,</h1>
        <h1>30% by volume of food you eat</h1>
        <p>The majority of our diet consists of wheat, rice and corn, all which are wind pollinated</p>
        <div className='wind-foods-cont'>
          <Parallax offsetXMax={100} offsetXMin={-50} slowerScrollRate={true}>
            <img src={ wheat } />
          </Parallax>
          <img src={ riceball } />
          <Parallax offsetXMax={-100} offsetXMin={50} slowerScrollRate={true}>
            <img src={ corn } />
          </Parallax>
        </div>
        <h1>and 60% diversity, are pollinated by bees</h1>
        <p>Most fruits and vegetables are animal pollinated, including chocolate, coffee, tea, and avocados</p>
          <div className='foods-cont'>
            <img src={wordCloud} alt='all the fruits' className='word-cloud' />
          </div>
      </article>
    );
  }

  displayEconomicQuestion = () => {
    return (
      <form onSubmit={(e) => this.handleSubmit(e, 4500, 'economy', 'How much do bees contribute to the economy, anually?')}
            className='economic-questions'>
        <h2>What about the Economy?</h2>
        <label htmlFor='economic' 
               className='question-descr'>How much do bees contribute to the economy, anually?</label>
        <div>
          <select name='monetary' onChange={ (e) => this.handleChangeEcon(e) }>
            <option value='1' >1</option>
            <option value='100'>100</option>
            <option value='200'>200</option>
            <option value='300'>300</option>
            <option value='400'>400</option>
            <option value='500'>500</option>
            <option value='600'>600</option>
            <option value='700'>700</option>
            <option value='800'>800</option>
            <option value='900'>900</option>
          </select>
          <select name='unit' onChange={ (e) => this.handleChangeEcon(e) }>
            <option value='million'>million</option>
            <option value='billion'>billion</option>
          </select>
        </div>
        <button type='submit'>Guess</button>
      </form>
    );
  }

  displayEconomicArticle = () => {
    return (
      <article className='economic-article'>
        <h1>The honeybee services are valued to be just above $20 billion in the United States. World wide, that number rises to $217 billion. </h1>
        <div className="chart"></div>
      </article>
    );
  }

  render() {
    return (
      <div className='Impact' >
        { this.displayDietQuestion() }
        { this.displayDietArticle() }
        { this.displayEconomicQuestion() }
        { this.displayEconomicArticle() }
      </div>
    );
  }
}

Impact.propTypes = {
  startScroll: PropTypes.func.isRequired,
  questionsEnabled: PropTypes.bool.isRequired,
  currentUserId: PropTypes.number
}

export default Impact;