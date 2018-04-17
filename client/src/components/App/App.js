import React, { Component } from 'react';
import SwitchButton from '../SwitchButton/SwitchButton';
import Statistics from '../Statistics/Statistics';
import BeeFacts from '../BeeFacts/BeeFacts';
import Problems from '../Problems/Problems';
import Header from '../Header/Header';
import Impact from '../Impact/Impact';
import Help from '../Help/Help';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      scrollPosition: 750,
      questionsEnabled: true,
      currentUserId: null,
      displayGraphCover: true
    }
  }

  componentDidMount = () => {
    window.addEventListener('scroll', this.stopScroll);
  }

  stopScroll = () => {
    console.log(window.scrollY)
    this.manageGraphDisplay();
    if (this.state.questionsEnabled && window.scrollY > this.state.scrollPosition) {
      window.scrollTo(0, this.state.scrollPosition)
    }
  }

  manageGraphDisplay = () => {
    if (window.scrollY > 5010 && this.state.displayGraphCover) {
      console.log('changed')
      this.setState({ displayGraphCover: false })
    } else if (!this.state.displayGraphCover && window.scrollY < 4561) {
      this.setState({ displayGraphCover: true })
    }
  }

  startScroll = (e, scrollPosition) => {
    e.preventDefault();
    this.setState({ scrollPosition })
  }

  saveUser = id => {
    this.setState({
      currentUserId: id
    })
  }

  toggleQuestionsEnabled = () => {
    this.setState({
      questionsEnabled: !this.state.questionsEnabled
    });
  }

  render() {
    return (
      <div className="App" onScroll={() => console.log('hi')}>
        <SwitchButton toggleQuestionsEnabled={ this.toggleQuestionsEnabled } />
        <Header startScroll={ this.startScroll }
                questionsEnabled={ this.state.questionsEnabled }
                saveUser={ this.saveUser } />
        <Impact startScroll={ this.startScroll }
                questionsEnabled={ this.state.questionsEnabled }
                currentUserId={ this.state.currentUserId }
                displayGraphCover={ this.state.displayGraphCover } />
        <BeeFacts questionsEnabled={ this.state.questionsEnabled }
                  startScroll={ this.startScroll }
                  currentUserId={ this.state.currentUserId } />
        <Problems questionsEnabled={ this.state.questionsEnabled }
                  startScroll={ this.startScroll }
                  currentUserId={ this.state.currentUserId } />
        <Help questionsEnabled={ this.state.questionsEnabled } />
        <Statistics userId={ this.state.currentUserId } />
      </div>
    );
  }
}

export default App;