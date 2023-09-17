import {Dispatch} from "redux";
import {profileAPI} from "../../api/api";
import {setUserProfile, setUserStatus} from "../actions/profileActions";

export const getUserProfileTC = (userId: string) => (dispatch: Dispatch) => {
    profileAPI.getProfile(userId)
        .then((res) => {
            dispatch(setUserProfile(res.data))
        })
}

export const getUserStatusTC = (userId: string) => (dispatch: Dispatch) => {
    profileAPI.getStatus(userId)
        .then((res) => {
            dispatch(setUserStatus(res.data))
        })
}

export const updateUserStatusTC = (status: string) => (dispatch: Dispatch) => {
    profileAPI.updateStatus(status)
        .then((res) => {
            if (res.data.resultCode === 0) {
                dispatch(setUserStatus(status))
            }
        })
}