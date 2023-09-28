import React from 'react';
import {
    FollowingInProgressType,
    UserType
} from "../../redux/reducers/usersReducer";
import {Pagination} from "../common/Pagination/Pagination";
import {User} from "./User";

type PropsType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    followingInProgress: FollowingInProgressType
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    onPageChanged: (pageNumber: number) => void
}


export const Users: React.FC<PropsType> = ({
                                               users,
                                               pageSize,
                                               totalUsersCount,
                                               currentPage,
                                               follow,
                                               unFollow,
                                               onPageChanged,
                                               followingInProgress
                                           }) => {
    return (
        <div>
            <Pagination currentPage={currentPage}
                        pageSize={pageSize}
                        totalUsersCount={totalUsersCount}
                        onPageChanged={onPageChanged}/>
            {users.map(user => <User key={user.id} user={user}
                                     followingInProgress={followingInProgress}
                                     follow={follow} unFollow={unFollow}/>)}
        </div>
    );
}





