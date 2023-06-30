import React from 'react';
import s from "./users.module.css";
import userPhoto from "../../assets/images/user.jpg";
import {UserPropsType} from "../../redux/reducers/usersReducer";

type PropsType = {
    users: UserPropsType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    onPageChanged: (pageNumber: number) => void
}


export const Users: React.FC<PropsType> = ({
                                               users,
                                               pageSize,
                                               totalUsersCount,
                                               currentPage,
                                               follow,
                                               unfollow,
                                               onPageChanged
                                           }) => {
    const pagesCount = Math.ceil(totalUsersCount / pageSize)
    const pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)}
        return (
            <div>
                <div>
                    {pages.map(p => {
                            return (
                                <span onClick={() => onPageChanged(p)}
                                      className={currentPage === p ? s.selectedPage : ""}>{p}</span>
                            )
                        }
                    )}
                </div>

                {users.map(u =>
                    <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photos.small != null ? u.photos.small : userPhoto} className={s.userPhoto}/>
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => unfollow(u.id)}>unfollow</button>
                                : <button onClick={() => follow(u.id)}>follow</button>
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








