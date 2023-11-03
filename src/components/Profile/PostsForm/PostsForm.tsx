import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {
    maxLengthCreator,
    required
} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls"
import s from "./PostsForm.module.css"


export type AddPostFormType = {
    newPostText: string
}

const maxLength10 =  maxLengthCreator(10)

const AddNewPostForm = (props: InjectedFormProps<AddPostFormType>) => {
    return (
        <div className={s.container}>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field placeholder={"Enter your post"}
                           name={"newPostText"}
                           className={s.textarea}
                           component={Textarea}
                           validate = {[required, maxLength10]}
                    >
                    </Field>
                </div>
                <div className={s.buttonContainer}>
                    <button className={s.button}>Add post</button>
                </div>
            </form>
        </div>

    )
}

export const AddNewPostFormReduxForm = reduxForm<AddPostFormType>({
    form: "addPostForm"
})(AddNewPostForm)
