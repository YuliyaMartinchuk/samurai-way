import React from 'react';

import {FormDataType, LoginReduxForm} from "./LoginForm";
import {compose} from "redux";
import {connect} from "react-redux";
import {loginTC} from "../../redux/thunks/authThunks";
import {AppStateType} from "../../redux/redux-store";
import {Redirect} from "react-router-dom";

type LoginType = {
    login: (formData: FormDataType) => void
    isAuth: boolean
}

export const Login = (props:LoginType) => {
    const onSubmit = (formData:FormDataType) => {
       props.login(formData)
    }
    if (props.isAuth) {
        return <Redirect to={"/profile"}/>
    }
    return <div>
        <h1>LOGIN</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
};

type MapStateToPropsType = {
    isAuth: boolean
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth
    }
}

export const LoginContainer = compose<any>(
    connect(mapStateToProps, {
        login:loginTC
    }),
)(Login)
