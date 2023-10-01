import React, {ChangeEvent} from "react";
import s from "./Profileinfo.module.css"
import {
    ProfileType
} from "../../../redux/reducers/profileReducer";
import backgroundImage from "../../../assets/images/backgroundImage.jpg"
import {Preloader} from "../../common/Preloader/Preloader";
import defaultUserPhoto from "../../../assets/images/defaultUserPhoto.jpg"
import {ProfileStatusWithHooks} from "./ProfileStatusWithHooks";


type PropsType = {
    profile: ProfileType | null
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (file: File) => void

}

const ProfileInfo: React.FC<PropsType> = ({
                                              profile,
                                              status,
                                              updateStatus,
                                              isOwner,
                                              savePhoto
                                          }) => {

    if (!profile) {
        return <Preloader/>
    }

    const mainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        e.target.files && savePhoto(e.target.files[0])
    }

    return (
        <div className={s.profileUserCard}>
            <div className={s.profileUserCardImage}>
                <img className={s.backgroundImage} src={backgroundImage}
                     alt={"background image"}/>
                <img className={s.avatar}
                     src={profile?.photos.large || defaultUserPhoto}
                     alt={"profile photo"}/>
                <div>
                    {isOwner &&
                        <input type="file" onChange={mainPhotoSelected}/>}
                </div>
                <h1 className={s.profileName}>{profile.fullName}</h1>
            </div>
            <ProfileStatusWithHooks status={status}
                                    updateStatus={updateStatus}/>
        </div>
    )
}

export default ProfileInfo