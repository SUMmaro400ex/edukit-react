var React = require('react');
var ReactDOM = require('react-dom');
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
var routes = require('./config/routes');

ReactDOM.render(
    routes,
    document.getElementById('app')
);
