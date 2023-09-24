import {
    SET_USER_DATA_AUTH,

} from "./actionTypeTitle";


export type SetUserDataTypes =
    | ReturnType<typeof setAuthUserDataAC>


export const setAuthUserDataAC = (userId: string | null, email: string | null, login: string | null, isAuth:boolean) => ({
    type: SET_USER_DATA_AUTH,
    payload: {
        data: {
            userId, email, login, isAuth
        }
    }
} as const)

