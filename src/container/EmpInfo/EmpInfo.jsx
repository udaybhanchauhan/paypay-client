import React,{Component} from 'react';
import EmpInfo from '../../components/EmpDetails';
import EmpReviewInfo from '../../components/EmpReviewDetails';
import {empInfoAction,empReviewInfoAction} from '../../actions/empInfo.action';
import {connect} from 'react-redux';

class EmpInfoCon extends Component{
    constructor(){
        super();
        this.state = { empReview:false,selectedEmpDetails:[]};
    }
    
    componentDidMount(){
        this.props.dispatch(empInfoAction.empDetails());    
    }
    getUserReview=(row)=>{
        
        this.props.dispatch(empReviewInfoAction.empReviewDetails());
        this.setState({empReview:true,selectedEmpDetails:row});
        
    }
    goHomePage=()=>{
       
        this.props.dispatch(empInfoAction.empDetails());    
        this.setState({empReview:false});
    }
    addReview=(a,b,c,d,e,f,selectedEmpId)=>{
        this.props.dispatch(empReviewInfoAction.empReviewAdd(a,b,c,d,e,f,selectedEmpId));
        this.props.dispatch(empReviewInfoAction.empReviewDetails());
    }
    render(){
        
        return(
            <div>
                {!this.state.empReview && <EmpInfo onBtnClick={this.getUserReview} empInfo={this.props.empInfo}/>}
                {this.state.empReview && <EmpReviewInfo goHomePage={this.goHomePage} addReview={this.addReview} empReviewInfo={this.props.empReviewInfo} selectedEmpDetails={this.state.selectedEmpDetails}/>}
            </div>
        )
    }
}

function mapStateToProps(state){
    const {empInfo}=state;
    const {empReviewInfo}=state;
    return {
        empInfo,
        empReviewInfo
    };
}




export default connect(mapStateToProps)(EmpInfoCon);