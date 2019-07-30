import { empConstants } from '../constants/emp.constant';



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