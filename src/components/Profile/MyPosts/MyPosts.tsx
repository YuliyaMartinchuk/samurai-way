import React from "react";
import s from "./MyPosts.module.css"
import Post from "./Post/Post";
import {PostsProps} from "./MyPostsContainer";
import {AddNewPostFormReduxForm, AddPostFormType} from "./PostsForm";

const MyPosts = (props: PostsProps) => {

    const postsElement =
        props.posts.map((p, index) => <Post key={index} message={p.message} likesCount={p.likesCount}/>)

    const onAddPost = (values:AddPostFormType) => {
        props.addPost(values.newPostText)
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
           <AddNewPostFormReduxForm onSubmit={onAddPost} />
            <div className={s.posts}>
                {postsElement}
            </div>
        </div>
    )
}
export default MyPosts