import {UsersActionsTypes} from "./usersAction";
import {ProfileActionsTypes} from "./profileActions";
import {SetUserDataTypes} from "./authAction";


export  type ActionType =
    | UsersActionsTypes
    | ProfileActionsTypes
    | SetUserDataTypes
