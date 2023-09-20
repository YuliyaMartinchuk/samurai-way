import React from 'react';

import {LoginFormDataType, LoginReduxForm} from "./LoginForm";

export const Login = () => {
    const onSubmit = (formData:LoginFormDataType) => {
        console.log(formData)
    }
    return <div>
        <h1>LOGIN</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
};

