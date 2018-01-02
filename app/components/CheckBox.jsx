import React from 'react';
import FoundModal from 'FoundModal';

class CheckBox extends React.Component {
    constructor(props) {
        super();
        this.state = {item: props.item};
    }

    showModal(){
      return <FoundModal/>
    }

    render() {

        var {name, description, lost_location, image, reward_price, toggle, owner_name, owner_phone} = this.props;
        var aws_picture = "https://s3.amazonaws.com/lost-and-found-bucket/"+image;
        return (
            <div className="checkbox">
                <label>
                    <input id="checkbox" type="checkbox"/>
                    <span className="cr"><i className="cr-icon glyphicon glyphicon-ok"></i></span>
                </label>
            </div>
        );
    }
}
export default CheckBox;

