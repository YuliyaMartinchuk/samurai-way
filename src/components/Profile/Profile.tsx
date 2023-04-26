import React from "react";
import ProfileInfo from "./ProfileInfo/Profileinfo";
import { ProfilePagePropsType} from "../../redux/state";
import MyPosts from "./MyPosts/MyPosts";

type ProfileProps = {
    profilePage: ProfilePagePropsType
    addPostProfile:(postMessage:string) =>void
}

const Profile = (props:ProfileProps) => {
    return (<div >
        <ProfileInfo />
        <MyPosts  myPostPage={ props.profilePage } addPostToMyPost={props.addPostProfile}/>

    </div>)
}
export default Profile