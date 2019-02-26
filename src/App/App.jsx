import React,{Component} from 'react';
import {Router,Route} from 'react-router-dom';
import {connect} from 'react-redux';
import {history} from '../helpers/history';
import {alertActions} from '../actions/alter.action';
import {PrivateRoute} from '../components/PrivateRoute';
import {HomePage} from '../HomePage/HomePage';
import {LoginPage} from '../LoginPage/LoginPage';
import {RegisterPage} from '../RegisterPage/RegisterPage';
import AboutUs from '../components/AboutUs/AboutUs';
import Header from '../components/Header';

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
        const {alert}=this.props;
        const loggedIn=this.props;
        console.log("loggedIn=="+JSON.stringify(loggedIn));
        return(
            <div className="jumbotron">
                <div className="container">
                    <div className="col-sm-8 col-sm-offset-2">
                        {   alert.message &&
                            <div className={`alert ${alert.type}`}>{alert.message}</div>
                        }
                    </div>
                    <Router history={history}>
                        <div>
                            {loggedIn.loggedIn &&  <Header/>}
                            <PrivateRoute exact path="/" component={HomePage}/>
                            <Route path="/login" component={LoginPage}/>
                            <Route path="/register" component={RegisterPage}/>
                            <PrivateRoute path="/about" component={AboutUs}/>
                        </div>
                    </Router>
                </div>
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
