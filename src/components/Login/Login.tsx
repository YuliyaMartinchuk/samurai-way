import React from 'react';

import {FormDataType, LoginReduxForm} from "./LoginForm";
import {compose} from "redux";
import {connect} from "react-redux";
import {loginTC} from "../../redux/thunks/authThunks";
import {AppStateType} from "../../redux/redux-store";
import {Redirect} from "react-router-dom";
import s from "./Login.module.css"

type LoginType = {
    login: (formData: FormDataType) => void
    isAuth: boolean
    captchaUrl: string | null
}

export const Login: React.FC<LoginType> = ({login, isAuth, captchaUrl}) => {
    const onSubmit = (formData: FormDataType) => {
        login(formData)
    }
    if (isAuth) {
        return <Redirect to={"/profile"}/>
    }
    return (
        <div className={s.wrapper}>
            <div className={s.container}>
                <div className={s.titleWrapper}>
                    <hr/>
                    <p className={s.title}>Login</p>
                    <hr/>
                </div>
                <LoginReduxForm
                    onSubmit={onSubmit}
                    captchaUrl={captchaUrl}/>
            </div>
            <div className={s.testLoginInfo}>
                <p>To log in get registered here:</p>
                <p>
                    <a href={'https://social-network.samuraijs.com/'} target={'_blank'} rel="noreferrer">
                        {' '}
                        https://social-network.samuraijs.com/
                    </a>
                </p>
                <p>or use common test account credentials:</p>
                <p>Email: free@samuraijs.com</p>
                <p>Password: free</p>
            </div>
        </div>
    )
};

type MapStateToPropsType = {
    isAuth: boolean
    captchaUrl: string | null
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth,
        captchaUrl: state.auth.captchaUrl
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {
        login: loginTC
    }),
)(Login)
