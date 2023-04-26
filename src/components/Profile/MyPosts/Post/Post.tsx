import React from "react";
import s from "./Post.module.css"

type PostPropsType ={
    message:string,
    likesCount:number

}

const Post: React.FC<PostPropsType> = (props:PostPropsType) => {

    return (
        <div className={s.item}>
            <img src="https://i.pinimg.com/564x/1d/93/7f/1d937faee0026150d54b97df59c0af81.jpg"/>
            {props.message}
            <div>
                <span>like</span> {props.likesCount}
            </div>
        </div>
    )
}
export default Post