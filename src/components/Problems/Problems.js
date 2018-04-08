import React from 'react';
import './Problems.css';

const problemQuestion = () => {
  return (
    <form>
      <h2>Bees are in trouble</h2>
      <label htmlFor='problem' className='question-descr'>What percent of bee colonies do beekeepers lose every year?</label>
      <input type='text' id='problem' placeholder='Enter a number between 0 and 100' />
      <div className='fake-circle'></div>
      <button type='submit'>Guess</button>
    </form>
  );
};

const pesticidesArticle = () => {
  return (
    <article>
      <p>Neonicitinoides confuse bees and make it difficult for bees to find their way back to their hive</p>
      <p>They are also very addictive (like nicotine)</p>
      <p>Bees will seek out plants that have been sprayed with neonicitinoides</p>
      <p>Meaning each time they visit sprayed plants, they have a greater chance of not finding home</p>
    </article>
  );
};

const monocultureArticle = () => {
  return (
    <article>
      <p>Large fields of one plant, like you see in today's agriculture, can cause harm to bee colonies</p>
      <p>Bees become stressed out feeding on the same plant because they do not receive a nutrient-rich diet</p>
      <p>In fact, nearly 20 percent of the beekeepers who pollinated almonds lost 50 percent or more of their colonies</p>
      <p>Also, fields of one plant often cause more problems with weeds and pests</p>
      <p>Enhancing the need for pesticides and harming the pollinating bees</p>
    </article>
  );
};

const climateChangeArticle = () => {
  return (
    <article>
      <p>Higher temperatures effect many aspects of the honey bee way</p>
      <p>A warmer climate promotes the growth of pests in bee hives</p>
      <p>Making bees more suseptible to ------------------ colony collapse disorder, parasites?</p>
      <p>Also, climate change causes plants to flower earlier, disrupting the bee's natural schedule</p>
    </article>
  );
};

export const Problems = () => {
  return (
    <div className='Problems'>
      { problemQuestion() }
      { pesticidesArticle() }
      { monocultureArticle() }
      { climateChangeArticle() }
    </div>
  );
};