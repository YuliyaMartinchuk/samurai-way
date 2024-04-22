import {FormDataType} from "../components/Login/LoginForm";
import {BaseResponseType, instance} from "./instance";

export const authAPI = {
    me() {
        return instance.get<BaseResponseType<MeResponseDataType>>(`auth/me`)
    },

    login(data: FormDataType) {
        return instance.post<BaseResponseType<LoginResponseDataType>>(`auth/login`, data)
    },
    logout() {
        return instance.delete<BaseResponseType>(`auth/login`)

    }
}

type MeResponseDataType = {
    id: number
    email: string
    login: string
}

type LoginResponseDataType = {
    userId: number
}
