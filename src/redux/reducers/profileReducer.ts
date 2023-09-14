import {ActionType} from "../actions/actionTypes";
import {
    PROFILE_ADD_POST,
    PROFILE_SET_STATUS,
    PROFILE_SET_USER_PROFILE,
    PROFILE_UPDATE_NEW_POST_TEXT
} from "../actions/actionTypeTitle";


export type PostType = {
    id: number
    message: string
    likesCount: number
}

export type ProfileContactsType = {
    facebook: string|null
    website: string|null
    vk: string|null
    twitter: string|null
    instagram: string|null
    youtube: string|null
    github: string|null
    mainLink: string|null
}

export type ProfilePhotoType = {
    small: string,
    large: string
}

export type ProfileType = {
    aboutMe: string
    contacts: ProfileContactsType
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: ProfilePhotoType
}

export type ProfilePageType = {
    posts: PostType[]
    newPostText: string
}

const initialState = {
    posts: [
        {id: 1, message: "Hi, how are you?", likesCount: 25},
        {id: 2, message: "So cool", likesCount: 40},
        {id: 3, message: "My day", likesCount: 10},
        {id: 4, message: "It's my first post", likesCount: 50}
    ] as PostType[],
    newPostText: " " as string,
    profile: null as ProfileType | null,
    status: ""
}

export type InitialStateType = typeof initialState

export const profileReducer = (state: InitialStateType = initialState, action:ActionType ): InitialStateType => {
    switch (action.type) {
        case PROFILE_ADD_POST: {
            const newPost: PostType = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                posts: [newPost, ...state.posts],
                newPostText: ""
            }

        }
        case PROFILE_UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.payload.newText
            }
        }
        case PROFILE_SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.payload.profile
            }
        }
        case PROFILE_SET_STATUS: {
            return {
                ...state,
                status: action.payload.status
            }
        }
        default:
            return state
    }
}



