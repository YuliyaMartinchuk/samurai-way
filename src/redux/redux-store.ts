import {AnyAction, applyMiddleware, combineReducers, createStore} from "redux";
import {profileReducer} from "./reducers/profileReducer";
import dialogsReducer from "./reducers/dialogsReducer";
import sidebarReducer from "./reducers/sidebarReducer";
import {usersReducer} from "./reducers/usersReducer";
import {authReducer} from "./reducers/authReducer";
import thunk, {ThunkDispatch} from 'redux-thunk'
import {reducer as formReducer} from 'redux-form'
import {appReducer} from "./reducers/appReducer";
import {composeWithDevTools} from "@redux-devtools/extension";

const rootReducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
})

export type AppStateType = ReturnType<typeof rootReducers>
export const store = createStore(rootReducers, composeWithDevTools(applyMiddleware(thunk)))
export type AppThunkDispatch = ThunkDispatch<AppStateType, any, AnyAction>


export default store
