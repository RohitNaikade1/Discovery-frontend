import { constants } from "./constants";

export const editData = (data) => {
  console.log(data);
  return (dispatch) => {
    dispatch({
      type: constants.SET_EDIT,
      payload: { data },
    });
  };
};
