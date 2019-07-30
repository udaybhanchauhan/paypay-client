import {config} from '../config';
import {authHeader} from '../helpers/auth-header'

export const empInfo={
    empDetails,
};


function empDetails(){
    const requestOptions = {
        method: 'POST',
        headers: authHeader(),'Content-Type': 'application/json'
    };

    return fetch(`${config.apiUrl}/users/userList`,requestOptions).then(handleResponse);
}

function logout(){
    // remove user from local storage to log user out
   localStorage.removeItem('user');
}

function handleResponse(response){
    return response.text().then(text=>{
        const data =text && JSON.parse(text);
        if(!response.ok){
            if(response.status===401){
                logout();
                //location.reload(true);
            }
            const error=(data && data.message) || response.statusText;
            return Promise.reject(error);
        }
        return data;

    });
}