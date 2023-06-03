import React from "react";
import ProfileInfo from "./ProfileInfo/Profileinfo";
import {ActionsTypes} from "../../redux/store";
import MyPostsContainer from "./MyPosts/Post/MyPostsContainer";
import {Store} from "redux";
import {reducersType} from "../../redux/redux-store";

type ProfileProps = {
    store:Store<reducersType, ActionsTypes>

}

const Profile = (props:ProfileProps) => {

    return (<div >
        <ProfileInfo />
        <MyPostsContainer
            store={props.store}
        />

    </div>)
}
export default Profile