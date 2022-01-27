import { constants } from "../Actions/constants";

const initState = {
  credentials: {},
  cred: {},
  usercreds :{}
};

export const credsReducer = (state = initState, action) => {
  switch (action.type) {
    case constants.GET_CREDS:
      return (state = {
        ...state,
        credentials: action.payload.credentialsData,
      });
    case constants.GET_CRED:
      return (state = {
        ...state,
        cred: action.payload.cred,
      });
    case constants.USER_CREDS:
      return (state = {
        ...state,
        usercreds: action.payload.userCredentials,
      });
    default:
      return state;
  }
};
