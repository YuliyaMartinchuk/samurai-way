import {Dispatch} from "redux";
import {authAPI, securityAPI} from "../../api/api";
import {getCaptchaUrl, setAuthUserData} from "../actions/authAction";
import {AppThunkDispatch} from "../redux-store";
import {FormDataType} from "../../components/Login/LoginForm";
import {stopSubmit} from "redux-form";

export const getAuthUserDataTC = () => async (dispatch: Dispatch) => {
    const res = await authAPI.me()
    let {id, email, login} = res.data.data
    if (res.data.resultCode === 0) {
        dispatch(setAuthUserData(id, email, login, true))
    }
}

export const loginTC = (data: FormDataType) => async (dispatch: AppThunkDispatch) => {
    const res = await authAPI.login(data)
    if (res.data.resultCode === 0) {
        dispatch(getAuthUserDataTC())
    }  else {
        if (res.data.resultCode ===10 ) {
            dispatch(getCaptchaUrlTC())
        }
        const message = res.data.messages.length > 0 ? res.data.messages[0] : "Some error"
        dispatch(stopSubmit("login", {_error: message}))
    }
}

export const logoutTC = () => async (dispatch: Dispatch) => {
    const res = await authAPI.logout()
    if (res.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
    }
}

export const getCaptchaUrlTC = () => async (dispatch: Dispatch) => {
    const res = await securityAPI.getCaptchaUrl()
        dispatch(getCaptchaUrl(res.data.url))
}