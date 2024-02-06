import {Dispatch} from "redux";
import {
    savePhotoSuccess,
    setUserProfile,
    setUserStatus
} from "../actions/profileActions";
import {ProfileType} from "../reducers/profileReducer";
import {AppStateType, AppThunkDispatch} from "../redux-store";
import {stopSubmit} from "redux-form";
import {profileAPI} from "../../api";
import {ResultCode} from "../../api/instance";

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
    if (res.data.resultCode === ResultCode.Success) {
        dispatch(setUserStatus(status))
    }
}

export const savePhotoTC = (file: string) => async (dispatch: Dispatch) => {
    const res = await profileAPI.savePhoto(file)
    if (res.data.resultCode === ResultCode.Success) {
        dispatch(savePhotoSuccess(res.data.data.photos))
    }
}

export const saveProfileTC = (profile: ProfileType) => async (dispatch: AppThunkDispatch, getState: () => AppStateType) => {
    const userId = getState().auth.userId
    if (!userId) {
        console.warn('userId not found')
        return
    }
    const res = await profileAPI.saveProfile(profile)

    if (res.data.resultCode === ResultCode.Success) {
        dispatch(getUserProfileTC(String(userId)))
    } else {
        dispatch(stopSubmit('edit-profile', {_error: res.data.messages[0] || 'Incorrect data'}))
        return Promise.reject(res.data.messages[0])
    }
}
