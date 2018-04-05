import React from 'react';
import './BeeFacts.css';

const beeFactsQuestion = () => {
  return (
    <form>
      <label htmlFor="help">How many species of wild bees are there in North America?</label>
      <input type="text" id="help" placeholder="Enter a number 0 or above"/>
      <button type="submit">Guess</button>
    </form>
  )
}

const beeFactsArticle = () => {
  return (
    <article>
      <h1>Who is actually doing the pollinating?</h1>
      <ul>The Honey Bee
        <li>lives in colonies</li>
        <li>domesticated</li>
        <li>can be transported via automobile</li>
      </ul>
      <ul>The Wild Bee
        <li>solitary</li>
        <li>diverse</li>
        <li>local pollination</li>
      </ul>
    </article>
  )
}

export const BeeFacts = () => {
  return (
    <div>
      { beeFactsQuestion() }
      { beeFactsArticle() }
    </div>
  )
}//here