import {ProfileType} from "../../../../redux/reducers/profileReducer";
import ProfileDataForm, {
    ProfileDataFormType
} from "../../ProfileInfo/ProfileDataForm/ProfileDataForm";
import React, {useState} from "react";
import {Preloader} from "../../../common/Preloader/Preloader";
import s from "./AboutMe.module.css";

import {ProfileData} from "../../ProfileInfo/ProfileData/ProfileData";

type PropsType = {
    profile: ProfileType | null
    isOwner: boolean
    saveProfile: (profile: ProfileDataFormType) => Promise<any>
}

const AboutMe: React.FC<PropsType> = ({
                                          profile,
                                          isOwner,
                                          saveProfile
                                      }) => {

    const [editMode, setEditMode] = useState<boolean>(false)

    if (!profile) {
        return <Preloader/>
    }

    const goToEditMode = () => {
        setEditMode(true)
    }
    const onSubmit = (formData: ProfileDataFormType) => {
        saveProfile(formData)
            .then(() => setEditMode(false))
    }
    return (
        <div className={s.container}>
            <h3 className={s.title}>About Me:</h3>
            {editMode
                ? <ProfileDataForm profile={profile} initialValues={profile}
                                   onSubmit={onSubmit}/>
                : <ProfileData profile={profile} isOwner={isOwner}
                               goToEditMode={goToEditMode}/>
            }
        </div>
    )
}
export default AboutMe