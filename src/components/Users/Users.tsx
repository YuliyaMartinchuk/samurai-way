import React from 'react';
import {
    FilterType,
    FollowingInProgressType,
    UserType
} from "../../redux/reducers/usersReducer";
import {Pagination} from "../common/Pagination/Pagination";
import {User} from "./User";
import s from "./users.module.css"
import {UsersFilteredButtons} from "./UsersFilteredButtons";

type PropsType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    followingInProgress: FollowingInProgressType
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    onPageChanged: (pageNumber: number) => void
    filter: FilterType
    onFilterChanged: (filter: FilterType) => void
}


export const Users: React.FC<PropsType> = ({
                                               users,
                                               pageSize,
                                               totalUsersCount,
                                               currentPage,
                                               follow,
                                               unFollow,
                                               onPageChanged,
                                               followingInProgress,
                                               onFilterChanged, filter
                                           }) => {
    return (
        <div className={s.root}>
        <div className={s.container}>
            <div className={s.usersHeader}>
                <h2 className={s.title}>Users</h2>
                <UsersFilteredButtons filter={filter} onFilterChanged={onFilterChanged}/>
            </div>
           <div className={s.users}>
               {users.map(user => <User key={user.id} user={user}
                                        followingInProgress={followingInProgress}
                                        follow={follow} unFollow={unFollow}/>)}
           </div>

            <Pagination currentPage={currentPage}
                        pageSize={pageSize}
                        totalItemsCount={totalUsersCount}
                        onPageChanged={onPageChanged}/>
        </div>
        </div>
    );
}





