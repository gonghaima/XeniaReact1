import 'normalize.css/normalize.css';
import 'styles/App.css';
import './lib/material.js';
import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes';

// Render the main component into the dom
ReactDOM.render(
    <Router history={browserHistory} routes={routes}/>, document.getElementById('app'));
