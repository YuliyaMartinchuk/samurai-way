import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {
    maxLengthCreator,
    required
} from "../../../utils/validators/validators";
import {Textarea} from "../../common/Preloader/FormsControls/FormsControls";


export type AddPostFormType = {
    newPostText: string
}

const maxLength10 =  maxLengthCreator(10)

const AddNewPostForm = (props: InjectedFormProps<AddPostFormType>) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Enter your post"}
                       name={"newPostText"}
                       component={Textarea}
                       validate = {[required, maxLength10]}
                >
                </Field>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

export const AddNewPostFormReduxForm = reduxForm<AddPostFormType>({
    form: "addPostForm"
})(AddNewPostForm)
