import React from "react";
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {setAuthUserDataAC} from "../../redux/actions/authAction";

type MapStateToPropsType = {
    isAuth: boolean
    login:string | null
}
type MapDispatchToPropsType = {
    setAuthUserDataAC: (id: number | null, email: string | null, login: string | null) => void
}

export type  HeaderPropsType = MapStateToPropsType & MapDispatchToPropsType

export class HeaderContainerAPI extends React.Component<HeaderPropsType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me` , {withCredentials:true})
            .then((res) => {
                let { id, email, login} = res.data.data
                if (res.data.resultCode === 0) {
                    this.props.setAuthUserDataAC( id, email, login)
                }

            })}

    render() {
    return (
        <Header {...this.props}/>
    )
}}

const mapStateToProps = (state: AppStateType): MapStateToPropsType  => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}

export const HeaderContainer = connect(mapStateToProps, {setAuthUserDataAC})(HeaderContainerAPI as any)