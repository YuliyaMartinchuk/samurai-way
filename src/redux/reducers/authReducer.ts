import {
    AUTH_SET_USER_DATA
} from "../actions/actionTypeTitle";
import {ActionType} from "../actions/actionTypes";

const initialState:AuthMeType  = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

export type AuthMeType  = {
    userId: string | null
    email:  string | null
    login: string | null
    isAuth: boolean
}
export type InitialStateType = typeof initialState

export const authReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case AUTH_SET_USER_DATA: {
            return {
                ...state,
                ...action.payload.data
            }
        }

        default:
            return state
    }
}


