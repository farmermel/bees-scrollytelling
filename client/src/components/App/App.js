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
    };
  }

  componentDidMount = () => {
    window.addEventListener('scroll', this.stopScroll);
    document.querySelector('.progress-container').style.width =  document.documentElement.clientHeight-10 + 'px';
  };

  stopScroll = () => {
    this.manageGraphDisplay();
    this.myFunction();
    if (
      this.state.questionsEnabled &&
      window.scrollY > this.state.scrollPosition
    ) {
      window.scrollTo(0, this.state.scrollPosition);
    }
  };

  manageGraphDisplay = () => {
    if (window.scrollY > 4450 && this.state.displayGraphCover) {
      console.log('changed');
      this.setState({ displayGraphCover: false });
    } else if (!this.state.displayGraphCover && window.scrollY < 3992) {
      this.setState({ displayGraphCover: true });
    }
  };

  startScroll = (e, scrollPosition) => {
    e.preventDefault();
    this.setState({ scrollPosition });
  };

  saveUser = id => {
    this.setState({
      currentUserId: id
    });
  };

  toggleQuestionsEnabled = () => {
    this.setState({
      questionsEnabled: !this.state.questionsEnabled
    });
  };

  

  myFunction = () => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrolled = winScroll / height * 100;
    document.getElementById('bee-bar').style.width = scrolled + '%';
  };

  render() {
    return (
      <div className="App" onScroll={() => console.log('hi')}>
        <div className="progress-container">
          <div className="progress-bar" id="bee-bar" />
        </div>
        <SwitchButton toggleQuestionsEnabled={this.toggleQuestionsEnabled} />
        <Header
          startScroll={this.startScroll}
          questionsEnabled={this.state.questionsEnabled}
          saveUser={this.saveUser}
        />
        <Impact
          startScroll={this.startScroll}
          questionsEnabled={this.state.questionsEnabled}
          currentUserId={this.state.currentUserId}
          displayGraphCover={this.state.displayGraphCover}
        />
        <BeeFacts
          questionsEnabled={this.state.questionsEnabled}
          startScroll={this.startScroll}
          currentUserId={this.state.currentUserId}
        />
        <Problems
          questionsEnabled={this.state.questionsEnabled}
          startScroll={this.startScroll}
          currentUserId={this.state.currentUserId}
        />
        <Help questionsEnabled={this.state.questionsEnabled} />
        <Statistics userId={this.state.currentUserId} />
      </div>
    );
  }
}

export default App;
