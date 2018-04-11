import React, { Component } from 'react';
import Header from '../Header/Header';
import Impact from '../Impact/Impact';
import { Help } from '../Help/Help';
import { BeeFacts } from '../BeeFacts/BeeFacts';
import { Problems } from '../Problems/Problems';
import SwitchButton from '../SwitchButton/SwitchButton';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      scrollPosition: 750,
      questionsEnabled: true,
      currentUserId: null
    }
  }

  componentDidMount = () => {
    window.addEventListener('scroll', this.stopScroll);
  }

  stopScroll = () => {
    if(this.state.questionsEnabled && window.scrollY > this.state.scrollPosition) {
      window.scrollTo(0, this.state.scrollPosition)
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
                currentUserId={ this.state.currentUserId } />
        <BeeFacts questionsEnabled={ this.state.questionsEnabled }
                  startScroll={ this.startScroll }
                  currentUserId={ this.currentUserId } />
        <Problems questionsEnabled={ this.state.questionsEnabled }
                  startScroll={ this.startScroll }
                  currentUserId={ this.currentUserId } />
        <Help questionsEnabled={ this.state.questionsEnabled } />
      </div>
    );
  }
}

export default App;