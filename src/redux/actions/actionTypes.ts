import {UsersActionsTypes} from "./usersAction";
import {ProfileActionsTypes} from "./profileActions";
import {AuthActionsTypes} from "./authAction";
import {AppActionTypes} from "./appAction";


export  type ActionType =
    | UsersActionsTypes
    | ProfileActionsTypes
    | AuthActionsTypes
    | AppActionTypes
