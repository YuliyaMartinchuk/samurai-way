import {ActionsTypes} from "./store";

export type PostPropsType = {
    id: number
    message: string
    likesCount: number
}

const initialState = {
    posts: [
        {id: 1, message: "Hi, how are you?", likesCount: 25},
        {id: 2, message: "So cool", likesCount: 40},
        {id: 3, message: "My day", likesCount: 10},
        {id: 4, message: "It's my first post", likesCount: 50}
    ] as PostPropsType[],
    newPostText: " " as string
}

export type InitialStateType = typeof initialState

const profileReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case "ADD-POST":
            const newPost: PostPropsType = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            }
            state.posts.push(newPost)
            state.newPostText = "";
            return state
        case "UPDATE-NEW-POST-TEXT":
            state.newPostText = action.newText
            return state;
        default:
            return state
    }
}

export const addPostAC = () => ({type: "ADD-POST"} as const)

export const updateNewPostAC = (newText: string) => ({
    type: "UPDATE-NEW-POST-TEXT",
    newText: newText
} as const)

export default profileReducer

