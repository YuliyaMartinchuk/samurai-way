import React from 'react';
import {initialStateType, sendMessageAC, updateNewMessageAC} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {compose} from "redux";
import {
    withAuthRedirectComponent
} from "../../hok/withAuthRedirect";

type MapStateToPropsType = {
    dialogsPage: initialStateType
}

type MapDispatchToPropsType = {
    updateNewMessageBody: (body: string) => void
    sendMessage: () => void
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage,
    }
}
//export type DialogsPropsType = MapStateToPropsType & MapDispatchToPropsType

// const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
//     return {
//         updateNewMessageBody: (body) => {
//             dispatch(updateNewMessageAC(body))
//         },
//         sendMessage: () => {
//             dispatch(sendMessageAC())
//         }
//     }
// }

export const DialogsContainer
    = compose<any>(connect(mapStateToProps,
    {sendMessage:sendMessageAC,updateNewMessageBody:updateNewMessageAC }),
    withAuthRedirectComponent)(Dialogs )


