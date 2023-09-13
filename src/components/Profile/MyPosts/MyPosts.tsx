import React, {ChangeEvent} from "react";
import s from "./MyPosts.module.css"
import Post from "./Post/Post";
import {PostType} from "../../../redux/reducers/profileReducer";

type PropsType = {
    updateNewPostText:(newText:string) => void
    addPost:()=> void
    posts: PostType []
    newPostText: string

}

const MyPosts = (props: PropsType) => {

    let postsElement =
        props.posts.map((p, index) => <Post key={index} message={p.message} likesCount={p.likesCount}/>)

    const onAddPost = () => {
        props.addPost()
    }

    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const newText = e.currentTarget.value
        props.updateNewPostText(newText)
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea
                        onChange={onPostChange}
                        value={props.newPostText}
                    />
                </div>
                <div>
                    <button onClick={onAddPost}>Add post</button>
                </div>

            </div>
            <div className={s.posts}>
                {postsElement}
            </div>
        </div>
    )
}
export default MyPosts