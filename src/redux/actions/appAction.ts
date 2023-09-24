import {
    INITIALIZED_SUCCESS_APP
} from "./actionTypeTitle";


export type AppActionTypes =
    | ReturnType<typeof initializedSuccess>


export const initializedSuccess = () => ({
    type: INITIALIZED_SUCCESS_APP
} as const)

