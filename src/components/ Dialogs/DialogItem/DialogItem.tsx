import React from 'react';
import s from "./DialogItems.module.css"
import {NavLink} from "react-router-dom";
import {DialogUserType} from "../../../redux/reducers/dialogsReducer";


export type DialogsPropsType = {
    id: number
    dialog: DialogUserType
}
export const DialogItem = (props: DialogsPropsType) => {
    const {id, dialog} = props
    let path = `/dialogs/${id}`
    return <div className={s.container}>
        <NavLink key={dialog.id} to={path}>
            <li className={s.item}>
                <div className={s.item__image}>
                    <img className={s.item__avatar} src={dialog.avatar}
                         alt="contact-avatar"/>
                </div>
                <div className={s.userAndMessage}>
                    <div className={s.item__userName}>
                        {`${dialog.userFirstName} ${dialog.userLastName}`}
                    </div>
                    <div className={s.userMessage}>
                        'Sed diam nonummy nibh euismod tincidunt ut laoreet
                        dolore'
                    </div>
                </div>
            </li>
        </NavLink>
    </div>
}


