import React from 'react';
import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";
import {DialogItem, DialogsPropsType} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";


type MessagePropsType = {
    id: number
    message: string
}
type DialogPagePropsType = {
    dialogs: Array<DialogsPropsType>
    message: Array<MessagePropsType>
}

const Dialogs = (props:DialogPagePropsType) => {

    let dialogs = [
        {id:1, name:"Ann"},
        {id:2, name:"Valera"},
        {id:3, name:"Maks"},
        {id:4, name:"Alex"},
        {id:5, name:"Nick"},
        {id:6, name:"Tim"}
    ]
    let messages = [
        {id:1, message:"Hello"},
        {id:2, message:"How are you?"},
        {id:3, message:"Thank you"},
        {id:4, message:"What's up?"},
        {id:5, message:"How is your day going?"},
        {id:6, message:"Exactly!"}
    ]
    let dialogsElement = dialogs.map(d =>  <DialogItem name={d.name} id={d.id} />)
    let messageElement = messages.map(m =>  <Message message={m.message} id={m.id}/>)


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
