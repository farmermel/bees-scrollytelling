import React from 'react';
import ReactDOM from 'react-dom';
import { ParallaxProvider } from 'react-scroll-parallax';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <ParallaxProvider>
    <App />
  </ParallaxProvider>, document.getElementById('root'));
registerServiceWorker();