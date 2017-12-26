import React from "react";
import {BootstrapTable, TableHeaderColumn} from "react-bootstrap-table";


class Welcome extends React.Component {
    // products will be presented by react-bootstrap-table


// It's a data format example.
    priceFormatter(cell, row){
        return '<i class="glyphicon glyphicon-usd"></i> ' + cell;
    }

    render() {

        var products = [{
            id: 1,
            name: "Item name 1",
            price: 100
        },{
            id: 2,
            name: "Item name 2",
            price: 100
        }];

        return(
           <BootstrapTable data={products} striped={true} hover={true}>
                   <TableHeaderColumn dataField="id" isKey={true} dataAlign="center" dataSort={true}>Item Picture</TableHeaderColumn>
                   <TableHeaderColumn dataField="name" dataSort={true}>Item Name</TableHeaderColumn>
                   <TableHeaderColumn dataField="price" dataFormat={this.priceFormatter}>Item Description</TableHeaderColumn>
                   <TableHeaderColumn dataField="price" dataFormat={this.priceFormatter}>Loss Location</TableHeaderColumn>
                   <TableHeaderColumn dataField="price" dataFormat={this.priceFormatter}>Reward Price</TableHeaderColumn>
           </BootstrapTable>);
    }

}

export default Welcome;
