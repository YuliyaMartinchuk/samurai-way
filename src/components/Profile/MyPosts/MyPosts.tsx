import React from "react";
import s from "./MyPosts.module.css"
import Post from "./Post/Post";

 export type PostPropsType = {
    id: number
    message: string
    likesCount:number
}
export type MyPostsPropsType = {
    posts:Array<PostPropsType>
}


const MyPosts = (props:MyPostsPropsType) => {

    let postsElement =
        props.posts.map(p=><Post message={p.message} likesCount={p.likesCount} />)

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post </button>
                </div>

            </div>
            <div className={s.posts}>
                {postsElement}
            </div>
        </div>
)
}
export default MyPosts