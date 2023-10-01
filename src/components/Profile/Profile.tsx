import React from "react";
import ProfileInfo from "./ProfileInfo/Profileinfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {ProfileType} from "../../redux/reducers/profileReducer";
import {
    ProfileDataFormType
} from "./ProfileInfo/ProfileDataForm/ProfileDataForm";
import {ProfileSidebar} from "./ProfileSidebar/ProfileSidebar";
import {UserType} from "../../redux/reducers/usersReducer";
import s from "./Profile.module.css"

type PropsType = {
    profile: ProfileType | null
    status: string
    isOwner: boolean
    updateStatus: (status: string) => void
    savePhoto: (file: File) => void
    saveProfile: (profile: ProfileDataFormType) => Promise<any>
    users: UserType[]
}

export const Profile: React.FC<PropsType> = ({
                                                 profile,
                                                 status,
                                                 updateStatus,
                                                 isOwner,
                                                 savePhoto, saveProfile, users
                                             }) => {
    return <div>
        <ProfileInfo profile={profile} status={status}
                     updateStatus={updateStatus} isOwner={isOwner}
                     savePhoto={savePhoto}
                     />
        <div className={s.PostsAndSidebarContainer}>
            <div>
                <MyPostsContainer/>
            </div>
            <div>
                <ProfileSidebar profile={profile} isOwner={isOwner}
                                saveProfile={saveProfile} users={users}/>
            </div>
        </div>

    </div>
}


