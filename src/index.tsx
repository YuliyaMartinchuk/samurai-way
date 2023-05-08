import React from 'react';
import './index.css';
import App from './App';
import ReactDOM from 'react-dom';
import './index.css';
import  {RootStateType} from './redux/state';
import store from "./redux/state";

let rerenderEntireTree = (state:RootStateType) => { //state взят из 19строки
    ReactDOM.render(
        <App state={state}
             dispatch={store.dispatch.bind(store)}
        />,
        document.getElementById('root')
    );
}

rerenderEntireTree(store.getState()) //сюда приходит state
store.subscribe (rerenderEntireTree)

