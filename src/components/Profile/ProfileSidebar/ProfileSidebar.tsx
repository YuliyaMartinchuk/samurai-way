import React from "react";
import {ProfileType} from "../../../redux/reducers/profileReducer";
import {
    ProfileDataFormType
} from "../ProfileInfo/ProfileDataForm";
import AboutMe from "./AboutMe/AboutMe";
import {Friends} from "./Friends";
import {UserType} from "../../../redux/reducers/usersReducer";
import s from "./ProfileSidebar.module.css"


type PropsType = {
    profile: ProfileType | null
    isOwner: boolean
    saveProfile: (profile: ProfileDataFormType) => Promise<any>
    users: UserType[]
}
export const ProfileSidebar: React.FC<PropsType> =({profile, isOwner,saveProfile, users})=> {
    return <div className={s.container}>
        <AboutMe profile={profile} isOwner={isOwner} saveProfile={saveProfile}/>
        <Friends users={users}/>
    </div>
}