import React from "react";
import {BootstrapTable, TableHeaderColumn} from "react-bootstrap-table";
import LostItem1 from "LostItem1";
const locations = [ 'Library', 'Cafeteria', 'Parking Lot', 'NAB', 'Lab', 'Bursar Office', 'Registrar Office'];
import ShowImageModal from 'ShowImageModal';
import FoundModal from 'FoundModal';
import CheckBox from 'CheckBox';
import axios from 'axios';
import {LostList} from "LostList";
import Nav from 'Nav';

const createPriceEditor = (onUpdate, props) => (<PriceEditor onUpdate={ onUpdate } {...props}/>);


class FoundProductsTable extends React.Component {

    constructor(props) {
        super(props);
        var self=this;

        this.state = {
            isOpen: false,
            itemInfo: {},
            items:[{id:1, name:"Camera", found_location:"Library", picture:"1499026213915_watch.jpg", finder_name:"Rafael Nadal", finder_phone:"515-433-2223", finder_email:"syedadilimam93@gmail.com"}],
            itemsPro:[]
        };
    }
    /*
    componentDidMount(){
          axios.get("http://localhost:8080/retrievelost").then((result)=>{
            this.setState({  isOpen: false,
                  itemInfo: {},
                  items: result.data});
          }).catch(function(error){
             console.log(error);
          });
    }
    */
    priceFormatter(cell, row){
        return `<div> $${cell} </div>`;
    }


    toggleModal(img, name, price, desc, lost_location, owner_name, owner_phone, evt){
        evt.preventDefault();
        console.log(this);
        this.setState({isOpen: true,
            itemInfo:{
                image:img,
                name:name,
                reward_price:price,
                description:desc,
                lost_location:lost_location,
                owner_name:owner_name,
                owner_phone:owner_phone}
        });
    }

    closeModal(evt){
        evt.preventDefault();
        this.setState({isOpen: !this.state.isOpen, itemInfo:{}
        });
    }


    imageFormatter(cell, row) {
        return(<LostItem1 {...row} toggle={this.toggleModal.bind(this)}> </LostItem1>);
    }


    render(){
        return(
            <div>
                <Nav/>
               <br/>
                <div className="container report-section">
                <BootstrapTable data={this.state.items} search={ true } options={{clearSearch: true}} striped={true} hover={true} pagination={true}>
                    <TableHeaderColumn dataField="image" dataFormat={this.imageFormatter.bind(this)}  dataAlign="center"  isKey={true}>   Item Picture </TableHeaderColumn>
                    <TableHeaderColumn dataField="name" dataAlign="center" dataSort={true}> Item Name </TableHeaderColumn>
                    <TableHeaderColumn dataField="found_location" dataAlign="center"> Lost Location </TableHeaderColumn>
                    <TableHeaderColumn dataField="finder_name" dataAlign="center"> Finder Name </TableHeaderColumn>
                    <TableHeaderColumn dataField="finder_phone" dataAlign="center"> Finder Phone </TableHeaderColumn>
                    <TableHeaderColumn dataField="finder_email" dataAlign="center"> Finder Email </TableHeaderColumn>
                </BootstrapTable>
               </div>
            </div>
        );
    }
}

const cellEditProp = {
    mode: 'click'
};


module.exports = FoundProductsTable;
