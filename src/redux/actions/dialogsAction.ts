import {
    APP_INITIALIZED_SUCCESS, DIALOGS_SEND_MESSAGE
} from "./actionTypeTitle";


export type DialogsActionTypes =
    ReturnType<typeof sendMessageAC>


export const initializedSuccess = () => ({
    type: APP_INITIALIZED_SUCCESS
} as const)

export const sendMessageAC = (newMassageBody:string) => ({type: DIALOGS_SEND_MESSAGE, newMassageBody} as const)



