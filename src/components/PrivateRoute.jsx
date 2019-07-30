import React from 'react'
import {Route, Redirect} from 'react-router-dom';

export const PrivateRoute=({component:Component,roles, ...rest})=>(
        
    <Route {...rest} render={props => {
        const currentUser = localStorage.getItem('user');
           
        if (!currentUser) {
            // not logged in so redirect to login page with the return url
            return <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
            
        }
        return <Component {...props} />
    }} />
)