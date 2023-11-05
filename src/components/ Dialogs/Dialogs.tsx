import React from 'react';
import s from "./Dialogs.module.css"
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogsProps} from "./DialogsContainer";
import {AddMessageFormReduxForm, FormAddMessageDataType} from "./DialogsForm/DialogsForm";


const Dialogs = (props: DialogsProps) => {
    const state = props.dialogsPage
    const dialogsElement = state.dialogs.map(d => <DialogItem key={d.id} id={d.id} dialog={d}/>)
    const messageElement = state.messages.map(m => <Message message={m.message} id={m.id} key={m.id}/>)

    const addNewMessage = (values:FormAddMessageDataType) => {
        props.sendMessage(values.newMassageBody)
    }

    return (
        <div className={s.container}>
            <div className={s.dialogsItems}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                <div>{messageElement}</div>
                <AddMessageFormReduxForm onSubmit={addNewMessage}/>
            </div>
        </div>
    )
}
export default Dialogs

