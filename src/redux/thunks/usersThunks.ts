import {usersAPI} from "../../api/api";
import {Dispatch} from "redux";
import {setTotalUsersCount, setUsers, toggleIsFetching} from "../actions/usersAction";

export const getUsersTC = (currentPage: number,pageSize:number ) => (dispatch: Dispatch) => {
    dispatch(toggleIsFetching(true))
        usersAPI.getUsers(currentPage,pageSize).then(data => {
            dispatch(toggleIsFetching(false))
            dispatch(setUsers(data.items))
            dispatch(setTotalUsersCount(data.totalCount))
        })
}