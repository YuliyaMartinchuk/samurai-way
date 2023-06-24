import {ActionsTypes} from "./store";

export type UserPropsType = {
    id: number
    followed:boolean
    fullName: string
    location: {
        city: string
        country: string
    }
    status: string
    name: string
    photos: {
        small: string
        large: string
    },

}


const initialState = {
    users: [] as UserPropsType[]
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

