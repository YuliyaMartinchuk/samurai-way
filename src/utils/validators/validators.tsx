import React from "react";


export const required = (value:string) => {
    if (value) return undefined
    return "Field is required"

}

export type FieldValidatorType = (value: string) => string | undefined

export const maxLengthCreator = (maxLength:number): FieldValidatorType => (value:string) => {
    if (value && value.length>maxLength) return `Max length is ${maxLength} symbols`
    return undefined
}