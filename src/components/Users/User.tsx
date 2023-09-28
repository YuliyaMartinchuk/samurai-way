import React from 'react';
import s from "./users.module.css";
import userPhoto from "../../assets/images/defaultUserPhoto.jpg";
import {
    FollowingInProgressType,
    UserType
} from "../../redux/reducers/usersReducer";
import {NavLink} from "react-router-dom";


type PropsType = {
    user: UserType
    followingInProgress: FollowingInProgressType
    follow: (userId: number) => void
    unFollow: (userId: number) => void
}


export const User: React.FC<PropsType> = ({
                                              user,
                                              follow,
                                              unFollow,
                                              followingInProgress
                                          }) => {
    return (
        <div>
            <span>
                <div>
                    <NavLink to={`profile/${user.id}`}>
                        <img
                            src={user.photos.small != null ? user.photos.small : userPhoto}
                            className={s.userPhoto} alt={"user photo"}/>
                            </NavLink>
                </div>
                <div>
                    {user.followed
                        ? <button
                            disabled={followingInProgress.some(id => id === user.id)}
                            onClick={() => {
                                unFollow(user.id)
                            }}>
                            unfollow</button>
                        : <button
                            disabled={followingInProgress.some(id => id === user.id)}
                            onClick={() => {
                                follow(user.id)
                            }}>
                            follow</button>
                    }
                </div>
            </span>
            <span>
                <span>
                    <div>{user.name}</div>
                    <div>{user.status}</div>
                </span>
                <span>
                    <div>{"u.location.country"}</div>
                    <div>{"u.location.city"}</div>
                </span>
            </span>
        </div>
    )
}





