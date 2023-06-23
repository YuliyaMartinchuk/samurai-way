import React from 'react';
import {connect} from "react-redux";
import {Users} from "./Users";
import {AppStateType} from "../../redux/redux-store";
import {followAC, setUsersAC, unFollowAC, UserPropsType} from "../../redux/users-redusers";
import {Dispatch} from "redux";

type MapStateToPropsType = {
    users: UserPropsType[]
}

type MapDispatchToPropsType = {
    follow: (userId:number) => void
    unfollow: (userId:number) => void
    setUsers: (users:UserPropsType[]) => void

}

const mapStateToProps = (state: AppStateType):MapStateToPropsType => {
    return {
        users: state.usersPage.users
    }
}

const MapDispatchToProps = (dispatch: Dispatch):MapDispatchToPropsType => {
    return {
        follow:(userId) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId) => {
            dispatch(unFollowAC(userId))
        },
        setUsers:(users)=> {
            dispatch(setUsersAC(users))
        }
    }
}

const UsersContainer = connect(mapStateToProps, MapDispatchToProps)(Users)

export default UsersContainer