var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');
var About = require('About');
var FoundProductsTable = require('FoundProductsTable');

ReactDOM.render(
 <Router history={hashHistory}>
    <Route path="/" component={Main}></Route>
    
    <Route path="lost" component={About}></Route>

    <Route path="found" component={FoundProductsTable}></Route>

 </Router>,
  document.getElementById('app')
);
