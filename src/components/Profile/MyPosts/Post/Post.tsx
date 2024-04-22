import React from "react";
import s from "./Post.module.css"
import {PostHeader} from "../PostHeader";
import {PostType, ProfileType} from "../../../../redux/reducers/profileReducer";
import likeIcon from '../../../../assets/images/icon-heart.svg'

type PostPropsType = {
    profile: ProfileType | null
    post: PostType

}
const Post: React.FC<PostPropsType> = (props: PostPropsType) => {
    const {profile, post} = props
    return (
        <div className={s.container}>
            <PostHeader profile={profile}/>
            <div className={s.item}>{post.message}</div>
            <div className={s.likes}>
                <img className={s.likesIcon} src={likeIcon} alt="icon-likes"/>
                <span className={s.likesCount}>{post.likesCount}</span>
            </div>
        </div>

    )
}
export default Post
