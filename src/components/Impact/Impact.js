import React, { Component } from 'react';
import { Parallax } from 'react-scroll-parallax';
import PieChart from '../PieChart/PieChart';
import './Impact.css';
import orange from '../../assets/orange.png';
import apple from '../../assets/apple.png';

class Impact extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      percent: 20
    }
  }

  displayDietQuestion = () => {
    return (
      <form onSubmit={(e) => this.props.startScroll(e, 2500)} className="diet-form">
        <div className='question-cont'>
          <h2>Let's talk about food...</h2>
        </div>
        <label htmlFor='diet' className='question-descr'>What percentage of your diet do you think is provided by bees?</label>
        <PieChart />
        <button type='submit'>Guess</button>
      </form>
    );
  }

  displayDietArticle = () => {
    return (
      <article>
        <h1>60% diversity of food you eat, 30% by volume, are pollinated by bees</h1>
        <p>Most fruits and vegetables are animal pollinated, including chocolate, coffee, tea, and avocados</p>
        <a href='https://en.wikipedia.org/wiki/List_of_crop_plants_pollinated_by_bees' target='_blank'>Click to see all the other crops pollinated by food</a>
      </article>
    );
  };

  displayEconomicQuestion = () => {
    return (
      <form>
        <h2>What about the Economy?</h2>
        <label htmlFor='economic' className='question-descr'>How much do bees contribute to the economy, anually?</label>
        <input type='text' id='economic' placeholder='Not sure on best avenue to provide answers to these questions' />
        <button type='submit'>Guess</button>
      </form>
    );
  };

  displayEconomicArticle = () => {
    return (
      <article>
        <h1>The honeybee services are valued to be just above $20 billion in the United States. World wide, that number rises to $217 billion. </h1>
      </article>
    );
  };

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

export default Impact;

// const dietQuestion = (startScroll) => {
//   return (
//     <form onSubmit={(e) => startScroll(e, 2500)} className="diet-form">
//       <div className='question-cont'>
//         <h2>Let's talk about food...</h2>
//       </div>
//       <label htmlFor='diet' className='question-descr'>What percentage of your diet do you think is provided by bees?</label>
//       <PieChart />
//       <button type='submit'>Guess</button>
//     </form>
//   );
// };

// const dietArticle = () => {
//   return (
//     <article>
//       <h1>60% diversity of food you eat, 30% by volume, are pollinated by bees</h1>
//       <p>Most fruits and vegetables are animal pollinated, including chocolate, coffee, tea, and avocados</p>
//       <a href='https://en.wikipedia.org/wiki/List_of_crop_plants_pollinated_by_bees' target='_blank'>Click to see all the other crops pollinated by food</a>
//     </article>
//   );
// };

// const economicQuestion = () => {
//   return (
//     <form>
//       <h2>What about the Economy?</h2>
//       <label htmlFor='economic' className='question-descr'>How much do bees contribute to the economy, anually?</label>
//       <input type='text' id='economic' placeholder='Not sure on best avenue to provide answers to these questions' />
//       <button type='submit'>Guess</button>
//     </form>
//   );
// };

// const economicArticle = () => {
//   return (
//     <article>
//       <h1>The honeybee services are valued to be just above $20 billion in the United States. World wide, that number rises to $217 billion. </h1>
//     </article>
//   );
// };

// export const Impact = (props) => {
//   return (
//     <div className='Impact' >
//       { dietQuestion(props.startScroll) }
//       { dietArticle() }
//       { economicQuestion() }
//       { economicArticle() }
//     </div>
//   );
// };

        // <Parallax
        //   offsetXMax={5}
        // >
        //   <img class='rotate' src={orange} />
        // </Parallax>
        // <Parallax
        //   offsetXMax={25}
        // >
        //   <img class='rotate' src={apple} />
        // </Parallax>
        // <Parallax
        //   offsetXMax={35}
        // >
        //   <img class='rotate' src={orange} />
        // </Parallax>

      //         <input type='text' id='diet' placeholder='Enter a number between 1 and 100' />
      // <div className='fake-circle'></div>