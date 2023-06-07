import React from "react";
import {addPostAC, PostPropsType, updateNewPostAC} from "../../../../redux/profile-reducer";
import MyPosts from "../MyPosts";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {AppStateType} from "../../../../redux/redux-store";

type MapStateToPropsType = {
    posts: PostPropsType[]
    newPostText: string
}

type MapDispatchToPropsType = {
    updateNewPostText: (newText: string) => void
    addPost: () => void
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        updateNewPostText: (newText: string) => {
            let action = updateNewPostAC(newText)
            dispatch(action)
        },
        addPost: () => {
            dispatch(addPostAC())
        }

    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer