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
                        <Modal.Title>Found Apple</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>


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
