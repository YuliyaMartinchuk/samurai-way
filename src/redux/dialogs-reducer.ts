import {ActionsTypes} from "./store";

export type MessagePropsType = {
    id: number
    message: string
    // avatar: string
}

export type DialogsPropsType = {
    id: number
    name: string
}

const initialState = {
    dialogs: [
        {id: 1, name: "Ann"},
        {id: 2, name: "Valera"},
        {id: 3, name: "Maks"},
        {id: 4, name: "Alex"},
        {id: 5, name: "Nick"},
        {id: 6, name: "Tim"}
    ] as DialogsPropsType[],
    messages: [
        {id: 1, message: "Hello"},
        {id: 2, message: "How are you?"},
        {id: 3, message: "Thank you"},
        {id: 4, message: "What's up?"},
        {id: 5, message: "How is your day going?"},
        {id: 6, message: "Exactly!"}
    ] as MessagePropsType[],
    newMessageBody: ""
}

export type initialStateType = typeof initialState

const dialogsReducer = (state: initialStateType = initialState, action: ActionsTypes): initialStateType => {
    switch (action.type) {
        case "UPDATE-NEW-MESSAGE-BODY":
            state.newMessageBody = action.body
            return state
        case "SEND-MESSAGE":
            let body = state.newMessageBody
            state.newMessageBody = ""
            state.messages.push({id: 6, message: body})
            return state
        default:
            return state
    }
}

export const sendMessageAC = () => ({type: "SEND-MESSAGE"} as const)

export const updateNewMessageAC = (body: string) => ({
    type: "UPDATE-NEW-MESSAGE-BODY",
    body: body
} as const)

export default dialogsReducer