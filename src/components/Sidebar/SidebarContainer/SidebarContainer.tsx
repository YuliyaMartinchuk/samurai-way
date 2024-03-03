import {AppStateType} from "../../../redux/redux-store";
import {getUsers} from "../../../redux/selectors/usersSelectors";
import {UserType} from "../../../redux/reducers/usersReducer";
import {Sidebar} from "../Sidebar";
import {connect} from "react-redux";

type MapStateToProps = { users: UserType[] }

export type SidebarPropsType = MapStateToProps

const mapStateToProps = (state: AppStateType): MapStateToProps => {
    return {
        users: getUsers(state)
    }
}

export const SidebarContainer = connect(mapStateToProps)(Sidebar)
