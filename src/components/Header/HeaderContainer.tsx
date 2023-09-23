import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {getAuthUserDataTC, logoutTC} from "../../redux/thunks/authThunks";

type MapStateToPropsType = {
    isAuth: boolean
    login:string | null
}
type MapDispatchToPropsType = {
    getAuthUserData: () => void
    logout: () => void
}

export type  HeaderPropsType = MapStateToPropsType & MapDispatchToPropsType

export class HeaderContainerAPI extends React.Component<HeaderPropsType> {
    componentDidMount() {
       this.props.getAuthUserData()
      }

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

export const HeaderContainer = connect(mapStateToProps, {getAuthUserData:getAuthUserDataTC, logout:logoutTC})(HeaderContainerAPI as any)