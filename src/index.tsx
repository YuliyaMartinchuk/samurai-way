import React from 'react';
import './index.css';
import App from './App';
import ReactDOM from 'react-dom';
import './index.css';
import state, {addPost, RootStateType, subscribe, updateNewPostText} from './redux/state';

let rerenderEntireTree = (state:RootStateType) => {
    ReactDOM.render(
        <App state={state}
             addPost={addPost}
             updateNewPostText = {updateNewPostText}
        />,
        document.getElementById('root')
    );
}

rerenderEntireTree(state)

subscribe (rerenderEntireTree)

