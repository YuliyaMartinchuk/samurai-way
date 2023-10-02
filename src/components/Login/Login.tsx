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
    captchaUrl:string|null
}

export const Login: React.FC<LoginType> = ({login, isAuth, captchaUrl}) => {
    const onSubmit = (formData:FormDataType) => {
       login(formData)
    }
    if (isAuth) {
        return <Redirect to={"/profile"}/>
    }
    return <div>
        <h1>LOGIN</h1>
        <LoginReduxForm onSubmit={onSubmit} captchaUrl={captchaUrl} />
    </div>
};

type MapStateToPropsType = {
    isAuth: boolean
    captchaUrl:string|null
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth,
        captchaUrl: state.auth.captchaUrl
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {
        login:loginTC
    }),
)(Login)
