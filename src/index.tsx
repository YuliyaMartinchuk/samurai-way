import React from 'react';
import './index.css';
import App from './App';
import ReactDOM from 'react-dom';
import './index.css';
import  {RootStateType} from './redux/state';
import store from "./redux/state";

let rerenderEntireTree = (state:RootStateType) => {
    ReactDOM.render(
        <App state={store.getState()}
             addPost={store.addPost.bind(store)}
             updateNewPostText = {store.updateNewPostText.bind(store)}
        />,
        document.getElementById('root')
    );
}

rerenderEntireTree(store.getState())

store.subscribe (rerenderEntireTree)

