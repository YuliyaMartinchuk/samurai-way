

export type PostPropsType = {
    id: number
    message: string
    likesCount: number
}

export type ProfilePagePropsType = {
    posts: Array<PostPropsType>
    newPostText: string
}
export type MessagePropsType = {
    id: number
    message: string
}

export type DialogsPropsType = {
    id: number
    name: string
}
export type DialogPagePropsType = {
    dialogs: Array<DialogsPropsType>
    messages: Array<MessagePropsType>
}

export type RootStateType = {
    profilePage: ProfilePagePropsType
    dialogsPage: DialogPagePropsType
}

const state: RootStateType = {
    profilePage: {
        posts: [
            {id: 1, message: "Hi, how are you?", likesCount: 25},
            {id: 2, message: "So cool", likesCount: 40},
            {id: 3, message: "My day", likesCount: 10},
            {id: 4, message: "It's my first post", likesCount: 50}
        ],
        newPostText: " "
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: "Ann"},
            {id: 2, name: "Valera"},
            {id: 3, name: "Maks"},
            {id: 4, name: "Alex"},
            {id: 5, name: "Nick"},
            {id: 6, name: "Tim"}
        ],
        messages: [
            {id: 1, message: "Hello"},
            {id: 2, message: "How are you?"},
            {id: 3, message: "Thank you"},
            {id: 4, message: "What's up?"},
            {id: 5, message: "How is your day going?"},
            {id: 6, message: "Exactly!"}
        ]
    }

}

// export type addPostType = {
//     addPost: (postMessage:string)=> void
// }

export const addPost = () => {
    const newPost: PostPropsType = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0
    }
    state.profilePage.posts.push(newPost)
    state.profilePage.newPostText =""
    rerenderEntireTree(state)
}

export const updateNewPostText = (newText: string) => {
    state.profilePage.newPostText = newText
    rerenderEntireTree(state)
}

let rerenderEntireTree= (state:RootStateType) => {
    console.log("State changed")
}

export const subscribe = (observer:(state:RootStateType)=> void)=> {
    rerenderEntireTree = observer // observer// паттерн
}

export default state
