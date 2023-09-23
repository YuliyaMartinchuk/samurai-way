import React from 'react'
import {
    Field,
    InjectedFormProps,
    reduxForm
} from 'redux-form'
import {Input} from "../common/Preloader/FormsControls/FormsControls";
import { required} from "../../utils/validators/validators";

export type FormDataType = {
    email:string,
    password:string,
    rememberMe:boolean
}

export const LoginForm = (props:InjectedFormProps<FormDataType>) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"email"}
                       name={"email"}
                       component={Input}
                       validate = {[required]}
                />
            </div>
            <div>
                <Field placeholder={"Password"}
                       type = {"password"}
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

export const LoginReduxForm = reduxForm<FormDataType>({
    form: "login"
})(LoginForm)
