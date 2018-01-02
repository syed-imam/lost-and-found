var React = require('react');
var ShowImageModal = require('ShowImageModal');
var Footer=require('Footer');
var LostList=require('LostList');
var Nav=require('Nav');
var axios=require('axios');  
var lostReports=[];    
var listItems;
import ReactPaginate from 'react-paginate';

var Main = React.createClass({   
    
getInitialState: function(){
    
  return{      
      isOpen:false,
      image: '../img/download.jpg',
      itemName: '',
      itemsList:[]
  }  
},   

passPaginationParameters: function(start, end){
   var self1=this;
   self1.getLostReports(start,end).then(function(res){
       
           self1.setState({                
                 itemsList:res
            });
   });    
},
    
getLostReports:function(start, end){
   /*
   return (axios.get("http://localhost:8080/retrievelost?start="+start+"&end="+end+"")
            .then(function(response){
            console.log(response.data);
               return response.data;
          }).catch(function(error){
                return error;
            }));
            */
   return [{id:1, image:"1499053206521_watch.jpg", name:"Car", reward_price:56, description:"Big black car", lost_location:"Unknown", owner_name:"Adil Imam", owner_phone:"516-435-3556"}];
},    
/*    
is invoked immediately after a component is mounted. Initialization that requires DOM nodes should go here. If you need to load data from a remote endpoint, this is a good place to instantiate the network request. Setting state in this method will trigger a re-rendering.    
*/
componentDidMount:function() {

    var self = this;
    /*
    self.getLostReports(0,10).then(function(res){
        //set state is going to re render the component
              self.setState({
                   itemsList:res
              });
      });
      */
    var res = self.getLostReports(0, 10);
    self.setState({
        itemsList:res
    });
}
,
    
render: function(){

    var listItems;       
    return(
        <div>   
          <Nav/>    
             <div className="container">
               <div className="report-section">

                <div className="row">
                  <div className="col-lg-12">
                    <div className="page-header">

                    </div>

                    <div className="bs-component">                     
                       <LostList itemsList={this.state.itemsList}/>                       
                    </div>
                  </div>
                </div>

               </div>
                   <ShowImageModal show={this.state.isOpen} close={this.closeModal} attributes={this.state}/>
               </div>

            { /*   <div className="container">
                <div className="row">
                    <div className="bs-component">
                      <ul className="pagination pagination-lg">
                        <li className="disabled"><a href="#">&laquo;</a></li>
                        <li className="active"><a href="#" onClick={() => this.passPaginationParameters(0,10)} >1</a></li>
                        <li><a href="#" onClick={() => this.passPaginationParameters(10,20)}>2</a></li>
                        <li><a href="#" onClick={() => this.passPaginationParameters(20,30)}>3</a></li>
                        <li><a href="#" onClick={() => this.passPaginationParameters(30,40)}>4</a></li>
                        <li><a href="#" onClick={() => this.passPaginationParameters(40,50)}>5</a></li>
                        <li><a href="#">&raquo;</a></li>
                      </ul>
                    </div>
             </div>
         </div> */}

        </div>                
    );
}
});
module.exports = Main;
