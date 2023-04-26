import React, {LegacyRef} from "react";
import s from "./MyPosts.module.css"
import Post from "./Post/Post";
import {ProfilePagePropsType} from "../../../redux/state";


type PropsType = {
    myPostPage: ProfilePagePropsType
    addPostToMyPost: (postMessage:string) => void
}

const MyPosts = (props: PropsType) => {

    let postsElement =
        props.myPostPage.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>();

    const addPost = () => {
        if (newPostElement.current) {
            const text = newPostElement.current.value
            props.addPostToMyPost(text)
            newPostElement.current.value = ""
            // props.addPostToMyPost.addPost(text)
        }
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement}></textarea>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>

            </div>
            <div className={s.posts}>
                {postsElement}
            </div>
        </div>
    )
}
export default MyPosts