import {Dispatch} from "redux";
import {authAPI} from "../../api/api";
import {setAuthUserDataAC} from "../actions/authAction";

export const getAuthUserDataTC = () => (dispatch:Dispatch) => {
    authAPI.me()
        .then((res) => {
            let { id, email, login} = res.data.data
            if (res.data.resultCode === 0) {
                dispatch(setAuthUserDataAC( id, email, login))
            }

        })
}