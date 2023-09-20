import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";


export type AddPostFormType = {
    newPostText: string
}

const AddNewPostForm = (props: InjectedFormProps<AddPostFormType>) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Enter your post"}
                       name={"newPostText"}
                       component={"textarea"}
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
