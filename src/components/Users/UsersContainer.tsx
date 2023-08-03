import React from 'react';
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {
    FollowingInProgressType,
    InitialStateType,
    UserType
} from "../../redux/reducers/usersReducer";
import {Users} from "./Users";
import {Preloader} from "../common/Preloader/Preloader";
import {
    setCurrentPage,
    setTotalUsersCount,
    setUsers, toggleFollowingProgress,
    toggleIsFetching,
} from "../../redux/actions/usersAction";
import {changePageTC, followTC, getUsersTC, unFollowTC} from "../../redux/thunks/usersThunks";

type MapStateToPropsType = {
    usersPage: InitialStateType
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: FollowingInProgressType
}

type MapDispatchToPropsType = {
    getUsersTC: (currentPage: number, pageSize: number) => void
    changePageTC: (pageNumber: number, pageSize:number) => void
    followTC: (userId: number) => void
    unFollowTC: (userId: number) => void
    setUsers: (users: UserType[]) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalCount: number) => void
    toggleIsFetching: (isFetching: boolean) => void
    toggleFollowingProgress: (isFetching:boolean) => void

}

export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType

export class UsersContainerAPI extends React.Component<UsersPropsType> {

    componentDidMount() {
        this.props.getUsersTC(this.props.currentPage,this.props.pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        this.props.changePageTC(pageNumber,this.props.pageSize)
    }

    render() {
        return (
            <>
                {this.props.isFetching ? <Preloader/> : null}
                <Users
                    users={this.props.usersPage.users}
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    onPageChanged={this.onPageChanged}
                    currentPage={this.props.currentPage}
                    follow={this.props.followTC}
                    unFollow={this.props.unFollowTC}
                    followingInProgress={this.props.followingInProgress}
                />
            </>
        )
    }
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        usersPage: state.usersPage,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

export const UsersContainer = connect(mapStateToProps, {
    followTC, unFollowTC, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching,
    toggleFollowingProgress, getUsersTC, changePageTC
})(UsersContainerAPI as any)


