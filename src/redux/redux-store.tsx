import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

export type reducersType = ReturnType<typeof reducers>


let reducers = combineReducers({
    profileReducer:profileReducer,
    dialogsReducer:dialogsReducer,
    sidebarReducer:sidebarReducer
})



let store = createStore(reducers)

export default store