import React from "react";
import ProfileInfo from "./ProfileInfo/Profileinfo";
import {ActionsTypes, ProfilePagePropsType} from "../../redux/state";
import MyPosts from "./MyPosts/MyPosts";

type ProfileProps = {
    profilePage: ProfilePagePropsType
    // addPostProfile:() =>void
    // updateNewPostText: (newText: string) => void
    dispatch: (action:ActionsTypes)=> void

}

const Profile = (props:ProfileProps) => {
    return (<div >
        <ProfileInfo />
        <MyPosts  myPostPage={ props.profilePage }
                  dispatch={props.dispatch}
                  newPostText={props.profilePage.newPostText}
        />

    </div>)
}
export default Profile