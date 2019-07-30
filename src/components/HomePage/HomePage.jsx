import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {userActions} from '../../actions/user.action';
import CardEx from '../Card/Card';


class HomePage extends Component{
    componentDidMount(){
        //this.props.dispatch(userActions.getAll());    
    }
    handleDeleteUser(id){
        return (e)=> this.props.dispatch(userActions.delete(id));
    }

    render(){
        const {user,users}=this.props;
        const image=['',''];
        return(
            
            <div className="card">    
                <CardEx/>
            </div>            
        );
    }
}

function mapStateToProps(state){
    //const {users,authentication}=state;
    //const {user}=authentication;
    return {
        // users,
        // user
    };
}

const connectedHomePage=connect(mapStateToProps)(HomePage);
export {connectedHomePage as HomePage};
