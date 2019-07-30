import React,{Component} from 'react';
import EmpInfo from '../../components/EmpDetails';
import {empInfoAction} from '../../actions/empInfo.action';
import {connect} from 'react-redux';

class EmpInfoCon extends Component{
   
    
    componentDidMount(){
        this.props.dispatch(empInfoAction.empDetails());    
    }
    getUserReview=(onBtnClick)=>{
        console.log("asdasd"+onBtnClick);
    }
    render(){
        return(
            <div>
                <EmpInfo onBtnClick={this.getUserReview} empInfo={this.props.empInfo}/>
            </div>
        )
    }
}

function mapStateToProps(state){
    const {empInfo}=state;
    return {
        empInfo
    };
}




export default connect(mapStateToProps)(EmpInfoCon);