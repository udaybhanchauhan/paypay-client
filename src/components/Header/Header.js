import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import {Link} from 'react-router-dom';
import './Header.css';
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
                           
                            <Navbar.Collapse className="navbar-collapse">
                                    <ul className="nav navbar-nav">
                                        <li><NavLink className="header_link" to="/"> Home </NavLink></li>
                                        <li><NavLink className="header_link" to="/faq"> FAQs </NavLink></li>
                                    </ul>
                                        <div className="logout">
                                            <Link to="/login">Logout</Link>
                                        </div>                                        
                            </Navbar.Collapse>
                           </div>
                    </Navbar>
                  </div>
                )
            }
    }
