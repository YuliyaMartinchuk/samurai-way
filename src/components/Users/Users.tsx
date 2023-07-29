import React from 'react';
import s from "./users.module.css";
import userPhoto from "../../assets/images/user.jpg";
import {UserType} from "../../redux/reducers/usersReducer";
import {NavLink} from "react-router-dom";
import {usersAPI} from "../../api/api";

type PropsType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    followingInProgress: boolean
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    onPageChanged: (pageNumber: number) => void
    toggleFollowingProgress: (isFetching:boolean) => void
}


export const Users: React.FC<PropsType> = ({users, pageSize, totalUsersCount,
                                               currentPage, follow, unFollow, onPageChanged,
                                               toggleFollowingProgress, followingInProgress}) => {
    const pagesCount = Math.ceil(totalUsersCount / pageSize)
    const pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return (
        <div>
            <div>
                {pages.map(p => {
                        return (
                            <span onClick={() => onPageChanged(p)}
                                  className={currentPage === p ? s.selectedPage : ""}>{p}</span>
                        )})}
            </div>

            {users.map(u =>
                <div key={u.id}>
                    <span>
                        <div>
                            <NavLink to={`profile/${u.id}`}>
                            <img src={u.photos.small != null ? u.photos.small : userPhoto} className={s.userPhoto}/>
                            </NavLink>
                        </div>
                        <div>
                            {u.followed
                                ? <button disabled={followingInProgress} onClick={() => {
                                    toggleFollowingProgress(true)
                                    usersAPI.unFollow(u.id)
                                        .then(data => {
                                            if (data.resultCode === 0) {
                                               unFollow(u.id)
                                            }
                                            toggleFollowingProgress(false)
                                        })
                                }}>unfollow</button>
                                : <button disabled={followingInProgress} onClick={() => {
                                    toggleFollowingProgress(true)
                                    usersAPI.follow(u.id)
                                        .then(data => {
                                            if (data.resultCode === 0) {
                                            follow(u.id)
                                            }
                                            toggleFollowingProgress(false)
                                        })
                                }}>follow</button>
                            }
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{"u.location.country"}</div>
                            <div>{"u.location.city"}</div>
                    </span>
                    </span>
                </div>)}
        </div>
    );
}





