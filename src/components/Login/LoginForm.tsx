import React from 'react'
import {
    InjectedFormProps,
    reduxForm
} from 'redux-form'
import {
    createField, GetStringKeys,
    Input
} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import s from "./Login.module.css"

export type FormDataType = {
    email: string,
    password: string,
    rememberMe: boolean
    captcha:  string | null
}
type LoginFormPropsType = {
    captchaUrl: string | null
}


type LoginFormValuesTypeKeys = GetStringKeys<FormDataType>
type AllSampleFormProps = LoginFormPropsType & InjectedFormProps<FormDataType, LoginFormPropsType>

export const LoginForm: React.FC<AllSampleFormProps> = ({error, handleSubmit,captchaUrl}) => {
    return (
        <form onSubmit={handleSubmit} className={s.loginForm}>
            <div>
                {createField<LoginFormValuesTypeKeys>("Email", "email", [required], Input)}
            </div>
            <div>
                {createField<LoginFormValuesTypeKeys>("Password", "password", [required], Input, {type: 'password'})}
            </div>
            <div>
                {createField<LoginFormValuesTypeKeys>("", "rememberMe", [], Input, {type: 'checkbox'}, "rememberMe")}
            </div>
            {captchaUrl && <img src={captchaUrl} alt={"captchaUrl"}/>}
            {captchaUrl &&
                createField<LoginFormValuesTypeKeys>("Symbols from image", "captcha", [required], Input)}
            {error && <div className={s.formSummaryError}>
                {error}
            </div>}
            <div>
                <button className={s.loginButton}>Login</button>
            </div>
        </form>
    )

}

export const LoginReduxForm = reduxForm<FormDataType,LoginFormPropsType>({
    form: "login"
})(LoginForm)
