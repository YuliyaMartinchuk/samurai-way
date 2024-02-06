
import {Dispatch} from "redux";
import {
    follow,
    setCurrentPage,
    setTotalUsersCount,
    setUsers, setUsersFilter,
    toggleIsFetching, unFollow
} from "../actions/usersAction";
import {followUnfollow} from "../../utils/followUnfollow/followUnfollow";
import {usersAPI} from "../../api";
import {FilterType} from "../reducers/usersReducer";

export const getUsersTC = (page: number, pageSize: number,
                           filter: FilterType) => async (dispatch: Dispatch) => {
    dispatch(toggleIsFetching(true))
    dispatch(setCurrentPage(page))

    dispatch(setUsersFilter(filter))
    const res = await usersAPI.getUsers(page, pageSize, filter.term, filter.friend)
    dispatch(toggleIsFetching(false))
    dispatch(setUsers(res.items))
    dispatch(setTotalUsersCount(res.totalCount)) }

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
