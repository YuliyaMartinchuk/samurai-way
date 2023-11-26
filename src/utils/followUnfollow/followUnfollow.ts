import {Dispatch} from "redux";
import {follow, toggleFollowingProgress,unFollow} from "../../redux/actions/usersAction";
import {ResultCode} from "../../api/instance";


type FollowUnfollowAction = ReturnType<typeof follow> | ReturnType<typeof unFollow>

export const followUnfollow = async (dispatch: Dispatch, userId:number, apiMethod: (userId: number) => Promise<any>,  actionCreator: (userId: number) => FollowUnfollowAction ) => {
    dispatch(toggleFollowingProgress(true, userId))
    const res = await apiMethod(userId)
    if (res?.resultCode === ResultCode.Success) {
        dispatch(actionCreator(userId))
    }
    dispatch(toggleFollowingProgress(false, userId))
}
