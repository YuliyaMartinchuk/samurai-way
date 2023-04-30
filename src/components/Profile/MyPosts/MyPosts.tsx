import React, {LegacyRef} from "react";
import s from "./MyPosts.module.css"
import Post from "./Post/Post";
import {ProfilePagePropsType} from "../../../redux/state";


type PropsType = {
    myPostPage: ProfilePagePropsType
    addPostToMyPost: () => void
    newPostText:string
    updateNewPostText: (newText: string) => void
}

const MyPosts = (props: PropsType) => {

    let postsElement =
        props.myPostPage.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>();

    const addPost = () => {

        let text = newPostElement.current.value
            props.addPostToMyPost()
           props.updateNewPostText("")
            // props.addPostToMyPost.addPost(text)

    }

    const onPostChange = () => {
        let text = newPostElement.current.value
        props.updateNewPostText(text)
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement}
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