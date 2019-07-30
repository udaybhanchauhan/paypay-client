import { empConstants } from '../constants/emp.constant';
import { empInfo } from '../services/empInfo.services';

export const empInfoAction={
    empDetails,
};



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

