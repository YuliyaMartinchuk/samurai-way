import React from 'react';
import s from "./../Dialogs.module.css"


export type MessagePropsType = {
    id: number
    message: string
}

export const Message = (props:MessagePropsType) => {
    return  <div className={s.dialogs}>{props.message}</div>
}
