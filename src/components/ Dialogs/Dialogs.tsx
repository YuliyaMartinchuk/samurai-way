import React from 'react';
import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";


type DialogsPropsType = {
    id: number
    name: string
}

type MessagePropsType = {
    id: number
    message: string
}

type DialogPagePropsType = {
    DialogItem: Array<DialogsPropsType>
    Message: Array<MessagePropsType>
}

const DialogItem = (props: DialogsPropsType) => {
    let path = "/dialogs/1" + props.id
    return <div className={s.dialog + " " + s.active}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}

const Message = (props:MessagePropsType) => {
    return  <div className={s.message}>{props.message}</div>
}

const Dialogs = (props:DialogPagePropsType) => {
    let dialogsData = [
        {id:1, name:"Ann"},
        {id:2, name:"Valera"},
        {id:3, name:"Maks"},
        {id:4, name:"Alex"},
        {id:5, name:"Nick"},
        {id:6, name:"Tim"}
    ]
    let messageData = [
        {id:1, message:"Hello"},
        {id:2, message:"How are you?"},
        {id:3, message:"Thank you"},
        {id:4, message:"What's up?"},
        {id:5, message:"How is your day going?"},
        {id:6, message:"Exactly!"}

    ]
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />

            </div>
            <div className={s.messages}>
                <Message  message={messageData[0].message}  id={messageData[0].id}/>
                <Message  message={messageData[1].message}  id={messageData[1].id}/>
            </div>

        </div>

    )
}
export default Dialogs
