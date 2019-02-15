import { userConstants } from '../constants/user.constant';
import { userService } from '../services/user.services';
import { history } from '../helpers/history';
import { alertActions } from './alter.action';

export const userActions = {
    login,
    logout,
    register,
    getAll,
    delete: _delete
};

function login(username,password){
    return dispatch=>{
        dispatch(request({username}));
        userService.login(username,password)
            .then(
                user=>{
                    dispatch(sucess(user));
                    history.push('/');
                },
                error=>{
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
                
            )
    }
    function request(user){
        return {type:userConstants.LOGIN_REQUEST,user}
    }
    function sucess(user){
        return {type:userConstants.LOGIN_SUCESS,user}
    }
    function failure(user){
        return {type:userConstants.LOGIN_FAILURE,user}
    }
}

function logout(){
    userService.logout();
    return {type:userConstants.LOGOUT};
}

function register(user){
    return dispatch=>{
        dispatch(request(user));
        userService.register(user)
            .then(
                user=>{
                    dispatch(sucess());
                    history.push('./login')
                    dispatch(alertActions.sucess('Registration successful'));
                },
                error=>{
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            )
    }
    function request(user){
        return {type:userConstants.LOGIN_REQUEST,user}
    }
    function sucess(user){
        return {type:userConstants.LOGIN_SUCESS,user}
    }
    function failure(user){
        return {type:userConstants.LOGIN_FAILURE,user}
    }
}

function getAll() {
    return dispatch => {
        dispatch(request());

        userService.getAll()
            .then(
                users => dispatch(success(users)),
                error => dispatch(failure(error.toString()))
            );
    };

    function request() { return { type: userConstants.GETALL_REQUEST } }
    function success(users) { return { type: userConstants.GETALL_SUCCESS, users } }
    function failure(error) { return { type: userConstants.GETALL_FAILURE, error } }
}

// prefixed function name with underscore because delete is a reserved word in javascript
function _delete(id) {
    return dispatch => {
        dispatch(request(id));

        userService.delete(id)
            .then(
                user => dispatch(success(id)),
                error => dispatch(failure(id, error.toString()))
            );
    };

    function request(id) { return { type: userConstants.DELETE_REQUEST, id } }
    function success(id) { return { type: userConstants.DELETE_SUCCESS, id } }
    function failure(id, error) { return { type: userConstants.DELETE_FAILURE, id, error } }
}