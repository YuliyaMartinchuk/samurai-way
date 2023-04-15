import React from 'react';
import s from "./Dialogs.module.css"
import {DialogItem, DialogsPropsType} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";


export type MessagePropsType = {
    id: number
    message: string
}
export type DialogsPropsType = {
    id: number
    name: string
}

export type DialogPagePropsType = {
    dialogs: Array<DialogsPropsType>
    messages: Array<MessagePropsType>
}

const Dialogs = (props:DialogPagePropsType) => {


    let dialogsElement = props.dialogs.map(d =>  <DialogItem name={d.name} id={d.id} />)
    let messageElement = props.messages.map(m =>  <Message message={m.message} id={m.id}/>)


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                {messageElement}
            </div>
        </div>
    )
}
export default Dialogs
