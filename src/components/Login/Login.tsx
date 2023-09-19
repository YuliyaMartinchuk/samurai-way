import React from 'react';
import {
    Field,
    InjectedFormProps,
    reducer as formReducer,
    reduxForm
} from 'redux-form'

type FormDataType = {
    login:string,
    password:string,
    rememberMe:boolean
}

 const LoginForm = (props:InjectedFormProps<FormDataType>) => {
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

const LoginReduxForm = reduxForm<FormDataType>({
    form: "login"
})(LoginForm)

export const Login = () => {
    const onSubmit = (formData:FormDataType) => {
        console.log(formData)
    }
    return <div>
        <h1>LOGIN</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
};

