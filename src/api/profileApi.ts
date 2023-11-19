import { instance} from './instance';
import {ProfileType} from "../redux/reducers/profileReducer";

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
