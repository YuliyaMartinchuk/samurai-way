import React from "react";
import s from "./MyPosts.module.css"
import Post from "./Post/Post";
import {PostsProps} from "./MyPostsContainer";
import {AddNewPostFormReduxForm, AddPostFormType} from "../PostsForm";
import {PostHeader} from "./PostHeader";

const MyPosts = React.memo((props: PostsProps) => {
    const {profile} = props

    const postsElement =
        props.posts.map((post, index) =>
            <Post key={index}
                  post={post}
                  profile={profile}
            />)

    const onAddPost = (values: AddPostFormType) => {
        props.addPost(values.newPostText)
    }

    return (
        <div className={s.postsBlock}>
            <div className={s.postForm}>
                <PostHeader profile={profile}/>
                <AddNewPostFormReduxForm onSubmit={onAddPost}/>
            </div>
            <div>
                {postsElement}
            </div>
        </div>
    )
})

export default MyPosts
