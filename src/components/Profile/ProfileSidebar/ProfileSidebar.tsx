import React from "react";
import {ProfileType} from "../../../redux/reducers/profileReducer";
import {
    ProfileDataFormType
} from "../ProfileInfo/ProfileDataForm/ProfileDataForm";
import AboutMe from "./AboutMe/AboutMe";
import Friends from "./Friends/Friends";
import {UserType} from "../../../redux/reducers/usersReducer";

type PropsType = {
    profile: ProfileType | null
    isOwner: boolean
    saveProfile: (profile: ProfileDataFormType) => Promise<any>
    users: UserType[]
}
export const ProfileSidebar: React.FC<PropsType> =({profile, isOwner,saveProfile, users})=> {
    return <div>
        <AboutMe profile={profile} isOwner={isOwner} saveProfile={saveProfile}/>
        <Friends users={users}/>

    </div>
}