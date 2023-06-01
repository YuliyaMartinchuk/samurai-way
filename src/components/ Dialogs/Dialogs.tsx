import React, {ChangeEvent} from 'react';
import s from "./Dialogs.module.css"
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {ActionsTypes, DialogPagePropsType,} from "../../redux/store";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";

type DialogsProps = {
    dialogsPage: DialogPagePropsType
    dispatch: (action:ActionsTypes)=> void
}

const Dialogs = (props:DialogsProps) => {


    let dialogsElement = props.dialogsPage.dialogs.map(d =>  <DialogItem name={d.name} id={d.id} />)
    let messageElement = props.dialogsPage.messages.map(m =>  <Message message={m.message} id={m.id}/>)
    let newMassageBody =props.dialogsPage.newMessageBody


    const onSendMessageClick= ()=> {
        props.dispatch(sendMessageCreator())
    }

    const onNewMessageChange= (e:ChangeEvent<HTMLTextAreaElement>)=> {
        let body = e.target.value
        props.dispatch(updateNewMessageBodyCreator(body))
    }


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                <div>{messageElement}</div>
                <div>
                    <div><textarea
                        value={newMassageBody}
                        onChange={onNewMessageChange}
                        placeholder={"Enter your message"}></textarea></div>
                    <div><button onClick={onSendMessageClick}>Send</button></div>
                </div>
            </div>
        </div>
    )
}
export default Dialogs
