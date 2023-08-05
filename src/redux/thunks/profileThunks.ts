import {Dispatch} from "redux";
import {profileAPI} from "../../api/api";
import {setUserProfile} from "../actions/profileActions";

export const getUserProfileTC = (userId:string) => (dispatch:Dispatch) => {
    profileAPI.getProfile(userId)
        .then((res) => {
           dispatch(setUserProfile(res.data))
        })
}