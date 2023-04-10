import React from "react";
import s from "./MyPosts.module.css"
import Post from "./Post/Post";

type PostPropsType = {
    id: number
    message: string
    likesCount:number
}

type MyPostsPropsType = {
    Post: Array<PostPropsType>
}


const MyPosts = (props:MyPostsPropsType) => {
    let postsData = [
        {id:1, message:"Hi, how are you?", likesCount:25},
        {id:2, message:"It's my first post", likesCount:30}
    ]

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
                <Post message={postsData[0].message} likesCount={postsData[0].likesCount} />
                <Post message={postsData[1].message} likesCount={postsData[1].likesCount}/>

            </div>

        </div>
)
}

export default MyPosts