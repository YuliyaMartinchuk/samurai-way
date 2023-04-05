import React from "react";
import s from "./Profileinfo.module.css"

const ProfileInfo = () => {
    return (<div >
        <div>
            <img src="https://i.pinimg.com/564x/61/1f/56/611f56fa4ed62d08428296604b568624.jpg"/>
        </div>

        <div className={s.descriptionBlock}>
            ava + description
        </div>

    </div>)
}
export default ProfileInfo