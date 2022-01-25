import { userReducer } from "./usersReducer";
import { editReducer } from "./editReducer";
import { credsReducer } from "./credsReducer";
import { registrationsReducer } from "./registrationReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  // oAuthReducer,
  usersList: userReducer,
  editdata: editReducer,
  credentials: credsReducer,
  registrations: registrationsReducer,
});
export default rootReducer;
