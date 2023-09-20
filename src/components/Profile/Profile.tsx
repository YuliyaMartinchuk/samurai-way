import React from "react";
import ProfileInfo from "./ProfileInfo/Profileinfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {ProfilePropsType} from "./ProfileContainer";



export const Profile: React.FC<ProfilePropsType> = ({profile, status, updateStatus}) => {
    return (
        <div>
            <ProfileInfo profile={profile} status={status}  updateStatus={updateStatus}/>
            <MyPostsContainer/>
        </div>)
}


