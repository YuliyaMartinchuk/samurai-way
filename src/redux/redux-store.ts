import {AnyAction, applyMiddleware, combineReducers, createStore} from "redux";
import {profileReducer} from "./reducers/profileReducer";
import dialogsReducer from "./reducers/dialogs-reducer";
import sidebarReducer from "./reducers/sidebar-reducer";
import {usersReducer} from "./reducers/usersReducer";
import {authReducer} from "./reducers/authReducer";
import thunk, {ThunkDispatch} from 'redux-thunk'
import {reducer as formReducer} from 'redux-form'
import {appReducer} from "./reducers/appReducer";

const rootReducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth:authReducer,
    form: formReducer,
    app:appReducer
})

export type AppStateType = ReturnType<typeof rootReducers>

export const store = createStore(rootReducers, applyMiddleware(thunk))
export type AppThunkDispatch = ThunkDispatch<AppStateType, any, AnyAction>


export default store