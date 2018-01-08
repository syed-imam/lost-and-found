import React from "react";
import {BootstrapTable, TableHeaderColumn} from "react-bootstrap-table";
import LostItem1 from "LostItem1";
const locations = [ 'Library', 'Cafeteria', 'Parking Lot', 'NAB', 'Lab', 'Bursar Office', 'Registrar Office'];
import ShowImageModal from 'ShowImageModal';
import CheckBox from 'CheckBox';
import axios from 'axios';

const createPriceEditor = (onUpdate, props) => (<PriceEditor onUpdate={ onUpdate } {...props}/>);


class LostProductsTable extends React.Component {
      constructor(props) {
        super(props);
        var self=this;

        this.state = {
            isOpen: false,
            itemInfo: {},
            items:[],
            itemsPro:[]
        };
    }

    componentDidMount(){

          axios.get("http://localhost:8080/retrievelost").then((result)=>{
            this.setState({  isOpen: false,
                  itemInfo: {},
                  items: result.data});
          }).catch(function(error){
             console.log(error);
          });
    }

    priceFormatter(cell, row){
        return `<div> $${cell} </div>`;
    }

    saveItems(id, value){

        if(value){
            var itemsA=this.state.itemsPro;
            itemsA.push(id);
            this.setState({itemsPro: itemsA});
            console.log(this.state.itemsPro);
        }
        else{
            var itemsA=this.state.itemsPro;
            itemsA = itemsA.filter(item => item !== id);
            this.setState({itemsPro: itemsA});
            console.log(this.state.itemsPro);
        }
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

    foundIt(cell, row){
        return(<CheckBox {...row} save={this.saveItems.bind(this)} toggle={this.toggleModal.bind(this)}/>);
                }

    render(){

        var products= [{
            id:1,
            image:"1499053206521_watch.jpg",
            name:"Car",
            reward_price:56,
            description:"Big black car",
            lost_location:"Unknown",
            owner_name:"Adil Imam",
            owner_phone:"516-435-3556"}
            ,{
                id:2,
                image:"1509694318776_syed.jpg",
                name:"Car",
                reward_price:56,
                description:"Big black car",
                lost_location:"Unknown",
                owner_name:"Adil Imam",
                owner_phone:"516-435-3556"},
            {
                id:3,
                image:"1499053206521_watch.jpg",
                name:"Car",
                reward_price:56,
                description:"Big black car",
                lost_location:"Unknown",
                owner_name:"Adil Imam",
                owner_phone:"516-435-3556"},
            {
                id:4,
                image:"1499053206521_watch.jpg",
                name:"Car",
                reward_price:56,
                description:"Big black car",
                lost_location:"Unknown",
                owner_name:"Adil Imam",
                owner_phone:"516-435-3556"},
            {
                id:5,
                image:"1499053206521_watch.jpg",
                name:"Car",
                reward_price:56,
                description:"Big black car",
                lost_location:"Unknown",
                owner_name:"Adil Imam",
                owner_phone:"516-435-3556"},
            {
                id:6,
                image:"1499053206521_watch.jpg",
                name:"Car",
                reward_price:56,
                description:"Big black car",
                lost_location:"Unknown",
                owner_name:"Adil Imam",
                owner_phone:"516-435-3556"},
            {
                id:7,
                image:"1499053206521_watch.jpg",
                name:"Car",
                reward_price:56,
                description:"Big black car",
                lost_location:"Unknown",
                owner_name:"Adil Imam",
                owner_phone:"516-435-3556"},
            {
                id:8,
                image:"1499053206521_watch.jpg",
                name:"Car",
                reward_price:56,
                description:"Big black car",
                lost_location:"Unknown",
                owner_name:"Adil Imam",
                owner_phone:"516-435-3556"},
            {
                id:9,
                image:"1499053206521_watch.jpg",
                name:"Car",
                reward_price:26,
                description:"Big black car",
                lost_location:"Unknown",
                owner_name:"Adil Imam",
                owner_phone:"516-435-3556"},
            {
                id:10,
                image:"1499053206521_watch.jpg",
                name:"Car",
                reward_price:76,
                description:"Big black car",
                lost_location:"Unknown",
                owner_name:"Adil Imam",
                owner_phone:"516-435-3556"},
            {
                id:11,
                image:"1499053206521_watch.jpg",
                name:"Car",
                reward_price:16,
                description:"Big black car",
                lost_location:"Unknown",
                owner_name:"Adil Imam",
                owner_phone:"516-435-3556"}
        ];

        return(
           <div>
                <ShowImageModal show={this.state.isOpen} close={this.closeModal.bind(this)} attributes={this.state.itemInfo}/>
                <input type="button" className="btn btn-primary" onClick={this.closeModal} value="Found it!"></input>
                <BootstrapTable data={this.state.items} search={ true } options={{clearSearch: true}} striped={true} hover={true} cellEdit={cellEditProp}  pagination={true}>
                   <TableHeaderColumn dataAlign="center"  width='60' dataFormat={this.foundIt.bind(this)} editable={ false } ><i className="glyphicon glyphicon-search"></i> </TableHeaderColumn>
                   <TableHeaderColumn dataField="image" dataFormat={this.imageFormatter.bind(this)}  dataAlign="center"  isKey={true}>   Item Picture </TableHeaderColumn>
                   <TableHeaderColumn dataField="name" dataAlign="center" dataSort={true}> Item Name </TableHeaderColumn>
                   <TableHeaderColumn dataField="reward_price" dataAlign="center" dataFormat={this.priceFormatter} dataSort={ true }> Reward Price </TableHeaderColumn>
                   <TableHeaderColumn dataField="description" dataAlign="center"> Item Description </TableHeaderColumn>
                   <TableHeaderColumn dataField="lost_location" dataAlign="center"  editable={ { type: 'select', options: { values: locations } } }> Lost Location </TableHeaderColumn>
                   <TableHeaderColumn dataField="owner_name" dataAlign="center" editable={false}> Owner </TableHeaderColumn>
                   <TableHeaderColumn dataField="owner_phone" dataAlign="center"> Phone </TableHeaderColumn>
                </BootstrapTable>
           </div>
        );

    }
}

const cellEditProp = {
    mode: 'click'
};


class PriceEditor extends React.Component {
    constructor(props) {
        super(props);
        this.updateData = this.updateData.bind(this);
        this.state = { amount: props.defaultValue.amount, location: props.defaultValue.location };
    }
    updateData() {
        this.props.onUpdate({ amount: this.state.amount, location: this.state.location });
    }
    render() {
        return (
            <div>
                <select className="input-sm" value={ this.state.location } onKeyDown={ this.props.onKeyDown } onChange={ (ev) => { this.setState({ location: ev.currentTarget.value }); } } >
                  { locations.map(location => (<option key={ location } value={ location }>{ location }</option>)) }
                </select>
           </div>
        );
    }
}
export default LostProductsTable;
