import React from 'react';
import Modal from 'react-modal';
import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : '20%',
      bottom                : '20%',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)',
      height: '700px', // <-- This sets the height
      overlfow: 'scroll' // <-- This tells the modal to scrol
    }
  };
  Modal.setAppElement('#root');

export default class RowEditor extends React.Component {
    constructor() {
        super();    
        this.state = {
          modalIsOpen: false,
          row:[]
          
        };
    
        this.openModal = this.openModal.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
      }



      openModal(showModel) {
        console.log(JSON.stringify(this.props));
        this.setState({modalIsOpen: showModel,row:this.props.row});
      }
    
      afterOpenModal() {
        // references are now sync'd and can be accessed.
        //this.subtitle.style.color = '#f00';
      }
    
      closeModal() {
        this.setState({modalIsOpen: false});
      }
    render() {

     //console.log("row editor props"+JSON.stringify(this.props));

      return (

        <div>
        <Button color="primary" onClick={()=>{this.openModal(true)}}>Add New Review </Button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >

          <h2  style={{'textAlign':'center',color:'#8f3181'}} align="center">Add a New Review</h2>
          
          <Form>

          <FormGroup row>
          <Col sm={6}> 
          <Label for="name" > Name:</Label>
          <Input type="text" name="name"  value={this.state.row.emp_name} readOnly />
          </Col>
          <Col sm={6}>
          <Label for="employee_since">Employee Since</Label>
          <Input type="text" name="employee_since"  value={this.state.row.emp_since} readOnly  />
          </Col>
          </FormGroup>
        <FormGroup row>  
          <Col sm={6}>
          <Label for="division">Division</Label>
          <Input type="text" name="division" value={this.state.row.division} readOnly  />
          </Col>
          <Col sm={6}>
          <Label for="position">Position</Label>
          <Input type="text" name="position"  value={this.state.row.position} readOnly />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Col sm={6}> 
          <Label for="review_date" > Review Date</Label>
          <Input type="text" name="review_date"  onChange={(e)=>{this.setState({review_date:e.target.value})}} />
          </Col>
          <Col sm={6}>
          <Label for="period" > Period</Label>
          <Input type="text" name="Period" onChange={(e)=>{this.setState({period:e.target.value})}}  />
          </Col>
          
        </FormGroup>
        <h2 style={{'textAlign':'center',color:'#8f3181'}} >Performance Rankings</h2>
        <h3 >Fill in all categories.</h3>
        <FormGroup row>
          <Col sm={6}> 
          <Label for="productivity" >Productivity</Label>
          <Input type="text" name="productivity" onChange={(e)=>{this.setState({productivity:e.target.value})}}  placeholder="" />
          1-4; The extent to which an employee produces a significant volume of work efficiently in a specified period of time.
          </Col>
          <Col sm={6}>
          <h4> 1- Improvement Needed. Employee does not meet performance objectives on a regular basis and has difficulty following through with tasks. Requires constant follow-up and / or supervision.</h4>
          </Col>
          </FormGroup>
          <FormGroup row>
          <Col sm={6}>
          <Label for="job_knowledge">Job Knowledge</Label>
          <Input type="text" name="job_knowledge" onChange={(e)=>{this.setState({job_knowledge:e.target.value})}} placeholder="" />
          1-4; The extent to which an employee possesses and demonstrates an understating of the work instructions, processes, equipment and materials required to perform the job.
          </Col>
          <Col sm={6}>
          <h4> 2- Meets Expectation. Competent & dependable performance level. Meets the performance standards and objectives of the job without constant follow-up / direction.</h4>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Col sm={6}> 
          <Label for="relationships" >Relationships & Cooperation</Label>
          <Input type="text" name="relationships" onChange={(e)=>{this.setState({relationships:e.target.value})}} placeholder="" />
          1-4; The extent to which employee is willing and demonstrates the ability to cooperate, work and communicate with coworkers, supervisors, subordinates and/or outside contacts.
          
          </Col>
          <Col sm={6}>
          <h4>3- Exceeds Expectation. Results clearly exceed position requirements on a regular basis. Performance is of high quality and is achieved on a consistent basis.</h4>
          </Col>
          </FormGroup>
          <FormGroup row>
          <Col sm={6}>
          <Label for="initiative">Initiative & Creativity</Label>
          <Input type="text" name="initiative" onChange={(e)=>{this.setState({initiative:e.target.value})}}  placeholder="" />
          1-4; The extent to which an employee seeks out new assignments, proposes improved work methods, suggests ideas to eliminate waste, finds new and better ways of doing things. 
          </Col>
          <Col sm={6}>
          <h4>4- Outstanding. Employee consistently exceeds position expectations with virtually no detected preventable/controllable errors, requiring little or no supervision.</h4>
          </Col>
        </FormGroup>


        <FormGroup check row>
          <Col sm={{ size: 10, offset: 2 }}>
            
            <Button color="primary" onClick={()=>{ this.props.addReview(this.state.review_date,this.state.period,this.state.productivity,this.state.job_knowledge,this.state.relationships,this.state.initiative);this.openModal(false)}} > Submit</Button>
            <Button color="primary" onClick={this.closeModal}>close</Button>
          </Col>
        </FormGroup>
      </Form>
        </Modal>
      </div>
      );
    }
  }