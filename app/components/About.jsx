var Footer=require('Footer');
var Nav=require('Nav');
var axios=require('axios');
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
    }    
},    
handleForm: function(e){
  LoadingComponent();
  e.preventDefault();
  var name=this.refs.itemName.value;
  var desc=this.refs.itemDesc.value;    
  var lostLocation=this.refs.lostLocation.value; 
  var itemPrice=this.refs.itemPrice.value;
  var ownerName=this.refs.ownerName.value;
  var ownerPhone=this.refs.ownerPhone.value;    
  var itemPicture=this.refs.itemPicture.files[0];  //this is an image file

  this.clearFunction();
    
    console.log(name);
    console.log(desc);
    console.log(lostLocation);
    console.log(itemPrice);
    console.log(itemPicture);

//this inside of this doesnt know what it is    
this.setState({
    itemName:name,
    itemDesc:desc,   
    itemPrice:itemPrice,
    lostLocation:lostLocation,
    ownerName:ownerName,
    ownerPhone:ownerPhone     
  }, function(){  
  //ajax this info
    var data = new FormData();
    data.append('file', itemPicture);
    const config1 = {
            headers: {'content-type': 'multipart/form-data'}   //it has to be multipart form data
        }
      const url ='http://localhost:8080/upload/';
    
    var data2=this.state;
   
      axios.post(url, data, config1)
            .then(function(response){            
                 // console.log(response);
                   const config2 = {
                      headers: {'content-type': 'application/json'}   //it has to be multipart form data
                   }

     
    const url1 ='http://localhost:8080/lostdata/';
  
    axios.post(url1,data2,config2)
            .then(function(response){

                console.log(response);
                LoadingComponent();
            })
            .catch(function(error) {
                console.log(error);
                LoadingComponent();
            });     
      
         }).catch(function(error) {
                console.log(error);
                LoadingComponent();
            });
    
    console.log(this.state);
});   //this.setState is asynchronous
},
    
uploadPhotoToS3:function(){
    
    
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
                   <ImagesUploader url="http://localhost:3000/multiple"
                          optimisticPreviews={true}
                          multiple={true}
                          onLoadEnd={(err) => {
                              if (err) {
                                  console.error(err);
                              }
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
          <div id="loading-spinner"></div>
      </div>
    </div>
    )
  }
});

module.exports = About;
