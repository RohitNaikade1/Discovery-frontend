import { constants } from "../Actions/constants"

const initState={
    registrations:{}
}

export const registrationsReducer=(state=initState,action)=>{

    
    switch(action.type){
        case constants.GET_REGISTRATIONS:
            // console.log(action)
            return state={
                ...state,
                registrations:action.payload.registrationData
            }
        default:
            return state
    }
}