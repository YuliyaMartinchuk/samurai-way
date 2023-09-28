import React from 'react';
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {
    FollowingInProgressType,
    UserType,
} from "../../redux/reducers/usersReducer";
import {Users} from "./Users";
import {Preloader} from "../common/Preloader/Preloader";
import {
    changePageTC,
    followTC,
    getUsersTC,
    unFollowTC
} from "../../redux/thunks/usersThunks";
import {compose} from "redux";
import {
    getCurrentPage, getFollowingInProgress, getIsFetching,
    getPageSize,
    getTotalUsersCount, getUsers,
} from "../../redux/selectors/usersSelectors";


type MapStateToPropsType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: FollowingInProgressType
}

type MapDispatchToPropsType = {
    getUsers: (currentPage: number, pageSize: number) => void
    changePage: (pageNumber: number, pageSize: number) => void
    follow: (userId: number) => void
    unFollow: (userId: number) => void
}

export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType

export class UsersContainerAPI extends React.Component<UsersPropsType> {

    componentDidMount() {
        const {currentPage, pageSize} = this.props
        this.props.getUsers(currentPage, pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        const {pageSize} = this.props
        this.props.changePage(pageNumber, pageSize)
    }

    render() {
        return (
            <>
                {this.props.isFetching ? <Preloader/> : null}
                <Users
                    users={this.props.users}
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    onPageChanged={this.onPageChanged}
                    currentPage={this.props.currentPage}
                    follow={this.props.follow}
                    unFollow={this.props.unFollow}
                    followingInProgress={this.props.followingInProgress}
                />
            </>
        )
    }
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}

export const UsersContainer = compose<any>(connect(mapStateToProps, {
    getUsers: getUsersTC,
    changePage: changePageTC,
    follow: followTC,
    unFollow: unFollowTC
}))(UsersContainerAPI)


