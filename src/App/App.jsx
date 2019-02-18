import React,{Component} from 'react';
import {Router,Route} from 'react-router-dom';
import {connect} from 'react-redux';
import {history} from '../helpers/history';
import {alertActions} from '../actions/alter.action';
import {PrivateRoute} from '../components/PrivateRoute';
import {HomePage} from '../HomePage/HomePage';
import {LoginPage} from '../LoginPage/LoginPage';
import {RegisterPage} from '../RegisterPage/RegisterPage';

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
                            <PrivateRoute exact path="/" component={HomePage}/>
                            <Route path="/login" component={LoginPage}/>
                            <Route path="/register" component={RegisterPage}/>
                        </div>
                    </Router>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state){
    const {alert}=state;
    return {
        alert
    };
}

export const connectedApp=connect(mapStateToProps)(App);

export {connectedApp as App};
