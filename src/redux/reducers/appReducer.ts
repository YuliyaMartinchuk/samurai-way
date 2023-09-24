
import {ActionType} from "../actions/actionTypes";
import {INITIALIZED_SUCCESS_APP} from "../actions/actionTypeTitle";

const initialState  = {
    initialized: false
}

export type InitialStateType = typeof initialState

export const appReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case INITIALIZED_SUCCESS_APP: {
            return {
                ...state,
                initialized: true
            }
        }
        default:
            return state
    }
}


