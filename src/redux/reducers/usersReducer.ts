import {
    USERS_FOLLOW,
    USERS_SET_CURRENT_PAGE,
    USERS_SET_TOTAL_USERS_COUNT,
    USERS_SET_USERS,
    USERS_UNFOLLOW
} from "../actions/actionTypeTitle";
import {ActionType} from "../actions/actionTypes";

export type PhotosType = {
    small: string,
    large: string
}
export type LocationType = {
    city: string,
    country: string
}

export type UserPropsType = {
    id: number,
    followed: boolean,
    photos: PhotosType,
    name: string,
    status: string,
    location?: LocationType
}

const initialState = {
    users: [] as UserPropsType[],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1
}

export type InitialStateType = typeof initialState

const usersReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case USERS_FOLLOW: {
            return {
                ...state,
                users: state.users.map(u => u.id === action.payload.userId
                    ? {...u, followed: true}
                    : u)
            }
        }
        case USERS_UNFOLLOW: {
            return {
                ...state,
                users: state.users.map(u => u.id === action.payload.userId
                    ? {...u, followed: false}
                    : u)
            }
        }

        case USERS_SET_USERS: {
            return {
                ...state,
                users: action.payload.users
            }
        }
        case USERS_SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.payload.currentPage
            }
        }
        case USERS_SET_TOTAL_USERS_COUNT: {
            return {
                ...state,
                totalUsersCount: action.payload.totalCount
            }
        }

        default:
            return state
    }
}

export default usersReducer

