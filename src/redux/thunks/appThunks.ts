import {getAuthUserDataTC} from "./authThunks";
import {AppThunkDispatch} from "../redux-store";
import {initializedSuccess} from "../actions/appAction";

export const initializeAppTC = () => (dispatch: AppThunkDispatch) => {
    const promise = dispatch(getAuthUserDataTC())
    promise.then(() => {
        dispatch(initializedSuccess())
    })
}
