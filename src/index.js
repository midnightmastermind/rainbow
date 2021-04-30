import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from "react-router-dom";
import ScrollToTop from './ScrollToTop';
import './index.css';

ReactDOM.render(
  <Router>
	<ScrollToTop>
	  <App />
	</ScrollToTop>
  </Router>, document.getElementById('root'));
