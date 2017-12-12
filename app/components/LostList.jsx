var React = require('react');
var LostItem=require('LostItem');
var ShowImageModal = require('ShowImageModal');

var LostList= React.createClass({
    
getInitialState: function(){    
  return{
      isOpen:false,
      image: '../img/download.jpg',
      itemName: '',
  }  
},    
 
closeModal:function(evt){
    evt.preventDefault(); 
     this.setState({
      isOpen: !this.state.isOpen,
      image: '',
      name: '',
      price: '',
      desc: ''     
    });
},    
   
toggleModal: function(img, name, price, desc, lost_location, owner_name, owner_phone, evt){
    
 evt.preventDefault();   
    this.setState({
      isOpen: !this.state.isOpen,
      image: img,
      name: name,
      price: price,
      desc: desc,
      location:lost_location,
      owner_name:owner_name,
      owner_phone: owner_phone
        
    });   //this changes the state, which makes sure that the children are re rendered   
},    
       
render: function(){

    var{itemsList}=this.props;
    
    var self=this;
    
    var generateLostList=()=>{        
        return itemsList.map(function(item){
            return <LostItem key={item.id} {...item} toggle={self.toggleModal}/>            
        });
    }
     
    return(  
        <div>
          <ShowImageModal show={this.state.isOpen} close={this.closeModal} attributes={this.state}/> 
                  <table className="table table-striped table-hover">
                                <thead>
                                  <tr>
                                    <th>Item Picture</th>  
                                    <th>Item Name</th>
                                    <th>Item Description</th>
                                    <th>Loss Location</th>
                                    <th>Reward Price</th>
                                  </tr>
                                </thead>                   

                                 <tbody>
                                      {generateLostList()}                                          
                                 </tbody>                   
                 </table>
        </div>
    );
}

});
module.exports = LostList;
