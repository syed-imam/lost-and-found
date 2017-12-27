var React = require('react');
var ShowImageModal = require('ShowImageModal');

var LostItem1= React.createClass({
        render: function () {
            var {name, description, lost_location, image, reward_price, toggle, owner_name, owner_phone} = this.props;
            var aws_picture = "https://s3.amazonaws.com/lost-and-found-bucket/"+image;
            return (
                <a href="" onClick={(event)=>toggle(aws_picture, name, reward_price, description, lost_location, owner_name, owner_phone, event)}> <img src={aws_picture}/></a>
            );
        }
    }
);
module.exports = LostItem1;
