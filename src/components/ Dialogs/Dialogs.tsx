import React from 'react';
import s from "./Dialogs.module.css"
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogPagePropsType, MessagePropsType, ProfilePagePropsType, RootStateType} from "../../redux/state";

type DialogsProps = {
    dialogsPage: DialogPagePropsType
}

const Dialogs = (props:DialogsProps) => {


    let dialogsElement = props.dialogsPage.dialogs.map(d =>  <DialogItem name={d.name} id={d.id} />)
    let messageElement = props.dialogsPage.messages.map(m =>  <Message message={m.message} id={m.id}/>)


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
