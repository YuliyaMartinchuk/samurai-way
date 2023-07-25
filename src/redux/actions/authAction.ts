import {
    SET_USER_DATA_AUTH,

} from "./actionTypeTitle";


export type SetUserDataTypes =
    | ReturnType<typeof setAuthUserDataAC>


export const setAuthUserDataAC = (userId: number | null, email: string | null, login: string | null) => ({
    type: SET_USER_DATA_AUTH,
    payload: {
        data: {
            userId, email, login
        }
    }
} as const)

