import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Textarea} from "../common/Preloader/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";

export type FormAddMessageDataType = {
    newMassageBody: string
}

const maxLength =  maxLengthCreator(100)

const AddMessageForm = (props: InjectedFormProps<FormAddMessageDataType>) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Enter your message"}
                       name={"newMassageBody"}
                       component={Textarea}
                       validate = {[required, maxLength]}
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
