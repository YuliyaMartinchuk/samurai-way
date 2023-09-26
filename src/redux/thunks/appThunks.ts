import {getAuthUserDataTC} from "./authThunks";
import {AppThunkDispatch} from "../redux-store";
import {initializedSuccess} from "../actions/appAction";

export const initializeAppTC = () => async(dispatch: AppThunkDispatch) => {
    const promise = dispatch(getAuthUserDataTC())
    await  promise
        dispatch(initializedSuccess())
}