import { constants } from './constants';
import axiosInstance from '../../helpers/axios';
import jwt_decode from "jwt-decode";

export const getRegistration = () => {

    var token = localStorage.getItem("token")

    const config = {
        headers: {
            Authorization: `Bearer ${token}`

        }
    };
    return async (dispatch) => {
        const registrationData = await axiosInstance.get('servicediscovery/registration',config);
        // console.log(registrationData)
        if (registrationData.status === 200) {
            dispatch({
                type: constants.GET_REGISTRATIONS,
                payload: { registrationData }
            })
        }
    }
}

