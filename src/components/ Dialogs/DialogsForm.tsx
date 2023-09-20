import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";

export type FormAddMessageDataType = {
    newMassageBody: string
}

const AddMessageForm = (props: InjectedFormProps<FormAddMessageDataType>) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Enter your message"}
                       name={"newMassageBody"}
                       component={"textarea"}
                >
                </Field>
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

export const AddMessageFormReduxForm = reduxForm<FormAddMessageDataType>({
    form: "dialogsForm"
})(AddMessageForm)
