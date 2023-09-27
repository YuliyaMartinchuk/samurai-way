import {
    PROFILE_ADD_POST, PROFILE_DELETE_POST,
    PROFILE_SET_STATUS,
    PROFILE_SET_USER_PROFILE
} from "./actionTypeTitle";
import {ProfileType} from "../reducers/profileReducer";

export type ProfileActionsTypes =
    | ReturnType<typeof addPostAC>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof setUserStatus>
    | ReturnType<typeof deletePostAC>


export const addPostAC = (newPostText: string) => ({
    type: PROFILE_ADD_POST,
    newPostText
} as const)

export const setUserProfile = (profile: ProfileType | null) => ({
    type: PROFILE_SET_USER_PROFILE,
    payload: {profile}
} as const)

export const setUserStatus = (status: string) => ({
    type: PROFILE_SET_STATUS,
    payload: {status}
} as const)


export const deletePostAC = (id: number) => ({
    type: PROFILE_DELETE_POST,
    payload: {id}
} as const)
