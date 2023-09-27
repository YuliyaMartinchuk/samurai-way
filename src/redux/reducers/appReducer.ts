
import {ActionType} from "../actions/actionTypes";
import {APP_INITIALIZED_SUCCESS} from "../actions/actionTypeTitle";

const initialState  = {
    initialized: false
}

export type InitialStateType = typeof initialState

export const appReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case APP_INITIALIZED_SUCCESS: {
            return {
                ...state,
                initialized: true
            }
        }
        default:
            return state
    }
}


