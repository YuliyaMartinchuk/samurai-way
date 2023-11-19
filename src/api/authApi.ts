import {FormDataType} from "../components/Login/LoginForm";
import {instance} from "./instance";

export const authAPI = {
    me() {
        return instance.get(`auth/me`)
    },

    login(data:FormDataType) {
        return instance.post(`auth/login`, data)
    },
    logout() {
        return instance.delete(`auth/login`)

    }
}