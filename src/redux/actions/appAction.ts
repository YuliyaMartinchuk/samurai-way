import {
    APP_INITIALIZED_SUCCESS
} from "./actionTypeTitle";


export type AppActionTypes =
    | ReturnType<typeof initializedSuccess>


export const initializedSuccess = () => ({
    type: APP_INITIALIZED_SUCCESS
} as const)

