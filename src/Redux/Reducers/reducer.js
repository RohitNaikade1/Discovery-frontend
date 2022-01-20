import {userReducer} from './usersReducer';

import { combineReducers } from 'redux';


const rootReducer=combineReducers({
    // oAuthReducer,
    usersList:userReducer,
});
export default rootReducer;