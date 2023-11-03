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
        <div>
            <span>Full name: </span>{profile?.fullName}
        </div>
        <div className={s.description}>
            <div>
                <span>Looking for a job: </span>
                <div className={s.info}>
                    {profile?.lookingForAJob ? "yes" : "no"}
                </div>

            </div>
            {profile?.lookingForAJob &&
                <div>
                    <span>My professional skills: </span>
                    <div className={s.info}>{profile?.lookingForAJobDescription}
                    </div>
                </div>
            }
            <div>
                <span>About me: </span>
                <div className={s.info}>
                    {profile?.aboutMe}
                </div>
            </div>
            {profile?.contacts &&
                <div >
                    <span>Contacts: </span>
                    <div className={s.contacts}>
                        {Object.entries(profile.contacts).map(([key, value]) =>
                            value &&
                             <Contact key={key} contactTitle={key}
                                            contactValue={profile.contacts[key]}/>
                        )}
                    </div>

                </div>}
        </div>
        <div>
            {isOwner && <button onClick={goToEditMode}>edit</button>}
        </div>
    </div>
}