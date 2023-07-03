import {PROFILE_ADD_POST, PROFILE_SET_USER_PROFILE, PROFILE_UPDATE_NEW_POST_TEXT} from "./actionTypeTitle";

export type ProfileActionsTypes =
    | ReturnType<typeof addPostAC>
    | ReturnType<typeof updateNewPostAC>
    | ReturnType<typeof setUserProfile>


export const addPostAC = () => ({type: PROFILE_ADD_POST} as const)

export const updateNewPostAC = (newText: string) => ({
    type: PROFILE_UPDATE_NEW_POST_TEXT,
    payload: {newText}
} as const)


export const setUserProfile = (profile: null) => ({
    type: PROFILE_SET_USER_PROFILE,
    payload: {profile}
} as const)