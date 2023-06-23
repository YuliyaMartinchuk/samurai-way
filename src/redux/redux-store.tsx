import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersRedusers from "./users-redusers";


// export type reducersType = ReturnType<typeof rootReducers>

const rootReducers = combineReducers({
    profilePage:profileReducer,
    dialogsPage:dialogsReducer,
    sidebar:sidebarReducer,
    usersPage: usersRedusers
})

export type AppStateType = ReturnType<typeof rootReducers>

export const store = createStore(rootReducers)

// @ts-ignore
window.store = store

export default store