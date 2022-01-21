import { constants } from "../Actions/constants"

const initState={
    users:{},
    profile:{}
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
        default:
            return state
    }
}