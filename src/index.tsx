import React from 'react';
import './index.css';
import App from './App';
import ReactDOM from 'react-dom';
import './index.css';
import store, {reducersType} from "./redux/redux-store";
import {BrowserRouter} from "react-router-dom";

let rerenderEntireTree = (state:reducersType) => { //state взят из 19строки
    ReactDOM.render(
    //     state={state}
    // dispatch={store.dispatch.bind(store)}

        <BrowserRouter>
        <App
             store={store}
        />
        </BrowserRouter>,
        document.getElementById('root')
    );
}

rerenderEntireTree(store.getState()) //сюда приходит state
store.subscribe (()=>{
    let state = store.getState()
    rerenderEntireTree(state)
})

