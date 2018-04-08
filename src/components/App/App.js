import React, { Component } from 'react';
import Header from '../Header/Header';
import { Impact } from '../Impact/Impact';
import { Help } from '../Help/Help';
import { BeeFacts } from '../BeeFacts/BeeFacts';
import { Problems } from '../Problems/Problems';
import SwitchButton from '../SwitchButton/SwitchButton';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      scrollPosition: 750
    }
  }

  componentDidMount = () => {
    window.addEventListener('scroll', this.stopScroll);
  }

  stopScroll = () => {
    if(window.scrollY > this.state.scrollPosition) {
      window.scrollTo(0, this.state.scrollPosition)
    }
    console.log(window.scrollY)

  }

  startScroll = (e, scrollPosition) => {
    e.preventDefault();
    this.setState({ scrollPosition })
  }

  render() {
    return (
      <div className="App" onScroll={() => console.log('hi')}>
        <SwitchButton />
        <Header startScroll={this.startScroll} />
        <Impact />
        <BeeFacts />
        <Problems />
        <Help />
      </div>
    );
  }
}

export default App;