var Footer=require('Footer');
var Nav=require('Nav');
var axios=require('axios');
var path = require('path');

import LoadingComponent from 'LoadingComponent';
import React, { Component } from 'react';
import ImagesUploader from 'react-images-uploader';


var About = React.createClass({

getInitialState: function(){
    return{
        itemName:'',
        itemDesc:'',
        lostLocation:'',
        itemPrice:'',
        image:''
    }    
},    
handleForm: function(e) {
    e.preventDefault();
    axios.post("http://54.91.15.90:9090/uploadToS3", {image: this.state.image}).then(function (data) {
        console.log(data);
    });
    //I ll make a request here to upload images!!
    var name = this.refs.itemName.value;
    var desc = this.refs.itemDesc.value;
    var lostLocation = this.refs.lostLocation.value;
    var itemPrice = this.refs.itemPrice.value;
    var ownerName = this.refs.ownerName.value;
    var ownerPhone = this.refs.ownerPhone.value;
    var itemPicture = this.state.images;  //this is an image file

    this.clearFunction();
//this inside of this doesnt know what it is
    this.setState({
        itemName: name,
        itemDesc: desc,
        itemPrice: itemPrice,
        lostLocation: lostLocation,
        ownerName: ownerName,
        ownerPhone: ownerPhone,
        image: path.basename(this.state.image)
    }, function(){
        const config2 = {
            headers: {'content-type': 'application/json'}   //it has to be multipart form data
        }
        const url1 = 'http://default-environment.3dqrftpbm9.us-east-1.elasticbeanstalk.com:8080/lostdata/';
        var data2 = this.state;

        axios.post(url1, data2, config2)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error){
                console.log(error);
            });
    });
},

clearFunction:function(){
  this.refs.itemName.value='';
  this.refs.itemDesc.value='';    
  this.refs.lostLocation.value=''; 
  this.refs.itemPrice.value='';
  this.refs.ownerName.value='';
  this.refs.ownerPhone.value='';    
},    
render: function(){
    return (
<div>        
    <Nav/>
      <br/><br/>     
      <div className="container">
        <div className="row">
       
          <div className="well bs-component">
            <form className="form-horizontal" onSubmit={this.handleForm}>
              <fieldset>
                <legend>Report Loss</legend>
                <div className="form-group">
                  <label htmlFor="inputEmail" className="col-lg-2 control-label">Item Name</label>
                  <div className="col-lg-10">
                    <input type="text" ref="itemName" className="form-control" id="inputEmail" placeholder="Item Name"/>
                  </div>
                </div>
          
                <div className="form-group">
                  <label htmlFor="textArea" className="col-lg-2 control-label">Item Description</label>
                  <div className="col-lg-10">
                    <textarea className="form-control" ref="itemDesc" rows={3} id="textArea" defaultValue={""} />
                    <span className="help-block"></span>
                  </div>
                </div>
               
                <div className="form-group">
                  <label htmlFor="select" className="col-lg-2 control-label">Loss Location</label>
                  <div className="col-lg-10">
                    <select className="form-control" ref="lostLocation" id="select">
                      <option>Library</option>
                      <option>Athletic Center</option>
                      <option>Cafeteria</option>
                      <option>Computer Lab</option>
                      <option>Common Section</option>
                    </select>
                  </div>
                </div>
                
                <div className="form-group">
                  <label htmlFor="inputEmail" className="col-lg-2 control-label">Item Price</label>
                  <div className="col-lg-10">
                    <input type="text" ref="itemPrice" className="form-control" placeholder="Item Price" />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="inputEmail" className="col-lg-2 control-label">Owner Name</label>
                  <div className="col-lg-10">
                    <input type="text" ref="ownerName" className="form-control" id="inputEmail" placeholder="Owner Name"/>
                  </div>
                </div>
                
                <div className="form-group">
                  <label htmlFor="inputEmail" className="col-lg-2 control-label">Owner Cell Phone</label>
                      <div className="col-lg-10">
                        <input type="text" ref="ownerPhone" className="form-control" id="inputEmail" placeholder="XXX-XXX-XXXX"/>
                      </div>
                </div>                                                                                      

                 <div className="form-group">
                  <label htmlFor="inputEmail" className="col-lg-2 control-label">Item Picture</label>
                  <div className="col-lg-10">
                   <ImagesUploader url="http://54.91.15.90:9090/upload"
                          optimisticPreviews={true}
                          multiple={false}
                          onLoadEnd={(err , string) => {
                              if (err) {
                                  console.error(err);
                              }
                                this.state.image=string;
                          }}
                      />
                  </div>
                </div>
                 
                <div className="form-group">
                  <div className="col-lg-10 col-lg-offset-2">
                    <button type="reset" className="btn btn-default">Cancel</button>
                    <button type="submit" className="btn btn-primary">Submit</button>
                  </div>
                </div>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
    )
  }
});

module.exports = About;
