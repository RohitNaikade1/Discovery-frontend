import { constants } from "../Actions/constants"

const initState={
    credentials:{}
}

export const credsReducer=(state=initState,action)=>{

    
    switch(action.type){
        case constants.GET_CREDS:

            return state={
                ...state,
                credentials:action.payload.credentialsData
            }
        default:
            return state
    }
}