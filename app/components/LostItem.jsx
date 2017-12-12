var React = require('react');
var ShowImageModal = require('ShowImageModal');

var LostItem= React.createClass({   
    
getInitialState: function(){    
  return{
         isOpen:false
  }  
},

render: function(){
    
    var{name, description, lost_location, picture, reward_price, toggle, owner_name, owner_phone}=this.props;
    
    var aws_picture="https://s3.amazonaws.com/lost-and-found-bucket/"+picture;
    
    return(
        <a href="" onClick={(event)=>toggle(aws_picture, name, reward_price, description, lost_location, owner_name, owner_phone, event)}>
            <tr>
                <td><img src={aws_picture}/></td>
                <td>{name}</td>
                <td>{description}</td>
                <td>{lost_location}</td>
                <td>${reward_price}</td>
            </tr>
        </a>);
}
});
module.exports = LostItem;
