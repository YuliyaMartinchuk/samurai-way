import {
    AUTH_GET_CAPTCHA_URL,
    AUTH_SET_USER_DATA,

} from "./actionTypeTitle";


export type AuthActionsTypes =
    | ReturnType<typeof setAuthUserData>
    | ReturnType<typeof getCaptchaUrl>


export const setAuthUserData = (userId: number | null, email: string | null, login: string | null, isAuth:boolean) => ({
    type: AUTH_SET_USER_DATA,
    payload: {
        data: {
            userId, email, login, isAuth
        }
    }
} as const)

export const getCaptchaUrl = (captchaUrl: string) => ({
    type: AUTH_GET_CAPTCHA_URL,
    payload: {
        captchaUrl
    }
} as const)

