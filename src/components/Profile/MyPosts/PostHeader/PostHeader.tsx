import {ProfileType} from "../../../../redux/reducers/profileReducer";
import {Preloader} from "../../../common/Preloader/Preloader";
import defaultUserPhoto from '../../../../assets/images/defaultUserPhoto.jpg';
import s from "./PostHeader.module.css"


type PropsType = {
    profile: ProfileType | null
}

export const PostHeader = (props: PropsType) => {
    const {profile} = props

    if (!profile) {
        return <Preloader/>
    }

    return (
        <div className={s.container}>
            <div className={s.user}>
                <div className={s.user__image}>
                    <img className={s.user__avatar} src={profile.photos.large  || defaultUserPhoto} alt="user-avatar"/>
                </div>
                <span className={s.user__Name}>{profile.fullName}</span>
            </div>
        </div>
    )
}