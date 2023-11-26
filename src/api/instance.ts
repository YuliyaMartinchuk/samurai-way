import axios from "axios";

export const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/"
})

export enum ResultCode {
    Success = 0,
    Error = 1,
    CaptchaIsRequired = 10
}

export type BaseResponseType<T = {}, RC = ResultCode> = {
    resultCode: RC
    messages: string[]
    data: T
}