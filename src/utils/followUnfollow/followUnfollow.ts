import {Dispatch} from "redux";
import {follow, toggleFollowingProgress,unFollow} from "../../redux/actions/usersAction";


type FollowUnfollowAction = ReturnType<typeof follow> | ReturnType<typeof unFollow>

export const followUnfollow = async (dispatch: Dispatch, userId:number, apiMethod: (userId: number) => Promise<any>,  actionCreator: (userId: number) => FollowUnfollowAction ) => {
    dispatch(toggleFollowingProgress(true, userId))
    const res = await apiMethod(userId)
    if (res.resultCode === 0) {
        dispatch(actionCreator(userId))
    }
    dispatch(toggleFollowingProgress(false, userId))
}
