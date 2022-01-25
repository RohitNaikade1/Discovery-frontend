import { constants } from "../Actions/constants";

const initState = {
  user: {},
};

export const editReducer = (state = initState, action) => {
  switch (action.type) {
    case constants.SET_EDIT:
      console.log(action);
      return (state = {
        ...state,
        user: action.payload.data,
      });
    default:
      return state;
  }
};
