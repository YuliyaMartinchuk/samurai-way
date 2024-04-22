import {instance} from "./instance";

export const usersAPI = {
    getUsers(currentPage: number = 1, pageSize: number = 10, term: string = '',
             friend: null | boolean = null) {
        const friendParam = friend === null ? '' : `&friend=${friend}`
        return instance.get(`users?page=${currentPage}&count=${pageSize}&term=${term}${friendParam}`)
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
