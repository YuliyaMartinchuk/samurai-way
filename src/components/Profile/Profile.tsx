import React from "react";
import s from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/Profileinfo";
import Post from "./MyPosts/Post/Post";



const Profile = () => {
    return (<div >
       <ProfileInfo />
       <MyPosts  />

    </div>)
}
export default Profile