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
        <link href="https://fonts.googleapis.com/css?family=Raleway" rel="stylesheet"/>
        <div class="remember-me">
        <input type="checkbox" 
          name="remember_me" 
          id="remember_me"
          checked/>
        <label for="remember_me">
          <div class="switch">
            <span class="dot"></span>
          </div>
          Switch&nbsp;&nbsp;&nbsp;&nbsp;
        </label>
      </div>
        
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