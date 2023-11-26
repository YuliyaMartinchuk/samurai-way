import {
    AUTH_GET_CAPTCHA_URL,
    AUTH_SET_USER_DATA
} from "../actions/actionTypeTitle";
import {ActionType} from "../actions/actionTypes";

const initialState:AuthMeType  = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl:null// if null, then captcha is not required
}

export type AuthMeType  = {
    userId: number | null
    email:  string | null
    login: string | null
    isAuth: boolean
    captchaUrl:string | null
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
        case AUTH_GET_CAPTCHA_URL: {
            return {
                ...state,
                captchaUrl: action.payload.captchaUrl
            }
        }

        default:
            return state
    }
}


