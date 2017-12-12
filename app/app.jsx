var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');
var About = require('About');

ReactDOM.render(
 <Router history={hashHistory}>
    <Route path="/" component={Main}>
     
    </Route> 
    
    <Route path="lost" component={About}>
     
    </Route>   
    
  </Router>,
  document.getElementById('app')
);
