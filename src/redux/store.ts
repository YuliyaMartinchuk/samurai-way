import profileReducer, {addPostAC, updateNewPostAC} from "./profile-reducer";
import dialogsReducer, {sendMessageAC, updateNewMessageAC} from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import {followAC, setCurrentPageAC, setTotalUsersCountAC, setUsersAC, unFollowAC} from "./users-redusers";

type PostPropsType = {
    id: number
    message: string
    likesCount: number
}

export type ProfilePagePropsType = {
    posts: Array<PostPropsType>
    newPostText: string
}
type MessagePropsType = {
    id: number
    message: string
}

type DialogsPropsType = {
    id: number
    name: string
}

export type FriendsPropsType = {
    id: number
    name: string
    avatar: string
}

export type DialogPagePropsType = {
    dialogs: Array<DialogsPropsType>
    messages: Array<MessagePropsType>
    newMessageBody: string
}


export type SidebarType = {
    friends: FriendsPropsType[]
}

export type RootStateType = {
    profilePage: ProfilePagePropsType
    dialogsPage: DialogPagePropsType
    sidebar: SidebarType
}


export type StoreType = {
    _state: RootStateType
    // updateNewPostText: (newText: string) => void
    // addPost: () => void
    _callSubscriber: (_state: RootStateType) => void
    subscribe: (observer: (_state: RootStateType) => void) => void
    getState: () => RootStateType
    dispatch: (action: ActionsTypes) => void
}


let store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "Hi, how are you?", likesCount: 25},
                {id: 2, message: "So cool", likesCount: 40},
                {id: 3, message: "My day", likesCount: 10},
                {id: 4, message: "It's my first post", likesCount: 50}
            ],
            newPostText: " "
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: "Ann"},
                {id: 2, name: "Valera"},
                {id: 3, name: "Maks"},
                {id: 4, name: "Alex"},
                {id: 5, name: "Nick"},
                {id: 6, name: "Tim"}
            ],
            messages: [
                {id: 1, message: "Hello"},
                {id: 2, message: "How are you?"},
                {id: 3, message: "Thank you"},
                {id: 4, message: "What's up?"},
                {id: 5, message: "How is your day going?"},
                {id: 6, message: "Exactly!"}
            ],
            newMessageBody: ""
        },
        sidebar: {
            friends: [
                {
                    id: 1,
                    name: "Alina",
                    avatar: 'https://i.pinimg.com/564x/1e/9e/ea/1e9eeab0299b7368be0aac0609e311f1.jpg'
                },
                {
                    id: 2,
                    name: "Dasha",
                    avatar: 'https://i.pinimg.com/564x/19/1c/d3/191cd36777a79c967a8f05bd1b230d29.jpg'
                },
                {
                    id: 3,
                    name: "Valeria",
                    avatar: 'https://i.pinimg.com/564x/09/5d/1d/095d1d507f240bc5fd605fd4ba9bc7ba.jpg'
                },
                {
                    id: 4,
                    name: "Mariya",
                    avatar: 'https://i.pinimg.com/564x/9a/33/01/9a3301a9c4ae0f2769d737b5b440cdcc.jpg'
                },
                {
                    id: 5,
                    name: "Kate",
                    avatar: 'https://i.pinimg.com/564x/36/4c/24/364c24252ef54bf8c2836816ba55953c.jpg'
                },
                {
                    id: 6,
                    name: "Victoria",
                    avatar: 'https://i.pinimg.com/564x/c5/b7/a6/c5b7a6ec9250a4f34fb8b5a5b39807bc.jpg'
                }
            ]
        }

    },
    _callSubscriber() {
        console.log("State changed")
    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer // observer// паттерн
    },

    dispatch(action: ActionsTypes) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)
        this._callSubscriber(this._state)
    }

}


export type ActionsTypes = ReturnType<typeof addPostAC> | ReturnType<typeof updateNewPostAC>
    | ReturnType<typeof sendMessageAC> | ReturnType<typeof updateNewMessageAC> | ReturnType<typeof followAC>
    | ReturnType<typeof unFollowAC> | ReturnType<typeof setUsersAC> | ReturnType<typeof setCurrentPageAC> |
    ReturnType<typeof setTotalUsersCountAC>


export default store
