import React from 'react';
import {BootstrapTable,TableHeaderColumn} from 'react-bootstrap-table'
import "../../../node_modules/react-bootstrap-table/dist/react-bootstrap-table.min.css";



const cellEditProp = {
    mode: 'click'
  };
const products=[{id:1,'name':'test1','price':123},{id:2,'name':'test1','price':123}];
  export default class ClickToSelectTable extends React.Component {
    constructor(props) {
        super(props);
    
        this.options = {
          onPageChange: this.onPageChange.bind(this),
          onSizePerPageList: this.sizePerPageListChange.bind(this)
        };
      }
    
      sizePerPageListChange(sizePerPage) {
        console.log(`sizePerPage: ${sizePerPage}`);
      }
    
      onPageChange(page, sizePerPage) {
        console.log(`page: ${page}, sizePerPage: ${sizePerPage}`);
      }
    render() {
      return (
          <div>
          <div>
              <h2 align="center">Customer Info</h2>
          </div>
        <BootstrapTable 
            data={ products } 
            pagination
            options={ this.options }
            >
            <TableHeaderColumn dataField='id' isKey>IP ID</TableHeaderColumn>
            <TableHeaderColumn dataField='name'>Equipment Name</TableHeaderColumn>
            <TableHeaderColumn dataField='price'>IP Address</TableHeaderColumn>
            <TableHeaderColumn dataField='price'>IP Address2</TableHeaderColumn>
            <TableHeaderColumn dataField='price'>IP Address3</TableHeaderColumn>
            <TableHeaderColumn dataField='price'>IP Address4</TableHeaderColumn>
            <TableHeaderColumn dataField='price'>HW Location</TableHeaderColumn>
            <TableHeaderColumn dataField='price'>Tag</TableHeaderColumn>
            <TableHeaderColumn dataField='price'>Manage</TableHeaderColumn>

        </BootstrapTable>
        </div>
      );
    }
  }