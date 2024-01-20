import s from "./ChatMessage.module.css";
import {NavLink} from "react-router-dom";
import React from "react";
import {ChatMessageType} from "../../../api/chatApi";

export type PropsType = {
    message: ChatMessageType
}

export const ChatMessage = (props: PropsType) => {
    const {message} = props

    let path = `/profile/${message.userId}`
    return <div className={s.container}>
        <NavLink key={message.userId} to={path}>
            <li className={s.item}>
                <div className={s.item__image}>
                    <img className={s.item__photo} src={message.photo} alt="contact-photo"/>
                </div>
                <div className={s.userAndMessage}>
                    <div className={s.item__userName}>
                        {`${message.userName}`}
                    </div>
                    <div className={s.userMessage}>
                        {message.message}
                    </div>
                </div>
            </li>
        </NavLink>
    </div>
}


