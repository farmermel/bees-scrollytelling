import React, { Component } from 'react';
import './BeeFacts.css';

export class BeeFacts extends Component {
  constructor() {
    super();
    this.state = {
      beeSpecies: ''
    }
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = e => {
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
    // await fetch('/api/v1/questions', postBody);
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
        <h1>There are more than 4000 types of wild bees,</h1>
        <h1>you probably know:</h1>
        <div>
          <h2>The Honey Bee</h2>
          <div className='bee-images honey-bee'>
          </div>
        </div>
        <div>
          <div className='bee-images bee-box'>
          </div>
          <h2>They're domesticated</h2>
        </div>
        <div id="last">
          <h2>Can be transported</h2>
          <div className='bee-images transport'>
          </div>
        </div>
        <div>
          <h2>The Wild Bees</h2>
          <div className='bee-images wild-bee'>
          </div>
        </div>
        <div>
          <div className='bee-images solitary'>
          </div>
          <h2>Mostly solitary but diverse</h2>
        </div>
        <div>
          <h2>Local pollinators</h2>
          <div className='bee-images flower'>
          </div>
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
