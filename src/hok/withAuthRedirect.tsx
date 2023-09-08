import {Redirect} from "react-router-dom";
import {AppStateType} from "../redux/redux-store";
import {connect} from "react-redux";
import React,{ ComponentType } from "react";

type MapStateToPropsType = {
    isAuth: boolean
}
const mapStateToPropsRedirect = (state: AppStateType): MapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth
    }
}

export function withAuthRedirect<T>(Component: ComponentType<T>){
    const RedirectComponent = (props: MapStateToPropsType) => {
        const {isAuth, ...restProps} = props
        if (!props.isAuth) return <Redirect to={"/login"}/>

        // @ts-ignore
        return <Component {...restProps as T}/>
    }
    const ConnectedRedirectComponent = connect(mapStateToPropsRedirect)(RedirectComponent)
    return ConnectedRedirectComponent
}
