import { constants } from "../Actions/constants"

const initState={
    users:{},
    profile:{},
    editUser:{}
}

export const userReducer=(state=initState,action)=>{

    switch(action.type){
        case constants.USERS_FETCH:
            return state={
                ...state,
                users:action.payload.usersData
            }
        case constants.GET_PROFILE:
            return state={
                ...state,
                profile:action.payload.profileData
            }
        case constants.GET_USER:
            return state={
                ...state,
                editUser:action.payload.editUser
            }
        default:
            return state
    }
}