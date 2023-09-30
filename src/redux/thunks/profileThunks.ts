import {Dispatch} from "redux";
import {profileAPI} from "../../api/api";
import {
    savePhotoSuccess,
    setUserProfile,
    setUserStatus
} from "../actions/profileActions";

export const getUserProfileTC = (userId: string) => async (dispatch: Dispatch) => {
    const res = await profileAPI.getProfile(userId)
    dispatch(setUserProfile(res.data))
}

export const getUserStatusTC = (userId: string) => async (dispatch: Dispatch) => {
    const res = await profileAPI.getStatus(userId)
    dispatch(setUserStatus(res.data))
}

export const updateUserStatusTC = (status: string) => async (dispatch: Dispatch) => {
    const res = await profileAPI.updateStatus(status)
    if (res.data.resultCode === 0) {
        dispatch(setUserStatus(status))
    }
}

export const savePhotoTC = (file: string) => async (dispatch: Dispatch) => {
    const res = await profileAPI.savePhoto(file)
    if (res.data.resultCode === 0) {
        dispatch(savePhotoSuccess(res.data.data.photos))
    }
}