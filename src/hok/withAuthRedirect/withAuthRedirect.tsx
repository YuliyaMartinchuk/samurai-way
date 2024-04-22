import {Redirect} from "react-router-dom";
import {AppStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import React from "react";

type MapStateToPropsType = {
    isAuth: boolean
}
const mapStateToPropsRedirect = (state: AppStateType): MapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth
    }
}
export function withAuthRedirectComponent<T>(Component: React.Component<T>) {
    const RedirectComponent = (props: MapStateToPropsType) => {
        const {isAuth, ...restProps} = props
        if (!isAuth) return <Redirect to={"/login"}/>

        // @ts-ignore
        return <Component {...restProps as T}/>
    }
    const ConnectedRedirectComponent = connect(mapStateToPropsRedirect)(RedirectComponent)
    return ConnectedRedirectComponent
}
