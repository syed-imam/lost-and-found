var React = require('react');
var {Link} = require('react-router');

var Nav = React.createClass({
  render: function () {
    return (
        <div className="navbar navbar-default navbar-fixed-top custom-nav">
        <div className="container">
          <div className="navbar-header">
            <a href="../" className="navbar-brand pull-left logo"><img src="../img/lostandfound.png" height="50px" width="auto"></img></a>
            <button className="navbar-toggle" type="button" data-toggle="collapse" data-target="#navbar-main">
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
          </div>
          <div className="navbar-collapse collapse" id="navbar-main">
            <ul className="nav navbar-nav">
             
               
              <li>
                   <Link to="/"> View Loss Reports</Link>
              </li>
              <li>
                 <Link to="/lost">Report Loss</Link>        
              </li>
        
              <li>
                <Link to="/found">Report Found</Link>    
              </li>
              
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li><a href="http://syedadilimam.com/" target="_blank">Donation to Adil Imam</a></li>
            </ul>
          </div>
        
        
        </div>
          
           
    </div>

          
    );
  }
});

module.exports = Nav;
