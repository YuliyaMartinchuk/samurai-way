import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/ Dialogs/Dialogs";
import s from "./components/ Dialogs/Dialogs.module.css";
import {BrowserRouter, Route} from "react-router-dom";


const App = () => {
    return (
        <BrowserRouter>
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className ="app-wrapper-content">
                <Route path = "/profile" component ={Profile}/>
                <Route path = "/dialogs" component ={Dialogs}/>
                <Route path = "/news" component ={Profile}/> {/*Пока нет необходимой компоненты вставила Profile*/}
                <Route path = "/music" component ={Profile}/> {/*Пока нет необходимой компоненты вставила Profile*/}
                <Route path = "/settings" component ={Profile}/> {/*Пока нет необходимой компоненты вставила Profile*/}

            </div>


        </div>
        </BrowserRouter>
    );
}

export default App;
