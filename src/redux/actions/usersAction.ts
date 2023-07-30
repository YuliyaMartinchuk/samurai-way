import {UserType} from "../reducers/usersReducer";
import {
    TOGGLE_IS_FETCHING, TOGGLE_IS_FOLLOWING_PROGRESS,
    USERS_FOLLOW,
    USERS_SET_CURRENT_PAGE,
    USERS_SET_TOTAL_USERS_COUNT,
    USERS_SET_USERS,
    USERS_UNFOLLOW
} from "./actionTypeTitle";


export type UsersActionsTypes =
    | ReturnType<typeof follow>
    | ReturnType<typeof unFollow>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof toggleIsFetching>
    |ReturnType<typeof toggleFollowingProgress>


export const follow = (userId: number) => ({
    type: USERS_FOLLOW,
    payload: {
        userId
    }
} as const)

export const unFollow = (userId: number) => ({
    type: USERS_UNFOLLOW,
    payload: {
        userId
    }
} as const)


export const setUsers = (users: UserType[]) =>
    ({
        type: USERS_SET_USERS,
        payload: {
            users
        }
    } as const)

export const setCurrentPage = (currentPage: number) =>
    ({
        type: USERS_SET_CURRENT_PAGE,
        payload: {currentPage}
    } as const)

export const setTotalUsersCount = (totalCount: number) =>
    ({
        type: USERS_SET_TOTAL_USERS_COUNT,
        payload: {totalCount}
    } as const)

export const toggleIsFetching = (isFetching: boolean) =>
    ({
        type: TOGGLE_IS_FETCHING,
        payload: {isFetching}
    } as const)

export const toggleFollowingProgress = (isFetching: boolean, userId:number) =>
    ({
        type: TOGGLE_IS_FOLLOWING_PROGRESS,
        payload: {isFetching,userId}
    } as const)