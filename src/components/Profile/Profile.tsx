import React from "react";
import s from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (<div className={s.content}>
        <div>
            <img src="https://i.pinimg.com/564x/61/1f/56/611f56fa4ed62d08428296604b568624.jpg"/>
        </div>

        <div>
            ava + description
        </div>
        <MyPosts/>

    </div>)
}
export default Profile