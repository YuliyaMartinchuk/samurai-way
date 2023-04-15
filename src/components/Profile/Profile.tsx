import React from "react";
import s from "./Profile.module.css"
import MyPosts, {MyPostsPropsType} from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/Profileinfo";
import Post from "./MyPosts/Post/Post";



const Profile = (props:MyPostsPropsType) => {

    return (<div >
       <ProfileInfo />
       <MyPosts  posts={props.posts}/>

    </div>)
}
export default Profile