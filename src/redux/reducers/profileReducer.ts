import {ActionType} from "../actions/actionTypes";
import {
    PROFILE_ADD_POST,
    PROFILE_DELETE_POST,
    PROFILE_SAVE_PHOTO_SUCCESS,
    PROFILE_SET_STATUS,
    PROFILE_SET_USER_PROFILE
} from "../actions/actionTypeTitle";


export type PostType = {
    id: number
    message: string
    likesCount: number
}

export type ProfileContactsType = {
    [key: string]: string | null
}

export type ProfilePhotoType = {
    small: string
    large: string
}

export type ProfileType = {
    aboutMe: string
    contacts: ProfileContactsType
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: string
    photos: ProfilePhotoType
}


export type ProfilePageType = {
    posts: PostType[]
    newPostText: string
}

const initialState = {
    posts: [
        {id: 1, message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ", likesCount: 25},
        {id: 2, message: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", likesCount: 40},
        {id: 3, message: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. ", likesCount: 10},
        {id: 4, message: "It's my first post", likesCount: 50}
    ] as PostType[],
    profile: null as ProfileType | null,
    status: " "
}

export type InitialStateType = typeof initialState

export const profileReducer = (state: InitialStateType = initialState, action:ActionType ): InitialStateType => {
    switch (action.type) {
        case PROFILE_ADD_POST: {
            const newPost: PostType = {
                id: 5,
                message: action.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                posts: [newPost, ...state.posts]
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
        case PROFILE_DELETE_POST: {
            return {...state, posts: state.posts.filter(posts => posts.id != action.payload.id)}
        }
        case PROFILE_SAVE_PHOTO_SUCCESS: {
            return {...state, profile: state.profile ? {...state.profile, photos: action.payload.photos} : null}
        }
        default:
            return state
    }
}



