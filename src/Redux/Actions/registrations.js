import { constants } from "./constants";
import axiosInstance from "../../helpers/axios";
import jwt_decode from "jwt-decode";

export const getRegistration = () => {
  var token = localStorage.getItem("token");

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  return async (dispatch) => {
    const registrationData = await axiosInstance.get(
      "servicediscovery/registration",
      config
    );
    // console.log(registrationData)
    if (registrationData.status === 200) {
      dispatch({
        type: constants.GET_REGISTRATIONS,
        payload: { registrationData },
      });
    }
  };
};

export const getReg = (id) => {
  var token = localStorage.getItem("token");

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  return async (dispatch) => {
    console.log(id);
    const registration = await axiosInstance.get(
      `servicediscovery/registration/${id}`,
      config
    );

    if (registration.status === 200) {
      dispatch({
        type: constants.GET_REG,
        payload: { registration },
      });
    }
  };
};
