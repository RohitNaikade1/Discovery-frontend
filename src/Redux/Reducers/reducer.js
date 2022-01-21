import {userReducer} from './usersReducer';
import {editReducer} from './editReducer';
import {credsReducer} from './credsReducer';
import { combineReducers } from 'redux';


const rootReducer=combineReducers({
    // oAuthReducer,
    usersList:userReducer,
    editdata:editReducer,
    credentials:credsReducer
    
});
export default rootReducer;