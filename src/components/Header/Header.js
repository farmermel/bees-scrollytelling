import React, { Component } from 'react';
import { Parallax } from 'react-scroll-parallax';
import './Header.css';


const ageRanges = [
  '13-19', '20-39', '40-59', '60-79', '79+'
];

const concernArr = [
  'Not at all concerned', 'A little concerned', 'Very concerned', 'Haven\'t thought about it'
];

//after submit/completion of the form we should have a 
//down arrow pop up that lets user know they are now
//free to keep scrolling. Maybe a lil up and down motion
//on the arrow as well

//also maybe more exposition between get to know you form
//and content
//like "Hey, nice to meet you! (or nice to Bee acquainted!) lol
//Lets get down to business"

class Header extends Component {
  constructor() {
    super();
    this.state = {
      concern: '',
      age: ''
    }
  }

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.concern && this.state.age) {
      this.props.startScroll(e, 1396);
      this.saveToDB();
    }
  }

  saveToDB = () => {
    
  }

  handleChange = e => {
    console.log(e.target.value)
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  //rename things to be more general
  radioOptions = optionsArr => {
    const name = optionsArr.length === 5 ? 'age' : 'concern';
    return optionsArr.map((range, i) => {
      return (
        <label htmlFor={`${name}${range}`} key={i}>{range}
          <input type="radio" id={`${name}${range}`}
                 name={name} value={range}
                 onChange={this.handleChange} />
        </label>
      );
    });
  };

  render() {
    return (
      <div className='Header'>
        <div className='page-header-img'>
        </div>
        <header className='page-header'>
          <h1>Bees and Our Food</h1>
          <p>An interactive guide to how bees keep us well fed</p>
        </header>
        <form 
          className='user-info-form'
          onSubmit={this.handleSubmit}
        >
          <h2>
            <Parallax 
              offsetYMax={85} 
              slowerScrollRate={true}  
              className='parallax-first'
            >
              First,
            </Parallax> 
            let's get to know you
          </h2>
          <div className='questions-cont'>
            <div>
            <h3 className='question-descr'>Select your age</h3>
              {this.radioOptions(ageRanges)}
            </div>
            <div>
            <h3 className='question-descr'>How concerned are you about bees?</h3>
              {this.radioOptions(concernArr)}
            </div>
          </div>
          <button>Submit</button>
        </form>
      </div>
    );
  }
};

export default Header;