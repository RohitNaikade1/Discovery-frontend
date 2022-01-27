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


export const userCredentialsFetch = () => {
  var token = localStorage.getItem("token");

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  return async (dispatch) => {
    const userCredentials = await axiosInstance.get(
      "servicediscovery/credentials/data",
      config
    );
    console.log(userCredentials);
    if (userCredentials.status === 200) {
      dispatch({
        type: constants.USER_CREDS,
        payload: { userCredentials },
      });
    }
  };
};
