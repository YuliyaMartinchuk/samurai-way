import React from "react";
import {PostType, ProfileType} from "../../../../redux/reducers/profileReducer";
import MyPosts from "../MyPosts";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {AppStateType} from "../../../../redux/redux-store";
import {addPostAC} from "../../../../redux/actions/profileActions";

type MapStateToPropsType = {
    posts: PostType[]
    profile: ProfileType | null
}

type MapDispatchToPropsType = {
    addPost: (newPostBody:string) => void
}

export type PostsProps = MapStateToPropsType &  MapDispatchToPropsType

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        posts: state.profilePage.posts,
        profile:state.profilePage.profile
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        addPost: (newPostText:string) => {
            dispatch(addPostAC(newPostText))
        }

    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer