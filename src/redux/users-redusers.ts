import {ActionsTypes} from "./store";

export type UserPropsType = {
    name: string
    id: number
    photos: {
        small: string
        large: string
    },
    status: string
    followed:boolean
    fullName: string
    location?: {
        city: string
        country: string
    }
}


const initialState = {
    users: [] as UserPropsType[],
    totalCount: 30,
    error: null
}

export type InitialStateType = typeof initialState

const usersReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case "FOLLOW": {
            return {...state,
                users: state.users.map(u=> u.id === action.userId
                    ? {...u, followed:true}
                    : u)
            }
        }
        case "UNFOLLOW":{
            return {...state,
                users: state.users.map(u=> u.id === action.userId
                    ? {...u, followed:false}
                    : u)
            }
        }

        case "SET_USERS": {
            return {...state,
                users: [...state.users, ...action.users]
            }
        }

        default:
            return state
    }
}


export const followAC = (userId:number) => ({type: "FOLLOW", userId} as const)
export const unFollowAC = (userId:number) => ({type: "UNFOLLOW", userId} as const)
export const setUsersAC = (users:UserPropsType[]) => ({type: "SET_USERS", users} as const)


export default usersReducer

