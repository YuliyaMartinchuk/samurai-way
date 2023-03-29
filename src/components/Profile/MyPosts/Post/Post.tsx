import React from "react";
import s from "./Post.module.css"

const Post = () => {
    return (
        <div className={s.item}>
            <img src="https://i.pinimg.com/564x/1d/93/7f/1d937faee0026150d54b97df59c0af81.jpg"/>
            Post 1
            <div>
                <span>like</span>
            </div>
        </div>
    )
}
export default Post