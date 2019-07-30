import React from 'react';
import {BootstrapTable,TableHeaderColumn} from 'react-bootstrap-table'
import RowEditor from './RowEditor';
import RowEditor1 from './RowEditor1';

function attachFormatter(cell, row){
  return (
     <RowEditor1 row={row} />
  );
}

  export default class EmpInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          showModal: false,
          selectedRow: null
         };
        this.options = {
          onPageChange: this.onPageChange.bind(this),
          onSizePerPageList: this.sizePerPageListChange.bind(this)
        };
      }
      openModal() {
        this.setState((prevState, props) => {
         return {
          selectedRow: props.row,
          showModal: true
         }
        });
       }
    
      sizePerPageListChange(sizePerPage) {
        console.log(`sizePerPage: ${sizePerPage}`);
      }
    
      onPageChange(page, sizePerPage) {
        console.log(`page: ${page}, sizePerPage: ${sizePerPage}`);
      }
     
      createCustomDeleteButton = (onBtnClick) => {
        
        return (
          <button style={ { color: 'red' } } onClick={()=>{this.props.onBtnClick(onBtnClick)} }>Delete it!!!</button>
        );
      }


    render() {
      var data=[];
      if(this.props && this.props.empInfo && this.props.empInfo.empInfo && this.props.empInfo.empInfo.data){
        data=this.props.empInfo.empInfo.data;
      }
   
      return (
          <div>
          <div>
              <h2 style={{'textAlign':'center',color:'#8f3181'}} >Employee Info</h2>
          </div>
        <BootstrapTable 
            data={ data } 
            search={ true}
            pagination
            options={ this.options }
            >
            <TableHeaderColumn dataField='emp_id' isKey>Emp ID</TableHeaderColumn>
            <TableHeaderColumn dataField='emp_name'>Name</TableHeaderColumn>
            <TableHeaderColumn dataField='emp_since'>Employee Since</TableHeaderColumn>
            <TableHeaderColumn dataField='position'>Position</TableHeaderColumn>
            <TableHeaderColumn dataField='division' dataFormat={ this.createCustomDeleteButton } >Division</TableHeaderColumn> 
            <TableHeaderColumn dataField='emp_review' dataFormat={attachFormatter} >Employee Reviews</TableHeaderColumn>

        </BootstrapTable>
        </div>
      );
    }
  }


