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
    //on click 
    //questionsEnabled = !this.state.qusEn
    //pass this method as props to switch button
    //pass questionsEnabled as prop
    //to all components with questions
    //eventually when clicked conditionally render questions
    //for now just allow scroll without answering
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
        <BeeFacts questionsEnabled={ this.state.questionsEnabled } />
        <Problems questionsEnabled={ this.state.questionsEnabled } />
        <Help questionsEnabled={ this.state.questionsEnabled } />
      </div>
    );
  }
}

export default App;