import {ActionsTypes, PostPropsType, ProfilePagePropsType} from "./state";

 const profileReducer = (state:ProfilePagePropsType, action:ActionsTypes):ProfilePagePropsType=> {
     switch (action.type) {
         case "ADD-POST":
             const newPost: PostPropsType = {
                 id: 5,
                 message: state.newPostText,
                 likesCount: 0
             }
             state.posts.push(newPost)
             state.newPostText = "";
             return state
         case "UPDATE-NEW-POST-TEXT":
             state.newPostText = action.newText
             return state;
         default:
             return state
     }
 }

export const addPostAC = () => ({type: "ADD-POST"} as const)

export const onPostChangeAC = (newText:string)=> ({
    type: "UPDATE-NEW-POST-TEXT",
    newText:newText
} as const)

export default profileReducer

