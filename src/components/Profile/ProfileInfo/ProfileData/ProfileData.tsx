import {ProfileType} from "../../../../redux/reducers/profileReducer";
import React from "react";
import s from "./ProfileData.module.css"
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
    return <div className={s.container}>
        <div className={s.description}>Full name:</div>
        <div className={s.info}>
            {profile?.fullName}
        </div>
        <div>
            <div className={s.description}>Looking for a job:</div>
            <div className={s.info}>
                {profile?.lookingForAJob ? "Yes" : "No"}
            </div>

        </div>
        {profile?.lookingForAJob &&
            <div>
                <div className={s.description}>My professional skills:</div>
                <div className={s.info}>{profile?.lookingForAJobDescription}
                </div>
            </div>
        }
        <div>
            <div className={s.description}>About me:</div>
            <div className={s.info}>
                {profile?.aboutMe}
            </div>
        </div>
        {profile?.contacts &&
            <div>
                <div className={s.description}>Contacts:</div>
                <div className={s.contacts}>
                    {Object.entries(profile.contacts).map(([key, value]) =>
                        value &&
                        <Contact key={key} contactTitle={key}
                                 contactValue={profile.contacts[key]}/>
                    )}
                </div>
            </div>}
        <div>
            {isOwner && <button className={s.editButton}
                                onClick={goToEditMode}>edit</button>}
        </div>
    </div>
}