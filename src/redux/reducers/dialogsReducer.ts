import {DIALOGS_SEND_MESSAGE} from "../actions/actionTypeTitle";
import {ActionType} from "../actions/actionTypes";
import avatar1 from "../../assets/images/avatar/avavtar1.jpg"
import avatar2 from "../../assets/images/avatar/avavtar2.jpg"
import avatar3 from "../../assets/images/avatar/avavtar3.jpg"
import avatar4 from "../../assets/images/avatar/avavtar4.jpg"
import avatar5 from "../../assets/images/avatar/avavtar5.jpg"
import avatar6 from "../../assets/images/avatar/avavtar6.jpg"
import avatar7 from "../../assets/images/avatar/avavtar7.jpg"
import avatar8 from "../../assets/images/avatar/avavtar8.jpg"

export type DialogUserType = {
    id: number
    avatar: string
    userFirstName: string
    userLastName: string
}

export type DialogUsersType = DialogUserType[]

export type MessageProps = {
    id: number
    message: string
}


const initialState = {
    dialogs: [
        {
            id: 1,
            avatar: avatar1,
            userFirstName: 'Barbara',
            userLastName: 'Harris'
        },
        {
            id: 2,
            avatar: avatar2,
            userFirstName: 'Donald',
            userLastName: 'Davis'
        },
        {
            id: 3,
            avatar: avatar3,
            userFirstName: 'Gregory',
            userLastName: ' Wilson'
        },
        {
            id: 4,
            avatar: avatar4,
            userFirstName: 'Theresa',
            userLastName: 'Munoz'
        },
        {
            id: 5,
            avatar: avatar5,
            userFirstName: 'Travis',
            userLastName: 'Jennings'
        },
        {
            id: 6,
            avatar: avatar6,
            userFirstName: 'Martha',
            userLastName: 'Fleming'
        },
        {
            id: 7,
            avatar: avatar7,
            userFirstName: 'Tiffany',
            userLastName: 'Garcia'
        },
        {
            id: 8,
            avatar: avatar8,
            userFirstName: 'Charles',
            userLastName: 'Newman'
        }
    ] as DialogUserType[],
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