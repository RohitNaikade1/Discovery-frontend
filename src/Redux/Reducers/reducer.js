import {userReducer} from './usersReducer';
import {editReducer} from './editReducer'
import { combineReducers } from 'redux';


const rootReducer=combineReducers({
    // oAuthReducer,
    usersList:userReducer,
    editdata:editReducer
    
});
export default rootReducer;