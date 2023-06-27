import React from 'react';
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {
    InitialStateType,
    UserPropsType
} from "../../redux/reducers/usersReducer";
import {Dispatch} from "redux";
import {Users} from "./Users";
import {
    followAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC,
    unFollowAC
} from "../../redux/actions/usersAction";


type MapStateToPropsType = {
    usersPage: InitialStateType
    pageSize:number
    totalUsersCount:number
    currentPage:number
}

type MapDispatchToPropsType = {
    follow: (userId:number) => void
    unfollow: (userId:number) => void
    setUsers: (users:UserPropsType[]) => void
    setCurrentPage: ( currentPage:number)=>void
    setTotalUsersCount: (totalCount:number)=>void


}

export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: AppStateType):MapStateToPropsType => {
    return {
        usersPage: state.usersPage,
        pageSize:state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage:state.usersPage.currentPage
    }
}

const mapDispatchToProps = (dispatch: Dispatch):MapDispatchToPropsType => {
    return {
        follow:(userId) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId) => {
            dispatch(unFollowAC(userId))
        },
        setUsers:(users)=> {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (currentPage)=> {
            dispatch(setCurrentPageAC(currentPage))
        },
        setTotalUsersCount: (totalCount)=> {
            dispatch(setTotalUsersCountAC(totalCount))
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users as any)

export default UsersContainer