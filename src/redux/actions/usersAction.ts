import {UserPropsType} from "../reducers/usersReducer";
import {
    TOGGLE_IS_FETCHING,
    USERS_FOLLOW,
    USERS_SET_CURRENT_PAGE,
    USERS_SET_TOTAL_USERS_COUNT,
    USERS_SET_USERS,
    USERS_UNFOLLOW
} from "./actionTypeTitle";


export type UsersActionsTypes =
    | ReturnType<typeof followAC>
    | ReturnType<typeof unFollowAC>
    | ReturnType<typeof setUsersAC>
    | ReturnType<typeof setCurrentPageAC>
    | ReturnType<typeof setTotalUsersCountAC>
    | ReturnType<typeof toggleIsFetchingAC>


export const followAC = (userId: number) => ({
    type: USERS_FOLLOW,
    payload: {
        userId
    }
} as const)

export const unFollowAC = (userId: number) => ({
    type: USERS_UNFOLLOW,
    payload: {
        userId
    }
} as const)


export const setUsersAC = (users: UserPropsType[]) =>
    ({
        type: USERS_SET_USERS,
        payload: {
            users
        }
    } as const)

export const setCurrentPageAC = (currentPage: number) =>
    ({
        type: USERS_SET_CURRENT_PAGE,
        payload: {currentPage}
    } as const)

export const setTotalUsersCountAC = (totalCount: number) =>
    ({
        type: USERS_SET_TOTAL_USERS_COUNT,
        payload: {totalCount}
    } as const)

export const toggleIsFetchingAC = (isFetching: boolean) =>
    ({
        type: TOGGLE_IS_FETCHING,
        payload: {isFetching}
    } as const)