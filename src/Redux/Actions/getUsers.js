import { constants } from './constants';
import axiosInstance from '../../helpers/axios';
import jwt_decode from "jwt-decode";

export const userFetch = () => {

    var token = localStorage.getItem("token")

    const config = {
        headers: {
            Authorization: `Bearer ${token}`

        }
    };
    return async (dispatch) => {
        const usersData = await axiosInstance.get('servicediscovery/users',config);

        if (usersData.status === 200) {
            dispatch({
                type: constants.USERS_FETCH,
                payload: { usersData }
            })
        }
    }
}

export const getProfile = () =>{
    var token = localStorage.getItem("token")
    var decoded = jwt_decode(token);

    const config = {
        headers: {
            Authorization: `Bearer ${token}`

        }
    };
    return async (dispatch) => {
        const profileData = await axiosInstance.get(`servicediscovery/users/${decoded._id}`,config);
        console.log(profileData)
        if (profileData.status === 200) {
            dispatch({
                type: constants.GET_PROFILE,
                payload: { profileData }
            })
        }
    }
}

export const getUser = (id) =>{

    var token = localStorage.getItem("token")

    const config = {
        headers: {
            Authorization: `Bearer ${token}`

        }
    };
    return async (dispatch) => {
        const editUser = await axiosInstance.get(`servicediscovery/users/${id}`,config);

        if (editUser.status === 200) {
            dispatch({
                type: constants.GET_USER,
                payload: { editUser }
            })
        }
    }
}