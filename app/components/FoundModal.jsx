var React = require('react');
var Modal= require('react-bootstrap/lib/Modal');
var Button= require('react-bootstrap/lib/Button');
var Popover= require('react-bootstrap/lib/Popover');
var OverlayTrigger= require('react-bootstrap/lib/OverlayTrigger');
var Tooltip= require('react-bootstrap/lib/Tooltip');

var FoundModal= React.createClass({
    render: function(){
        const popover = (
            <Popover id="modal-popover" title="popover">
            </Popover>
        );
        const tooltip = (
            <Tooltip id="modal-tooltip">
            </Tooltip>
        );
        return(
            <div>
                <Modal bsSize="large" aria-labelledby="contained-modal-title-lg">
                    <Modal.Header closeButton>
                        <Modal.Title>{name}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>


                        <div className="row">
                            <div className="col-sm-6">
                                <img src={image} alt="item picture" height="100%" width="100%"/>
                            </div>
                            <div className="col-sm-6">
                                <div className="form-group">
                                    <div className="row">
                                        <h3><label className="form-label">Description</label></h3>
                                        {desc}
                                    </div>
                                    <div className="row">
                                        <h3><label className="form-label">Price</label></h3>
                                        ${price}
                                    </div>
                                    <div className="row">
                                        <h3><label className="form-label">Lost Location</label></h3>
                                        {location}
                                    </div>
                                    <div className="row">
                                        <h3><label className="form-label">Owner Name</label></h3>
                                        {owner_name}
                                    </div>
                                    <div className="row">
                                        <h3><label className="form-label">Owner Phone</label></h3>
                                        {owner_phone}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <h4>Claim this item?</h4>
                        <p><OverlayTrigger overlay={tooltip}><a href="#">tooltip</a></OverlayTrigger></p>

                        <hr/>

                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.props.close}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
});


module.exports = FoundModal;
