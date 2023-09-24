import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {logoutTC} from "../../redux/thunks/authThunks";

type MapStateToPropsType = {
    isAuth: boolean
    login:string | null
}
type MapDispatchToPropsType = {
    logout: () => void
}

export type  HeaderPropsType = MapStateToPropsType & MapDispatchToPropsType

export class HeaderContainerAPI extends React.Component<HeaderPropsType> {
    render() {
    return (
        <Header {...this.props}/>
    )
}}

const mapStateToProps = (state: AppStateType): MapStateToPropsType  => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
    }
}

export const HeaderContainer = connect(mapStateToProps, {logout:logoutTC})(HeaderContainerAPI as any)