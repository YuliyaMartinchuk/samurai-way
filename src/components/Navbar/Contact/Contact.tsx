import React from 'react';
import {NavLink} from 'react-router-dom';

import s from './Contact.module.css';


import defaultUserPhoto from '../../../assets/images/defaultUserPhoto.jpg';
import {UserType} from "../../../redux/reducers/usersReducer";

type PropsType = {
    contact: UserType
}

export const Contact = (props: PropsType) => {
    const {contact} = props

    return (
        <>
            <li key={contact.id} className={s.item}>
                <NavLink to={`/profile/${contact.id}`} className={s.item__link}
                         activeClassName={s.item__link_active}>
                    <div className={s.item__image}>
                        <img className={s.item__avatar} src={contact.photos.large || defaultUserPhoto}
                             alt="contact-avatar"/>
                    </div>
                    <span
                        className={s.item__userName}>{contact.name}</span>
                </NavLink>
            </li>
        </>
    );
};

