import React from "react";
import {addPostAC, updateNewPostAC} from "../../../../redux/profile-reducer";
import MyPosts from "../MyPosts";
import StoreContext from "../../../../StoreContext";


const MyPostsContainer = () => {
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState()
                    const addPost = () => {
                        store.dispatch(addPostAC())
                    }

                    const onPostChange = (newText: string) => {
                        let action = updateNewPostAC(newText)
                        store.dispatch(action)
                    }
                    return <MyPosts
                        updateNewPostText={onPostChange}
                        addPost={addPost}
                        posts={state.profilePage.posts}
                        newPostText={state.profilePage.newPostText}
                    />
                }
            }

        </StoreContext.Consumer>
    )
}
export default MyPostsContainer