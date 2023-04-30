import React, {ChangeEvent, LegacyRef} from "react";
import s from "./MyPosts.module.css"
import Post from "./Post/Post";
import {ProfilePagePropsType} from "../../../redux/state";


type PropsType = {
    myPostPage: ProfilePagePropsType
    addPostToMyPost: () => void
    updateNewPostText: (newText: string) => void
    newPostText: string
}

const MyPosts = (props: PropsType) => {

    let postsElement =
        props.myPostPage.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

    // let newPostElement = React.createRef<HTMLTextAreaElement>();

    const addPost = () => {
        props.addPostToMyPost()
    }

    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const text = e.currentTarget.value
        props.updateNewPostText(text)
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