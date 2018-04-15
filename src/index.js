import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import './lib/material.js';
import routes from './routes';

// import App from './components/Main'; Render the main component into the dom
// ReactDOM.render(<App />, document.getElementById('app'));
ReactDOM.render(
    <Router history={browserHistory} routes={routes}/>, document.getElementById('app'));
