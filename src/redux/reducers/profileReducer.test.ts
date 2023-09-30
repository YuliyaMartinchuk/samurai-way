import {PostType, profileReducer, ProfileType} from "./profileReducer";
import {addPostAC, deletePost} from "../actions/profileActions";

const state = {
    posts: [
        {id: 1, message: "Hi, how are you?", likesCount: 25},
        {id: 2, message: "So cool", likesCount: 40},
        {id: 3, message: "My day", likesCount: 10},
        {id: 4, message: "It's my first post", likesCount: 50}
    ] as PostType[],
    profile: null as ProfileType | null,
    status: " "
}

it("length of posts should be incremented", () => {
    const newState = profileReducer(state, addPostAC("Hello, gays"))
    expect(newState.posts.length).toBe(5)
})


it("message of new post should be corrected", () => {

    const newState = profileReducer(state, addPostAC("Hello, gays"))
    expect(newState.posts[0].message).toBe("Hello, gays")
})

it("after deleting length of messages should be decrement", () => {

    const newState = profileReducer(state, deletePost(1))
    expect(newState.posts.length).toBe(3)
})

it("after deleting length shouldn't be decrement if id is incorrect", () => {
    const newState = profileReducer(state, deletePost(1000))
    expect(newState.posts.length).toBe(4)
})
