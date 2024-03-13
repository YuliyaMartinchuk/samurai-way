import React from 'react';
import {UserType} from "../../../../../redux/reducers/usersReducer";
import {NavLink} from "react-router-dom";
import defaultUserPhoto from "../../../../../assets/images/defaultUserPhotoIcon.png"
import s from "./Friend.module.css"

type PropsType = {
    friend: UserType
}

export const Friend = (props: PropsType) => {
    const {friend} = props

    return (
        <NavLink to={`/profile/${friend.id}`}>
            <div key={friend.id}>
                <div className={s.item}>
                    <img className={s.img} src={friend.photos.large || defaultUserPhoto} alt="avatar-friend"/>
                    <span className={s.userName}>
                        {friend.name}
                    </span>
                </div>
            </div>
        </NavLink>
    );
};

