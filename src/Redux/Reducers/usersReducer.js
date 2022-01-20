import { constants } from "../Actions/constants"

const initState={
    users:{}
}

export const userReducer=(state=initState,action)=>{

    switch(action.type){
        case constants.USERS_FETCH:
            return state={
                ...state,
                users:action.payload.usersData
            }
        default:
            return state
    }
}