import React from "react";
import {addPostAC, updateNewPostAC} from "../../../../redux/profile-reducer";
import MyPosts from "../MyPosts";
import {Store} from "redux";
import {reducersType} from "../../../../redux/redux-store";
import {ActionsTypes} from "../../../../redux/store";


type PropsType = {
    store:Store<reducersType, ActionsTypes>
}

const MyPostsContainer = (props: PropsType) => {

    let state = props.store.getState()

    const addPost = () => {
        props.store.dispatch(addPostAC())
    }

    const onPostChange = (newText:string) => {
        let action = updateNewPostAC(newText)
        props.store.dispatch(action)
    }

    return (
        <MyPosts
            updateNewPostText={onPostChange}
            addPost={addPost}
            posts={state.profileReducer.posts}
            newPostText={state.profileReducer.newPostText}
           />
    )
}
export default MyPostsContainer