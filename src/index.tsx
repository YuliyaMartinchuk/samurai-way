import React from 'react';
import './index.css';
import App from './App';
import ReactDOM from 'react-dom';
import './index.css';
import store from "./redux/redux-store";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "./StoreContext";
import {RootStateType} from "./redux/store";

let rerenderEntireTree = (state: RootStateType) => { //state взят из 19строки
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </BrowserRouter>,
        document.getElementById('root')
    );
}

rerenderEntireTree(store.getState()) //сюда приходит state
store.subscribe(() => {
    let state = store.getState()
    rerenderEntireTree(state)
})

