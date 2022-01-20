import { constants } from './constants';
import axiosInstance from '../../helpers/axios';

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