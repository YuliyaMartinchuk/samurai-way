import React from 'react';
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {Store} from "redux";
import {reducersType} from "../../redux/redux-store";
import {ActionsTypes} from "../../redux/store";
type DialogsProps = {
    store:Store<reducersType, ActionsTypes>
}

const DialogsContainer = (props:DialogsProps) => {
let state=props.store.getState().dialogsReducer

    const onSendMessageClick= ()=> {
        props.store.dispatch(sendMessageCreator())
    }

    const onNewMessageChange= (body:string)=> {
        props.store.dispatch(updateNewMessageBodyCreator(body))
    }


    return <Dialogs
           updateNewMessageBody = {onNewMessageChange}
           sendMessage={onSendMessageClick}
           dialogsPage={state}
         />

}
export default DialogsContainer
