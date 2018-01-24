var React = require('react');
var Modal= require('react-bootstrap/lib/Modal');
var Button= require('react-bootstrap/lib/Button');
var Popover= require('react-bootstrap/lib/Popover');
var OverlayTrigger= require('react-bootstrap/lib/OverlayTrigger');
var Tooltip= require('react-bootstrap/lib/Tooltip');

var SubmitConfirm = React.createClass({

    something: function(){
        console.log("Im here again");
    },

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
                <Modal bsSize="large" aria-labelledby="contained-modal-title-lg" show={this.props.show} onHide={this.props.hide}>
                    <Modal.Header closeButton>
                        <Modal.Title>Confirmation</Modal.Title>
                    </Modal.Header>
                      <Modal.Body>
                        <div className="row">
                            <h3>Loss Item successfully reported</h3>
                        </div>
                        <hr/>
                    </Modal.Body>
                    <Modal.Footer>
                        <button onClick={this.props.hide} className="btn-primary">Close</button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
});

module.exports = SubmitConfirm;
