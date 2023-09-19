import {applyMiddleware, combineReducers, createStore} from "redux";
import {profileReducer} from "./reducers/profileReducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import {usersReducer} from "./reducers/usersReducer";
import {authReducer} from "./reducers/authReducer";
import thunk from 'redux-thunk'
import {reducer as formReducer} from 'redux-form'

const rootReducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth:authReducer,
    form: formReducer
})

export type AppStateType = ReturnType<typeof rootReducers>

export const store = createStore(rootReducers, applyMiddleware(thunk))



export default store