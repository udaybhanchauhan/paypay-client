import React,{Component} from 'react'
import { NavLink } from "react-router-dom";
import { Form } from "react-bootstrap";
//import { errorMessages } from "../../../constants";
import icon_eye_none_TELUS_Green from '../../resources/icons/icon_eye_none_TELUS_Green.svg';
import icon_eye_Gainsboro_green from '../../resources/icons/icon_eye_Gainsboro_green.svg';


export default class AboutUs extends Component{
    constructor(props){
        super(props);
    }
    render(){
        const submitted=false;
        let username, errorMessages,password, emailRegEx, passwordInputType,handleSubmit;
        return(
            <div className="position-relative">
            <Form onSubmit={handleSubmit}>
              <div className="text-left">
                <label className="mb-1 login-label-txt">
                  Email
              <sup>*</sup>
                </label>
                <input
                  className="login-input"
                  type="text"
                  name="username"
                  value={username}
                  placeholder="Email"                  
                />
                {submitted &&
                  !username && (
                    <span className="error-txt">{errorMessages.emptyUsername}</span>
                  )}
                {submitted &&
                  username && username.length > 100 && (
                    <span className="error-txt">{errorMessages.usernameLength}</span>
                  )}
                {submitted &&
                  username && !emailRegEx.test(username) && (
                    <span className="error-txt">{errorMessages.emailNotValid}</span>
                  )}
              </div>
    
              <div className="mt-3 text-left">
                <label className="mb-1 login-label-txt">
                  Password
              <sup>*</sup>
                </label>
                <input
                  className="login-input"
                  type={this.props.passwordInputType}
                  name="password"
                  value={password}
                  placeholder="Password"
                  
                />
                {submitted &&
                  !password && (
                    <span className="error-txt">{errorMessages.emptyPassword}</span>
                  )}
                {submitted &&
                  password && (password.length < 8 || password.length > 15) && (
                    <span className="error-txt">{errorMessages.passwordLength}</span>
                  )}
              </div>
    
              <div className="mt-3 text-left login-slot">
                <label className="custom-checkbox">
                  <input
    
                    type="checkbox"
                    name="rememberMe"
                    
                  />
                  <span className="checkmark"></span>
                </label>
                <div className="rem-text ml-3">Remember me</div>
              </div>
              {/* <ReCaptcha
                id="reCaptcha"
                invisible="normal"
                render="explicit"
                sitekey="6LexPnUUAAAAAA7lmh5kVKpCnC35N-oiGoWGUyhe"
                onloadCallback={() => this.onLoadRecaptcha()}
                verifyCallback={(token) => this.verifyCallback(token)}
              /> */}
              <div className="mt-3 text-left">
                <button className="login-btn" type="submit">
                  Login
            </button>
              </div>
    
              <div className="mt-3 text-left">
                <NavLink
                  to="/forgot-password"
                  title="Forgot Password"
                  className="go-back txt-color-green"
                >
                  Forgot Password
                </NavLink>
              </div>
            </Form>
            <span className="position-absolute show-eye-container" >
              <span className="show-eye" title={passwordInputType === 'text' ? "Hide" : "Show"}>
                <img alt="" src={passwordInputType === 'text' ? icon_eye_Gainsboro_green : icon_eye_none_TELUS_Green} className="show-password-eye-green position-absolute hand" />
              </span>
            </span>
          </div>
        )
    }
}
