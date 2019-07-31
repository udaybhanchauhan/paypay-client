import { combineReducers } from 'redux';
import {alert} from './alter.reducers';
import {authentication} from './authentication.reducer';
import {registration} from './registration.reducer';
import {users} from './users.reducer';
import {empInfo,empReviewInfo} from './empInfo.reducer';

export const rootReducer=combineReducers({
    alert,
    authentication,
    registration,
    users,
    empInfo,
    empReviewInfo
});


