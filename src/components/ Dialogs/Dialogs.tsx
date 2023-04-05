import React from 'react';
import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";

type DialogItemPropsType = {
    name: string
    id: number
}
type MessagePropsType = {
   message: string
}

const DialogItem = (props: DialogItemPropsType) => {
    let path = "/dialogs/1" + props.id
    return <div className={s.dialog + " " + s.active}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}

const Message = (props:MessagePropsType) => {
    return  <div className={s.message}>{props.message}</div>
}

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name="Ann" id={1}/>
                <DialogItem name="Valera" id={2}/>
                <DialogItem name="Maks" id={3}/>
                <DialogItem name="Alex" id={4}/>
                <DialogItem name="Nick" id={5}/>
                <DialogItem name="Tim" id={6}/>
            </div>
            <div className={s.messages}>
                <Message message="Hello!" />
                <Message message="How are you?" />
                <Message message="Thank you" />
            </div>

        </div>

    )
}
export default Dialogs
