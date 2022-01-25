import { constants } from "./constants";
import axiosInstance from "../../helpers/axios";

export const credentialsFetch = () => {
  var token = localStorage.getItem("token");

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  return async (dispatch) => {
    const credentialsData = await axiosInstance.get(
      "servicediscovery/credentials",
      config
    );

    if (credentialsData.status === 200) {
      dispatch({
        type: constants.GET_CREDS,
        payload: { credentialsData },
      });
    }
  };
};

export const getCred = (id) => {
  console.log(id);
  var token = localStorage.getItem("token");

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  return async (dispatch) => {
    const cred = await axiosInstance.get(
      `servicediscovery/credentials/${id}`,
      config
    );
    console.log(cred);
    if (cred.status === 200) {
      dispatch({
        type: constants.GET_CRED,
        payload: { cred },
      });
    }
  };
};
