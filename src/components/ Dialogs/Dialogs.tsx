import React from 'react';
import s from "./Dialogs.module.css"
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {DialogsProps} from "./DialogsContainer";


export type FormAddMessageDataType = {
    newMassageBody:string
}

const AddMessageForm = (props:InjectedFormProps<FormAddMessageDataType> ) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Enter your message"} name={"newMassageBody"} component={"textarea"}></Field>
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

const AddMessageFormReduxForm = reduxForm<FormAddMessageDataType>( {
    form: "dialogsForm"
})(AddMessageForm)

const Dialogs = (props: DialogsProps) => {
    const state = props.dialogsPage
    const dialogsElement = state.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id}/>)
    const messageElement = state.messages.map(m => <Message message={m.message} id={m.id} key={m.id}/>)

    const addNewMessage = (values:FormAddMessageDataType) => {
        props.sendMessage(values.newMassageBody)
    }

    return (
        <div className={s.dialogs}>
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

