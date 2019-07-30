import React from 'react';
import Modal from 'react-modal';
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
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
     
      return (

        <div>
        <Button onClick={()=>{this.openModal(true)}}>View </Button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >

          <h2 align="center">Equipment Detail</h2>
          
          <Form>
        <FormGroup row>
          <Col sm={6}> 
          <Label for="applicationName" >Application Name:</Label>
          <Input type="text" name="app_name" onChange={(e)=>{this.setState({equipment_name:e.value})}} defaultValue={this.state.row.equipment_name} placeholder="" />
          </Col>
          <Col sm={6}>
          <Label for="service_tag_serial">Service Tag Serial</Label>
          <Input type="text" name="service_tag_serial" defaultValue={this.state.row.service_tag_serial} placeholder="" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Col sm={6}> 
          <Label for="ip1" >IP1:</Label>
          <Input type="text" name="ip1" defaultValue={this.state.row.ip_address} placeholder="" />
          </Col>
          <Col sm={6}>
          <Label for="ip2" >IP2:</Label>
          <Input type="text" name="ip2"  defaultValue={this.state.row.ip_address2} placeholder="" />
          </Col>
        </FormGroup>
        <FormGroup row>
        <Col sm={6}> 
        <Label for="ip3" >IP3:</Label>
          <Input type="text" name="ip3" defaultValue={this.state.row.ip_address3} placeholder="" />
          </Col>
          <Col sm={6}>
          <Label for="ip4" >IP4:</Label>
          <Input type="text" name="ip4" defaultValue={this.state.row.ip_address4} placeholder="" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Col sm={6}> 
          <Label for="ISw_ort1" >ISw Port1:</Label>
          <Input type="text" name="ISw_port1" defaultValue={this.state.row.ip1_sw_loc}  placeholder="" />
          </Col>
          <Col sm={6}>
          <Label for="mac_address1">Mac Address1:</Label>
          <Input type="text" name="mac_address1" defaultValue={this.state.row.mac_address}  placeholder="" />
          </Col>
        </FormGroup>
        <FormGroup row>
        <Col sm={6}> 
          <Label for="ISw_ort2" >ISw Port2:</Label>
          <Input type="text" name="ISw_port2" defaultValue={this.state.row.ip2_sw_loc}  placeholder="" />
          </Col>
          <Col sm={6}>
          <Label for="mac_address2">Mac Address2:</Label>
          <Input type="text" name="mac_address2" defaultValue={this.state.row.mac_add2} placeholder="" />
          </Col>
        </FormGroup>
        <FormGroup row>
        <Col sm={6}> 
          <Label for="ISw_ort3" >ISw Port3:</Label>
          <Input type="text" name="ISw_port3"  defaultValue={this.state.row.ip3_sw_loc} placeholder="" />
          </Col>
          <Col sm={6}>
          <Label for="mac_address3">Mac Address3:</Label>
          <Input type="text" name="mac_address3"  defaultValue={this.state.row.mac_add3} placeholder="" />
          </Col>
        </FormGroup>
        <FormGroup row>
        <Col sm={6}> 
          <Label for="ISw_ort4" >ISw Port4:</Label>
          <Input type="text" name="ISw_port4" defaultValue={this.state.row.ip4_sw_loc} placeholder="" />
          </Col>
          <Col sm={6}>
          <Label for="mac_address4">Mac Address4:</Label>
          <Input type="text" name="mac_address4"  defaultValue={this.state.row.mac_add4} placeholder="" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Col sm={6}> 
          <Label for="brand_model" >Brand / Model:</Label>
          <Input type="text" name="brand_model" defaultValue={this.state.row.brand_model} placeholder="" />
          </Col>
          <Col sm={6}>
          <Label for="serial">SERVICETAG / Serial</Label>
          <Input type="text" name="serial" placeholder="" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Col sm={6}> 
          <Label for="hw_location" >HW Location:</Label>
          <Input type="text" name="hw_location" defaultValue={this.state.row.hw_location} placeholder="" />
          </Col>
          <Col sm={6}>
          <Label for="tag">Tag</Label>
          <Input type="text" name="tag" defaultValue={this.state.row.TAG} placeholder="" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Col sm={6}> 
          <Label for="person_incharge" >Person Incharge:</Label>
          <Input type="text" name="person_incharge" defaultValue={this.state.row.person_incharge} placeholder="" />
          </Col>
          <Col sm={6}>
          <Label for="os_version">OS Version</Label>
          <Input type="text" name="os_version" defaultValue={this.state.row.os_version} placeholder="" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Col sm={6}> 
          <Label for="contact_info" >Contact Info:</Label>
          <Input type="text" name="contact_info" defaultValue={this.state.row.contact_info} placeholder="" />
          </Col>
          <Col sm={6}>
          <Label for="status">STATUS:</Label>
          <Input type="text" name="status" defaultValue={this.state.row.status} placeholder="" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="acctg_code" >Acctg Code:</Label>
          <Input type="text" name="acctg_code" defaultValue={this.state.row.Acctg_Code} placeholder="" />
        </FormGroup>
        <FormGroup row>
          <Col sm={6}> 
          <Label for="ps1" >PS1:</Label>
          <Input type="text" name="ps1" defaultValue={this.state.row.ps1}  placeholder="" />
          </Col>
          <Col sm={6}>
          <Label for="ps1_voltage">PS1 Voltage:</Label>
          <Input type="text" name="ps1_voltage"  defaultValue={this.state.row.ps1_voltage} placeholder="" />
          </Col>
        </FormGroup>
        <FormGroup row>
        <Col sm={6}> 
          <Label for="ps2" >PS2:</Label>
          <Input type="text" name="ps2" defaultValue={this.state.row.ps2} placeholder="" />
          </Col>
          <Col sm={6}>
          <Label for="ps2_voltage">PS2 Voltage:</Label>
          <Input type="text" name="ps2_voltage" defaultValue={this.state.row.ps2_voltage} placeholder="" />
          </Col>
        </FormGroup>
        <FormGroup row>
        <Col sm={6}> 
          <Label for="ps3" >PS3:</Label>
          <Input type="text" name="ps3" defaultValue={this.state.row.ps3} placeholder="" />
          </Col>
          <Col sm={6}>
          <Label for="ps3_voltage">PS3 Voltage:</Label>
          <Input type="text" name="ps3_voltage"defaultValue={this.state.row.ps3_voltage} placeholder="" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Col sm={6}> 
          <Label for="win_logIn" >Win LogIn:</Label>
          <Input type="text" name="win_logIn" defaultValue={this.state.row.Win_Login}  placeholder="" />
          </Col>
          <Col sm={6}>
          <Label for="win_pwd">Win Pwd</Label>
          <Input type="text" name="win_pwd" defaultValue={this.state.row.Win_Pwd} placeholder="" />
          </Col>
        </FormGroup>
        <FormGroup row>
        <Col sm={6}> 
          <Label for="vnc_user" >VNC User:</Label>
          <Input type="text" name="vnc_user" defaultValue={this.state.row.VNC_user} placeholder="" />
          </Col>
          <Col sm={6}>
          <Label for="vnc_pwd">VNC Pwd</Label>
          <Input type="text" name="vnc_pwd" defaultValue={this.state.row.VNC_Pwd} placeholder="" />
          </Col>
        </FormGroup>
        <FormGroup row>
        <Col sm={6}> 
          <Label for="pca_user" >PCA User:</Label>
          <Input type="text" name="pca_user" defaultValue={this.state.row.PCA_User} placeholder="" />
          </Col>
          <Col sm={6}>
          <Label for="pca_pwd">PCA Pwd</Label>
          <Input type="text" name="pca_pwd" defaultValue={this.state.row.PCA_Pwd} placeholder="" />
          </Col>
        </FormGroup>
        <FormGroup row>
        <Col sm={6}> 
          <Label for="ssh_user" >SSH User:</Label>
          <Input type="text" name="ssh_user"  defaultValue={this.state.row.SSH_User} placeholder="" />
          </Col>
          <Col sm={6}>
          <Label for="ssh_pwd">SSH Pwd</Label>
          <Input type="text" name="ssh_pwd" defaultValue={this.state.row.SSH_Pwd} placeholder="" />
          </Col>
          </FormGroup>
        <FormGroup row>
          <Label for="serverImage" sm={2}>Server Image</Label>
          <Col sm={10}>
            <Input type="file" name="server_image" defaultValue={this.state.row.image} />
            <FormText color="muted">
              This is some placeholder block-level help text for the above input.
              It's a bit lighter and easily wraps to a new line.
            </FormText>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="last_manager1" sm={3}>Last Manager 1</Label>
          <Col sm={9}>
            <Input type="textarea" name="last_manager1" defaultValue={this.state.row.last_manager} id="last_manager1" />
          </Col>
        </FormGroup>
        
        <FormGroup row>
        <Label for="last_manager2" sm={3}>Last Manager 2</Label>
          <Col sm={9}>
            <Input type="textarea" name="last_manager2" defaultValue={this.state.row.last_manager2} id="last_manager2" />
          </Col>
        </FormGroup>
        <FormGroup row>
        <Label for="last_manager3" sm={3}>Last Manager 3</Label>
          <Col sm={9}>
            <Input type="textarea" name="last_manager3" defaultValue={this.state.row.last_manager3} id="last_manager3" />
          </Col>
        </FormGroup>


        <FormGroup check row>
          <Col sm={{ size: 10, offset: 2 }}>
            <Button>Submit</Button>
            <Button onClick={this.closeModal}>close</Button>
          </Col>
        </FormGroup>
      </Form>
        </Modal>
      </div>
      );
    }
  }