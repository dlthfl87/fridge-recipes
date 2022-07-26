import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router} from 'react-router-dom';
import App from './components/App.js';
import ScrollToTop from './hooks/ScrollToTop';

ReactDOM.render(
  <Router>
    <ScrollToTop />
    <App/>
  </Router>, document.getElementById('app'));