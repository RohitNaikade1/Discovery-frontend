import { constants } from "../Actions/constants";

const initState = {
  registrations: {},
  editReg: {},
  userReg: {},
};

export const registrationsReducer = (state = initState, action) => {
  switch (action.type) {
    case constants.GET_REGISTRATIONS:
      // console.log(action)
      return (state = {
        ...state,
        registrations: action.payload.registrationData,
      });
    case constants.GET_REG:
      return (state = {
        ...state,
        editReg: action.payload.registration,
      });
    case constants.USER_REGISTRATIONS:
      return (state = {
        ...state,
        userReg: action.payload.userRegistrationData,
      });
    default:
      return state;
  }
};
