import {
    SET_USER_DATA_AUTH
} from "../actions/actionTypeTitle";
import {ActionType} from "../actions/actionTypes";

const initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}

export type InitialStateType =  {
    id: null|string
    email: null|string
    login: null|string
    isAuth: boolean
}

export const authReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case SET_USER_DATA_AUTH: {
            return {
                ...state,
               ...action.payload.data,
                isAuth: true
            }
        }

        default:
            return state
    }
}


