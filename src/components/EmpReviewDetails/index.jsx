import React from 'react';
import {BootstrapTable,TableHeaderColumn} from 'react-bootstrap-table'
import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import RowEditor from './RowEditor';


var selectedEmpDetails;

  export default class EmpReviewInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
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
      
      addReview=(a,b,c,d,e,f)=>{
        this.props.addReview(a,b,c,d,e,f,selectedEmpDetails.emp_id);
      }

      createCustomDeleteButton = (cell,row) => {
        
        return (
          <Button color="primary" >Edit Review</Button> 
          
        );
      }


    render() {
      var data=[];
     
      if(this.props && this.props.selectedEmpDetails){
        selectedEmpDetails=this.props.selectedEmpDetails;
      }
      if(this.props && this.props.empReviewInfo && this.props.empReviewInfo.empReviewInfo && this.props.empReviewInfo.empReviewInfo.data){
        data=this.props.empReviewInfo.empReviewInfo.data;
      }
   
      return (
          <div style={{margin:'100px'}}>
         

          <div>
              <h2 style={{'textAlign':'center',color:'#8f3181'}} >View Employee Details</h2>

          </div>
          <div>

          
          <Form>
          <FormGroup row>
          <Col sm={3}> 
          <Label for="name" > Name:</Label>
          <Input type="text" name="name"  value={selectedEmpDetails.emp_name} readOnly />
          </Col>
          <Col sm={3}>
          <Label for="employee_since">Employee Since</Label>
          <Input type="text" name="employee_since"  value={selectedEmpDetails.emp_since} readOnly  />
          </Col>
          <Col sm={3}> 
          <Label for="email_address" > EmailAddress:</Label>
          <Input type="text" name="email_address" value={selectedEmpDetails.email_address} readOnly />
          </Col>
          <Col sm={3}>
          <Label for="division">Division</Label>
          <Input type="text" name="division" value={selectedEmpDetails.division} readOnly  />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Col sm={3}> 
          <Label for="gender" > Gender:</Label>
          <Input type="text" name="gender" value={selectedEmpDetails.gender} readOnly />
          </Col>
          <Col sm={3}>
          <Label for="position">Position</Label>
          <Input type="text" name="position"  value={selectedEmpDetails.position} readOnly />
          </Col>
          <Col sm={3}> 
          <Label for="average_review" > Average Review:</Label>
          <Input type="text" name="average_review" value={selectedEmpDetails.average_review} readOnly />
          </Col>
          <Col sm={3}>
          </Col>
        </FormGroup>
          </Form>
          </div>
          <div>
              <div style={{float:'left'}}>
                  <RowEditor addReview={this.addReview} row={selectedEmpDetails} />
                  {/* <Button color="success" onClick={()=>{  attachFormatterC(showModelF)}}>Add New Review</Button>             */}
              </div>            
                <div >
                  <Button color="primary" onClick={()=>{ this.props.goHomePage() }}>Go To Home</Button> 
                <h2 style={{'textAlign':'center',color:'#8f3181'}} >All Reviews</h2>
              </div>
          </div>
        <BootstrapTable 
            data={ data } 
            search={ true}
            pagination
            options={ this.options }
            >
            <TableHeaderColumn dataField='review_date' isKey>Review Date</TableHeaderColumn>
            <TableHeaderColumn dataField='period'>Period</TableHeaderColumn>
            
            <TableHeaderColumn dataField='productivity'>Productivity</TableHeaderColumn>
            <TableHeaderColumn dataField='job_knowledge'  >Job Knowledge</TableHeaderColumn> 
            
            <TableHeaderColumn dataField='initiative'  >Initiative</TableHeaderColumn> 
            <TableHeaderColumn dataField='edit_review' dataFormat={ this.createCustomDeleteButton } >Edit Reviews</TableHeaderColumn>

        </BootstrapTable>
        </div>
      );
    }
  }


