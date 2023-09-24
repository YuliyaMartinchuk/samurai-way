import {Dispatch} from "redux";
import {authAPI} from "../../api/api";
import {setAuthUserDataAC} from "../actions/authAction";
import {AppThunkDispatch} from "../redux-store";
import {FormDataType} from "../../components/Login/LoginForm";
import {stopSubmit} from "redux-form";

export const getAuthUserDataTC = () => (dispatch:Dispatch) => {
   return authAPI.me()
        .then((res) => {
            let { id, email, login} = res.data.data
            if (res.data.resultCode === 0) {
                dispatch(setAuthUserDataAC( id, email, login, true))
            }

        })
}

export const loginTC = (data:FormDataType) => (dispatch:AppThunkDispatch) => {
    authAPI.login(data)
        .then((res) => {
            if (res.data.resultCode === 0) {
                dispatch(getAuthUserDataTC())
            } else {
                const message =  res.data.messages.length > 0 ? res.data.messages[0] : "Some error"
                dispatch(stopSubmit("login", {_error: message}))
            }
        })
}

export const logoutTC = () => (dispatch:Dispatch) => {
    authAPI.logout()
        .then((res) => {
            if (res.data.resultCode === 0) {
                dispatch(setAuthUserDataAC(null, null, null, false))
            }
        })
}