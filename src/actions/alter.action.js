import {alertConstants} from '../constants';

export const alertActions={
    sucess,
    error,
    clear
};

function sucess(message){
    return {type:alertConstants.SUCESS,message}
}
function error(message){
    return {type:alertConstants.ERROR,message}
}
function clear(){
    return {type:alertConstants.CLEAR}
}