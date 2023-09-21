import React, {
    DetailedHTMLProps, TextareaHTMLAttributes
} from "react";
import {WrappedFieldMetaProps} from "redux-form";
import styles from "./FormsControls.module.css"


type DefaultInputPropsType = DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>

type FormsControlType = {
    input: DefaultInputPropsType
    meta: WrappedFieldMetaProps
    FormType: string
}

const FormControl: React.FC<FormsControlType> = ({input, meta, FormType, ...props})=> {
    const hasError = meta.error && meta.touched
    return (
        <div className={styles.formControl + " " + (hasError? styles.error : "")}>
            <div>
                <FormType {...input} {...props}/>
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}


export const Textarea: React.FC<FormsControlType> = ({ ...props}) => {
return   <FormControl {...props} FormType="textarea" />

}

export const Input: React.FC<FormsControlType> = ({...props}) => {
    return <FormControl {...props} FormType="input" />
}