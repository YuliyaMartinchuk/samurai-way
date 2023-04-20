import React, {LegacyRef} from "react";
import s from "./MyPosts.module.css"
import Post from "./Post/Post";
import {PostPropsType, ProfilePagePropsType, RootStateType} from "../../../redux/state";


type PropsType = {
    profilePage: ProfilePagePropsType

}

const MyPosts = (props:PropsType) => {

    let postsElement =
        props.profilePage.posts.map(p=><Post message={p.message} likesCount={p.likesCount} />)

    let newPostElement = React.createRef<HTMLTextAreaElement>();

    const addPost = () => {
        let text = newPostElement.current?.value
            alert(text)
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement}></textarea>
                </div>
                <div>
                    <button onClick={addPost}>Add post </button>
                </div>

            </div>
            <div className={s.posts}>
                {postsElement}
            </div>
        </div>
)
}
export default MyPosts