import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";


// export type reducersType = ReturnType<typeof rootReducers>

const rootReducers = combineReducers({
    profilePage:profileReducer,
    dialogsPage:dialogsReducer,
    sidebar:sidebarReducer
})

export type AppStateType = ReturnType<typeof rootReducers>

export const store = createStore(rootReducers)

export default store