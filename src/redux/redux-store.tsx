import {combineReducers, createStore} from "redux";
import profileReducer from "./reducers/profileReducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./reducers/usersReducer";


// export type reducersType = ReturnType<typeof rootReducers>

const rootReducers = combineReducers({
    profilePage:profileReducer,
    dialogsPage:dialogsReducer,
    sidebar:sidebarReducer,
    usersPage: usersReducer
})

export type AppStateType = ReturnType<typeof rootReducers>

export const store = createStore(rootReducers)

// @ts-ignore
window.store = store

export default store