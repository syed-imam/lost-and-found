import React from 'react';
import FoundModal from 'FoundModal';

class CheckBox extends React.Component {
    constructor(props) {
        super();
        this.state={items:[]};
    }

    showModal(){
      return <FoundModal/>
    }

    saveItem(){



        /*
        if(this.checked)
        {
            itemsArray.push(id);
            this.setState({items: itemsArray});
        }
*/
    }

    render() {

        var {id, name, description, lost_location, image, reward_price, toggle, owner_name, owner_phone, save} = this.props;
        var aws_picture = "https://s3.amazonaws.com/lost-and-found-bucket/"+image;

        return (
            <div className="checkbox">
                <label>
                    <input id="checkbox" type="checkbox" ref="check" onChange={()=>save(id, this.refs.check.checked)}/>
                    <span className="cr"><i className="cr-icon glyphicon glyphicon-ok"></i></span>
                </label>
            </div>
        );
    }
}
export default CheckBox;

