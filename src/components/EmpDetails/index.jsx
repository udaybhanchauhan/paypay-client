import React from 'react';
import {BootstrapTable,TableHeaderColumn} from 'react-bootstrap-table'
import {Button} from 'reactstrap'

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
      
      sizePerPageListChange(sizePerPage) {
        console.log(`sizePerPage: ${sizePerPage}`);
      }
    
      onPageChange(page, sizePerPage) {
        console.log(`page: ${page}, sizePerPage: ${sizePerPage}`);
      }
      createCustomDeleteButton = (cell,row) => {
        
        return (
          <Button color="primary" onClick={()=>{this.props.onBtnClick(row)} }>Employee Review</Button> 
          
        );
      }


    render() {
      var data=[];
      if(this.props && this.props.empInfo && this.props.empInfo.empInfo && this.props.empInfo.empInfo.data){
        data=this.props.empInfo.empInfo.data;
      }
   
      return (
          <div style={{margin:'50px'}}>
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
            <TableHeaderColumn dataField='division'  >Division</TableHeaderColumn> 
            <TableHeaderColumn dataField='emp_review' dataFormat={ this.createCustomDeleteButton } >Employee Reviews</TableHeaderColumn>

        </BootstrapTable>
        </div>
      );
    }
  }


