import {ProfileType} from "../../../../redux/reducers/profileReducer";
import React from "react";
import s from "../Profileinfo.module.css";
import {Contact} from "../Contact/Contact";

type ProfileData = {
    profile: ProfileType | null
    isOwner: boolean
    goToEditMode: () => void
}

export const ProfileData: React.FC<ProfileData> = ({
                                                       profile,
                                                       isOwner, goToEditMode
                                                   }) => {
    return <div className={s.descriptionBlock}>
        <div>
            <span>Full name: </span>{profile?.fullName}
        </div>
        <div className={s.description}>
            <div>
                <span>Looking for a job: </span> {profile?.lookingForAJob ? "yes" : "no"}
            </div>
            {profile?.lookingForAJob &&
                <div>
                    <span>My professional skills: </span> {profile?.lookingForAJobDescription}
                </div>
            }
            <div>
                <span>About me: </span> {profile?.aboutMe}
            </div>
            {profile?.contacts &&
                <div className={s.contacts}>
                    <span>Contacts: </span> {Object.keys(profile.contacts).map(key => {
                    return <Contact key={key} contactTitle={key}
                                    contactValue={profile.contacts[key]}/>
                })}
                </div>}
        </div>
        <div>
            {isOwner && <button onClick={goToEditMode}>edit</button>}
        </div>
    </div>
}