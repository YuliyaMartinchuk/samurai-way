import {usersAPI} from "../../api/api";
import {Dispatch} from "redux";
import {
    follow,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toggleFollowingProgress,
    toggleIsFetching, unFollow
} from "../actions/usersAction";

export const getUsersTC = (page: number, pageSize: number) => async (dispatch: Dispatch) => {
    dispatch(toggleIsFetching(true))
    const res = await usersAPI.getUsers(page, pageSize)
    dispatch(toggleIsFetching(false))
    dispatch(setUsers(res.items))
    dispatch(setTotalUsersCount(res.totalCount))
}

export const changePageTC = (pageNumber: number, pageSize: number) => async (dispatch: Dispatch) => {
    dispatch(toggleIsFetching(true))
    dispatch(setCurrentPage(pageNumber))
    const res = await usersAPI.getUsers(pageNumber, pageSize)
    dispatch(toggleIsFetching(false))
    dispatch(setUsers(res.items))
}

export const followTC = (userId: number) => async (dispatch: Dispatch) => {
    dispatch(toggleFollowingProgress(true, userId))
    const res = await usersAPI.follow(userId)
    if (res.resultCode === 0) {
        dispatch(follow(userId))
    }
    dispatch(toggleFollowingProgress(false, userId))
}

export const unFollowTC = (userId: number) => async (dispatch: Dispatch) => {
    dispatch(toggleFollowingProgress(true, userId))
    const res = await usersAPI.unFollow(userId)
    if (res.resultCode === 0) {
        dispatch(unFollow(userId))
    }
    dispatch(toggleFollowingProgress(false, userId))
}
