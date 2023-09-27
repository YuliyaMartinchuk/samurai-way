import {DIALOGS_SEND_MESSAGE} from "../actions/actionTypeTitle";
import {ActionType} from "../actions/actionTypes";


export type MessageProps = {
    id: number
    message: string
}

export type DialogsProps = {
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
    ] as DialogsProps[],
    messages: [
        {id: 1, message: "Hello"},
        {id: 2, message: "How are you?"},
        {id: 3, message: "Thank you"},
        {id: 4, message: "What's up?"},
        {id: 5, message: "How is your day going?"},
        {id: 6, message: "Exactly!"}
    ] as MessageProps[]
}

export type initialStateType = typeof initialState

const dialogsReducer = (state: initialStateType = initialState, action: ActionType): initialStateType => {
    switch (action.type) {
        case DIALOGS_SEND_MESSAGE: {
            const newMessage: MessageProps = {
                id: 6,
                message: action.newMassageBody
            }

            return {
                ...state,
                messages:
                    [...state.messages, newMessage]
            }
        }
        default:
            return state
    }
}


export default dialogsReducer