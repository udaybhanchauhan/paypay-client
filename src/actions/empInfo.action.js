import { empConstants,empReviewConstants,addEmpReviewConstants } from '../constants/emp.constant';
import { empInfo,empReviewInfo,addEmpReview } from '../services/empInfo.services';


export const empInfoAction={
    empDetails,
};

export const empReviewInfoAction={
    empReviewDetails,
    empReviewAdd,
}



function empDetails() {
    return dispatch => {
        dispatch(request());
        empInfo.empDetails()
            .then(
                empInfo => dispatch(success(empInfo)),
                error => dispatch(failure(error.toString()))
            );
    };

    function request() { return { type: empConstants.GETALL_REQUEST } }
    function success(empInfo) { return { type: empConstants.GETALL_SUCCESS, empInfo } }
    function failure(error) { return { type: empConstants.GETALL_FAILURE, error } }
}


function empReviewDetails(){
    return dispatch => {
        dispatch(request());
        empReviewInfo.empReviewDetails()
            .then(
                empInfo => dispatch(success(empInfo)),
                error => dispatch(failure(error.toString()))
            );
    };

    function request() { return { type: empReviewConstants.GETALL_REQUEST } }
    function success(empReviewInfo) { return { type: empReviewConstants.GETALL_SUCCESS, empReviewInfo } }
    function failure(error) { return { type: empReviewConstants.GETALL_FAILURE, error } }

}


function empReviewAdd(review_date,period,productivity,job_knowledge,relationships,initiative,emp_id){
    return dispatch => {
        dispatch(request());
        addEmpReview.empReviewAdd(review_date,period,productivity,job_knowledge,relationships,initiative,emp_id)
            .then(
                empInfo => dispatch(success(empInfo)),
                error => dispatch(failure(error.toString()))
            );
    };

    function request() { return { type: addEmpReviewConstants.GETALL_REQUEST } }
    function success(addEmpReview) { return { type: addEmpReviewConstants.GETALL_SUCCESS, addEmpReview } }
    function failure(error) { return { type: addEmpReviewConstants.GETALL_FAILURE, error } }
}