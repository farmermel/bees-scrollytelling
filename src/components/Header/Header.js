import React from 'react';
import './Header.css'

const ageRanges = [
  '13-19', '20-39', '40-59', '60-79', '79+'
];

const concernArr = [
  'Not at all concerned', 'A little concerned', 'Very concerned', 'Haven\'t thought about it'
];

//rename things to be more general
const radioOptions = ageRangeArr => {
  return ageRangeArr.map((range, i) => {
    return (
      <label htmlFor={`age${range}`}>{range}
          <input type="radio" id={`age${range}`}
                 name={`age-${i}`} value={range} />
      </label>
    );
  });
};

const Header = () => {
  return (
    <div className="Header">
      <div className="page-header-img">
      </div>
      <header className="page-header">
        <h1>Bees and Our Food</h1>
        <p>An interactive guide to how bees keep us well fed</p>
      </header>
      <form className="user-info-form">
        <h3>First, let's get to know you</h3>
        {radioOptions(ageRanges)}
        <label>How concerned are you about bees?
          {radioOptions(concernArr)}
        </label>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default Header;