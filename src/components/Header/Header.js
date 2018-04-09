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
      age: '',
      location: {}
    }
  }

  componentDidMount = () => {
    this.handleCurrentLocation()
  }

  shouldComponentUpdate(nextProps, nextState){
    if(nextState.location !== this.state.location) {
      return false;
    }
    return true;
  }

  handleCurrentLocation = async () => {
    if ('geolocation' in navigator) {
      console.log('geolocation')
      try {
        await navigator.geolocation.getCurrentPosition(response => {  
          const { latitude, longitude } = response.coords;
          console.log('Location Set')
          this.setState({ location: {latitude: parseFloat(latitude), longitude: parseFloat(longitude)}})
        });
      } catch (error) {
        console.log('handleCurrentLocation error', error)
      }
    }
  };

  handleSubmit = async e => {
    e.preventDefault();
    try {
      if (this.state.concern && this.state.age) {
        this.props.startScroll(e, 1396);
        await this.postToDB();
      }
    } catch (error) {
      console.log(error);
    }
  }

  postToDB = async () => {
    // const postBody = {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify({
    //     concern: this.state.concern,
    //     age: this.state.age,
    //     location: this.state.location   
    //   })
    // }
    // try{
    //   const idResponse = await fetch('api/v1/users', postBody);
    //   const id = await idResponse.json();
    //   this.props.saveUser(id)
    //   put user id into state on app for other question's answers
    // } catch (error) {
    //   console.log(error);
    // }
  }

  handleChange = e => {
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