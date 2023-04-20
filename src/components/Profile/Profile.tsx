import React from "react";
import ProfileInfo from "./ProfileInfo/Profileinfo";
import {ProfilePagePropsType} from "../../redux/state";
import MyPosts from "./MyPosts/MyPosts";

type ProfileProps = {
    profilePage: ProfilePagePropsType
}

const Profile = (props:ProfileProps) => {
    return (<div >
       <ProfileInfo />
       <MyPosts  profilePage={ props.profilePage }/>

    </div>)
}
export default Profile