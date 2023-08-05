import React from "react";
import ProfileInfo from "./ProfileInfo/Profileinfo";
import MyPostsContainer from "./MyPosts/Post/MyPostsContainer";
import {ProfilePropsType} from "./ProfileContainer";



export const Profile: React.FC<ProfilePropsType> = ({profile}) => {

    return (
        <div>
            <ProfileInfo profile={profile}/>
            <MyPostsContainer/>

        </div>)
}


