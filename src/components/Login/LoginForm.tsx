import React from 'react'
import {
    Field,
    InjectedFormProps,
    reduxForm
} from 'redux-form'
import {Input} from "../common/Preloader/FormsControls/FormsControls";
import { required} from "../../utils/validators/validators";

export type LoginFormDataType = {
    login:string,
    password:string,
    rememberMe:boolean
}

export const LoginForm = (props:InjectedFormProps<LoginFormDataType>) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Login"}
                       name={"login"}
                       component={Input}
                       validate = {[required]}
                />
            </div>
            <div>
                <Field placeholder={"Password"}
                       name={"password"}
                       component={Input}
                       validate = {[required]}
                />
            </div>
            <div>
                <Field type={"checkbox"}
                       name={"rememberMe"}
                       component={Input}
                /> remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )

}

export const LoginReduxForm = reduxForm<LoginFormDataType>({
    form: "login"
})(LoginForm)
