import {ActionsTypes} from "./store";

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
    users: [] as UserPropsType[]

}

export type InitialStateType = typeof initialState

const usersReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case "FOLLOW": {
            return {
                ...state,
                users: state.users.map(u => u.id === action.userId
                    ? {...u, followed: true}
                    : u)
            }
        }
        case "UNFOLLOW": {
            return {
                ...state,
                users: state.users.map(u => u.id === action.userId
                    ? {...u, followed: false}
                    : u)
            }
        }

        case "SET_USERS": {
            return {
                ...state,
                users: [...state.users, ...action.users]
            }
        }

        default:
            return state
    }
}


export const followAC = (userId: number) => ({type: "FOLLOW", userId} as const)
export const unFollowAC = (userId: number) => ({type: "UNFOLLOW", userId} as const)
export const setUsersAC = (users: UserPropsType[]) => ({type: "SET_USERS", users} as const)


export default usersReducer

