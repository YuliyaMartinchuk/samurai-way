import React from 'react';
import s from "./Message.module.css"


export type MessagePropsType = {
    id: number
    message: string
}


export const Message = (props: MessagePropsType) => {
    const {message} = props
    return (
        <div className={s.container}>
            <div className={s.messages__item}>{message}</div>
        </div>
    )
}
