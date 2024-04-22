import React from 'react';
import s from "./user.module.css";
import userPhoto from "../../../assets/images/defaultUserPhoto.png";
import {
    FollowingInProgressType,
    UserType
} from "../../../redux/reducers/usersReducer";
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
        <div className={s.root}>
            <div className={s.container}>
            <span>
                <div>
                    <NavLink to={`profile/${user.id}`}>
                        <img
                            src={user.photos.small != null ? user.photos.small : userPhoto}
                            className={s.userPhoto} alt={"User photo"}/>
                            </NavLink>
                </div>
                <div>
                    {user.followed
                        ? <button className={s.buttonUnfollow}
                                  disabled={followingInProgress.some(id => id === user.id)}
                                  onClick={() => {
                                      unFollow(user.id)
                                  }}>
                            unfollow</button>
                        : <button className={s.buttonFollow}
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
                    <div className={s.name}>{user.name}</div>
                    <div className={s.status}>{user.status}</div>
                </span>
                <span>
                    <div>{"u.location.country"}</div>
                    <div>{"u.location.city"}</div>
                </span>
            </span>
            </div>
        </div>
    )
}





