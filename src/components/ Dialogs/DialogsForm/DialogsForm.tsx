import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Textarea} from "../../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import s from "./DialogsForm.module.css";

export type FormAddMessageDataType = {
    newMassageBody: string
}

const maxLength = maxLengthCreator(100)

const AddMessageForm = (props: InjectedFormProps<FormAddMessageDataType>) => {
    return (
        <div className={s.container}>
            <form onSubmit={props.handleSubmit}>
                <div className={s.textareaButtonBlock}>
                    <div>
                        <Field placeholder={"Enter your message"}
                               name={"newMassageBody"}
                               className={s.textarea}
                               component={Textarea}
                               validate={[required, maxLength]}
                        >
                        </Field>
                    </div>
                    <div>
                        <button className={s.button}>Send</button>
                    </div>

                </div>
            </form>
        </div>
    )
}

export const AddMessageFormReduxForm = reduxForm<FormAddMessageDataType>({
    form: "dialogsForm"
})(AddMessageForm)
