import React, { Component } from 'react';
import Header from '../Header/Header';
import { Impact } from '../Impact/Impact';
import { Help } from '../Help/Help';
import { BeeFacts } from '../BeeFacts/BeeFacts';
import { Problems } from '../Problems/Problems';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Impact />
        <BeeFacts />
        <Problems />
        <Help />
      </div>
    );
  }
}

export default App;