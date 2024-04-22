import {AppStateType} from "../redux-store";
import {createSelector} from "reselect";
import {
    FilterType,
    FollowingInProgressType,
    UserType
} from "../reducers/usersReducer";

export const getUsersSelector = (state: AppStateType): UserType[] => state.usersPage.users

export const getUsers = createSelector(getUsersSelector, (users) => {
    return users.filter(u => true)
})

export const getPageSize = (state: AppStateType): number => {
    return state.usersPage.pageSize
}

export const getTotalUsersCount = (state: AppStateType): number => {
    return state.usersPage.totalUsersCount
}

export const getCurrentPage = (state: AppStateType): number => {
    return state.usersPage.currentPage
}

export const getIsFetching = (state: AppStateType): boolean => {
    return state.usersPage.isFetching
}

export const getFollowingInProgress = (state: AppStateType): FollowingInProgressType => {
    return state.usersPage.followingInProgress
}

export const getUsersFilter = (state: AppStateType): FilterType => state.usersPage.filter
