import React from 'react';
import {initialStateType} from "../../redux/reducers/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {compose} from "redux";
import {
    withAuthRedirectComponent
} from "../../hok/withAuthRedirect";
import {sendMessageAC} from "../../redux/actions/dialogsAction";

type MapStateToPropsType = {
    dialogsPage: initialStateType
}

type MapDispatchToPropsType = {
    sendMessage: (newMassageBody:string) => void
}

export type DialogsProps = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage,
    }
}

export const DialogsContainer
    = compose<any>(connect(mapStateToProps,
    {sendMessage:sendMessageAC }),
    withAuthRedirectComponent)(Dialogs )


