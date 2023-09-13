import React from "react";
import s from "./Profileinfo.module.css"
import {ProfileType} from "../../../redux/reducers/profileReducer";
import backgroundImage from "../../../assets/images/backgroundImage.jpg"
import {Preloader} from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";


type PropsType = {
    profile: ProfileType | null
}

const ProfileInfo: React.FC<PropsType> = ({profile}) => {
    if (!profile) {
        return <Preloader/>
    }
    return (
        <div className={s.profileUserCard}>
            <div className={s.profileUserCardImage}>
                <img className={s.backgroundImage} src={backgroundImage}/>
                <img className={s.avatar} src={profile?.photos.large}/>
            </div>

            <div className={s.descriptionBlock}>
                <h1>{profile.fullName}</h1>
                <ProfileStatus status={profile?.aboutMe}/>
                <div className={s.contacts}>
                    <span>My contacts: </span>
                    <span>{profile.contacts.website ? `${profile.contacts.website} | ` : null}</span>
                    <span>{profile.contacts.github ? `${profile.contacts.github} | ` : null}</span>
                    <span>{profile.contacts.facebook ? `${profile.contacts.facebook} | ` : null}</span>
                    <span>{profile.contacts.instagram ? `${profile.contacts.instagram} | ` : null}</span>
                    <span>{profile.contacts.mainLink ? `${profile.contacts.mainLink} | ` : null}</span>
                    <span>{profile.contacts.twitter ? `${profile?.contacts.twitter} | ` : null}</span>
                    <span>{profile.contacts.vk ? `${profile?.contacts.vk} | ` : null}</span>
                    <span>{profile.contacts.youtube ? `${profile?.contacts.youtube}` : null}</span>
                </div>
                <div className={s.otherDescription}>
                    <span>Job search: </span>
                    <span>{profile?.lookingForAJob}</span>
                    <span>{profile?.lookingForAJobDescription}</span>
                </div>
            </div>

        </div>
    )
}
export default ProfileInfo