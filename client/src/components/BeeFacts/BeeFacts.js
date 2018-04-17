import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Parallax } from 'react-scroll-parallax';
import './BeeFacts.css';
import truck from '../../assets/truck2.png';

export default class BeeFacts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beeSpecies: ''
    }
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = async e => {
    this.props.startScroll(e, 6000);
    const postBody = {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        users_id: this.props.currentUserId,
        user_answer: this.state.beeSpecies,
        question: 'bee species'
      })
    }
    await fetch('/api/v1/answers', postBody);
  }

  beeFactsQuestion = () => {
    return (
      <form onSubmit={ (e) => this.handleSubmit(e) } 
            className='bee-questions'>
        <h2>Who's actually doing the pollinating?</h2>
        <label htmlFor='help' className='question-descr'>How many species of wild bees are there in North America?</label>
        <input type='number' 
               step='50'
               id='help' 
               placeholder='Enter a number 0 or above'
               name='beeSpecies'
               value={ this.state.beeSpecies }
               onChange={ (e) => this.handleChange(e) } />
        <button type='submit'>Guess</button>
      </form>
    )
  }

  beeFactsArticle = () => {
    return (
      <article className='bee-article'>
        <h1>There are more than 4000 types of bees,</h1>
        <div className='wild-bees-img'></div>
        <h1>you probably know:</h1>
        <Parallax 
                  offsetYMax={200}
                  slowerScrollRate={true}
                  className='the-honeybee'>
          <h1>The Honey Bee</h1>
        </Parallax>
        <Parallax offsetYMax={80}>
          <div className='bee-images honey-bee'>
          </div>
        </Parallax>
        <div>
          <Parallax offsetYMax={80}>
            <div className='bee-images bee-box'>
            </div>
          </Parallax>
          <h2>They're domesticated</h2>
        </div>
        <div id="last">
          <h2>Can be transported</h2>
          <Parallax offsetYMax={80}>
            <div className='bee-images' id='transport'>
            </div>
          </Parallax>
        </div>
        <h1>Less commonly known...</h1>
        <div>
          <h1>The Wild Bees</h1>
          <Parallax offsetYMax={80}>
            <div className='bee-images wild-bee'>
            </div>
          </Parallax>
        </div>
        <div>
          <Parallax offsetYMax={80}>
            <div className='bee-images solitary'>
            </div>
          </Parallax>
          <h2>Mostly solitary but diverse</h2>
        </div>
        <div>
          <h2>Local pollinators</h2>
          <Parallax offsetYMax={80}>
            <div className='bee-images flower'>
            </div>
          </Parallax>
        </div>
      </article>
    )
  }
  
  render() {
    return (
      <div >
        { this.beeFactsQuestion() }
        { this.beeFactsArticle() }
      </div>
    )
  }
}

BeeFacts.propTypes = {
  currentUserId: PropTypes.number,
  startScroll: PropTypes.func.isRequired,
  questionsEnabled: PropTypes.bool.isRequired
}