import React,{Component} from 'react';
import { Router,Route} from 'react-router-dom';
import {connect} from 'react-redux';
import {history} from '../../helpers/history';
import {alertActions} from '../../actions/alter.action';
import {PrivateRoute} from '../PrivateRoute';

import {LoginPage} from '../LoginPage/LoginPage';
import {RegisterPage} from '../RegisterPage/RegisterPage';

import Header from '../Header/Header';
import EmpInfo from '../../container/EmpInfo/EmpInfo'

class App extends Component{
    constructor(props){
        super(props);
        const {dispatch}=this.props;
        history.listen((location, action)=>{
            // clear alert on location change
            dispatch(alertActions.clear());            
        });
    }
    render(){
       
        const loggedIn=this.props;
        
        return(
            <div className="jumbotron">
                <h2 style={{'textAlign':'center',color:'#8f3181'}}>Employee Reviews</h2>
                    <Router history={history}>
                        <div>
                            {loggedIn.loggedIn &&  <Header/>}
                            
                            <Route  path="/login" component={LoginPage}/>
                            <Route path="/register" component={RegisterPage}/>
                            <PrivateRoute exact path="/" component={EmpInfo}/>
                            <PrivateRoute path="/emp-info" component={EmpInfo}/>
                        </div>
                    </Router>
                </div>
        );
    }
}

function mapStateToProps(state){
    const {alert}=state;
    const {loggedIn}=state.authentication;
    return {
        alert,
        loggedIn
    };
}

export const connectedApp=connect(mapStateToProps)(App);

export {connectedApp as App};
