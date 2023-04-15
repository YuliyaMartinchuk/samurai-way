import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

let posts = [
    {id:1, message:"Hi, how are you?", likesCount:25},
    {id:2, message:"So cool", likesCount:40},
    {id:3, message:"My day", likesCount:10},
    {id:4, message:"It's my first post", likesCount:50}
]

let dialogs = [
    {id:1, name:"Ann"},
    {id:2, name:"Valera"},
    {id:3, name:"Maks"},
    {id:4, name:"Alex"},
    {id:5, name:"Nick"},
    {id:6, name:"Tim"}
]
let messages = [
    {id:1, message:"Hello"},
    {id:2, message:"How are you?"},
    {id:3, message:"Thank you"},
    {id:4, message:"What's up?"},
    {id:5, message:"How is your day going?"},
    {id:6, message:"Exactly!"}
]

ReactDOM.render(
        <App posts={posts}
             dialogs={dialogs}
             messages={messages}
        />,
  document.getElementById('root')
);