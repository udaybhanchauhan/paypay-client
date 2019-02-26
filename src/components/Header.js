import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Navbar, Nav, Col, Row, NavbarBrand } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

export default class Header extends Component {

    constructor(props) {
        super(props);

        this.state = { user: null }
    }
render() {
        
        return (
                
                 <div className="header-dark">
                    <Navbar className="navbar navbar-default">
                          <div className="container">
                            {/* <Navbar.Header className="navbar-header">
                                <NavbarBrand></NavbarBrand>
                                <Navbar.Toggle />
                            </Navbar.Header> */}
                            <Navbar.Collapse className="navbar-collapse">
                                    <ul className="nav navbar-nav">
                                        <li><NavLink className="header_link" to="/"> Home </NavLink></li>
                                        <li><NavLink className="header_link" to="/about"> About </NavLink></li>
                                        <li><NavLink className="header_link" to="faq"> FAQs </NavLink></li>
                                    </ul>
                            </Navbar.Collapse>
                           </div>
                    </Navbar>
                  <div className="container hero">
                        <Row>
                            <Col md={8} mdOffset={2}>
                                <h1 className="text-center"><strong>Warshaplus</strong></h1>
                            </Col>
                        </Row>
                  </div>
                </div>
                )
            }
    }
