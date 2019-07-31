import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {userActions} from '../../actions/user.action';

class LoginPage extends Component{
    constructor(props){
        super(props);
        this.props.dispatch(userActions.logout());
        this.state={
            username:'',
            password:'',
            submitted:false
        };
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    handleChange(e){
        const {name, value}=e.target;
        this.setState({[name]:value})
    }
    handleSubmit(e){
        e.preventDefault();
        this.setState({submitted:true});
        const {username, password}=this.state;
        const {dispatch}=this.props;
        if(username && password){
            dispatch(userActions.login(username, password));
        }
    }
    render(){
       
        const {username, password, submitted}= this.state;
        return(
            <div className="col-md-3 col-md-offset-3">
                <h2 style={{color:'#8f3181'}}>Login</h2>
                <form name="form" onSubmit={this.handleSubmit}>
                    <div className={'form-group' + (submitted && !username ? ' has-error' : '')}>
                        <label htmlFor="username">Username</label>
                        <input type="text" className="form-control" name="username" value={username} onChange={this.handleChange} />
                        {submitted && !username &&
                            <div className="help-block">Username is required</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !password ? ' has-error' : '')}>
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" name="password" value={password} onChange={this.handleChange} />
                        {submitted && !password &&
                            <div className="help-block">Password is required</div>
                        }
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary">Login</button>
                        <Link to="/register" className="btn btn-link">Register</Link>
                    </div>
                </form>

            </div>
        )
    }

}
function mapStateToProps(){
    console.log(this);
    const {loggingIn}=this;
    return {
        loggingIn
    };
    
}   

const connectedLiginPage=connect(mapStateToProps)(LoginPage);
export {connectedLiginPage as LoginPage};