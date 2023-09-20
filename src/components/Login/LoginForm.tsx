import React from 'react'
import {
    Field,
    InjectedFormProps,
    reduxForm
} from 'redux-form'

export type LoginFormDataType = {
    login:string,
    password:string,
    rememberMe:boolean
}

export const LoginForm = (props:InjectedFormProps<LoginFormDataType>) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Login"} name={"login"}  component={"input"}/>
            </div>
            <div>
                <Field placeholder={"Password"} name={"password"} component={"input"}/>
            </div>
            <div>
                <Field type={"checkbox"} name={"rememberMe"} component={"input"}/> remember me
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
