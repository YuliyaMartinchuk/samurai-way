import {usersAPI} from "../../api/api";
import {Dispatch} from "redux";
import {
    follow,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toggleIsFetching, unFollow
} from "../actions/usersAction";
import {followUnfollow} from "../../utils/followUnfollow/followUnfollow";

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
    await followUnfollow(dispatch, userId,usersAPI.follow.bind(usersAPI), follow )
}

export const unFollowTC = (userId: number) => async (dispatch: Dispatch) => {
    await followUnfollow(dispatch, userId,usersAPI.unFollow.bind(usersAPI), unFollow )
}
