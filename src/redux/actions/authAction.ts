import {
    AUTH_SET_USER_DATA,

} from "./actionTypeTitle";


export type AuthActionsTypes =
    | ReturnType<typeof setAuthUserDataAC>


export const setAuthUserDataAC = (userId: string | null, email: string | null, login: string | null, isAuth:boolean) => ({
    type: AUTH_SET_USER_DATA,
    payload: {
        data: {
            userId, email, login, isAuth
        }
    }
} as const)

