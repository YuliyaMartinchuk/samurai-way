import React from "react";
import s from "./Profileinfo.module.css"
import {ProfileType} from "../../../redux/reducers/profileReducer";


type PropsType = {
    aboutMe: string
}

const ProfileStatus: React.FC<PropsType> = ({aboutMe}) => {

    return (
        <div>
            <div>
                <span className={s.status}>{aboutMe}</span>
            </div>
            <div>
                <input className={s.status}>{aboutMe}</input>
            </div>
        </div>
    )
}
export default ProfileStatus