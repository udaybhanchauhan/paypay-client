import { empConstants } from '../constants/emp.constant';
import { empReviewConstants } from '../constants/emp.constant';



export function empInfo(state={},action){
    switch(action.type){
        case empConstants.GETALL_REQUEST:
            return {loading:true};
        case empConstants.GETALL_SUCCESS:
            return {empInfo:action.empInfo};
        case empConstants.GETALL_FAILURE:
            return {error:action.error};
        default: 
            return state;
    }
}

export function empReviewInfo(state={},action){
    switch(action.type){
        case empReviewConstants.GETALL_REQUEST:
            return {loading:true};
        case empReviewConstants.GETALL_SUCCESS:
            return {empReviewInfo:action.empReviewInfo};
        case empReviewConstants.GETALL_FAILURE:
            return {error:action.error};
        default: 
            return state;
    }
}