import axios from "axios";
import {FormDataType} from "../components/Login/LoginForm";
import {ProfileType} from "../redux/reducers/profileReducer";

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/"
})


export const usersAPI = {
    getUsers(currentPage: number = 1, pageSize: number = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(res => res.data)
    },
    follow(userId: number) {
        return instance.post(`follow/${userId}`, {})
            .then(res => res.data)
    },
    unFollow(userId: number) {
        return instance.delete(`follow/${userId}`)
            .then(res => res.data)
    }
}

export const profileAPI = {
    getProfile(userId: string) {
        return instance.get(`profile/${userId}`)
    },
    getStatus(userId: string) {
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus(status: string) {
        return instance.put(`profile/status`, {status: status})
    },
    savePhoto (photoFile: string) {
        const formData = new FormData()
        formData.append('image', photoFile)
    return instance.put(`profile/photo`, formData,{
        headers: {
            'Content-Type': 'multipart/form-data'
        }})
    },
    saveProfile (profile: ProfileType) {
        return instance.put(`profile`, profile)
    }
}


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


