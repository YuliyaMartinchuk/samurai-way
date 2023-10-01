import React from 'react'
import {
    InjectedFormProps,
    reduxForm
} from 'redux-form'
import {
    createField, GetStringKeys,
    Input
} from "../common/FormsControls/FormsControls";
import { required} from "../../utils/validators/validators";
import style from "../common/FormsControls/FormsControls.module.css"

export type FormDataType = {
    email:string,
    password:string,
    rememberMe:boolean
}

type LoginFormType = InjectedFormProps<FormDataType>
type LoginFormValuesTypeKeys = GetStringKeys<FormDataType>;

export const LoginForm: React.FC<LoginFormType> = ({error,handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                {createField<LoginFormValuesTypeKeys>("Email", "email", [required], Input)}
            </div>
            <div>
                {createField<LoginFormValuesTypeKeys>("Password", "password", [required], Input, {type: 'password'})}
            </div>
            <div>
                {createField<LoginFormValuesTypeKeys>( "","rememberMe",[], Input, {type: 'checkbox'}, "rememberMe")}
            </div>
            {error && <div className={style.formSummaryError}>
                {error}
            </div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    )

}

export const LoginReduxForm = reduxForm<FormDataType>({
    form: "login"
})(LoginForm)
