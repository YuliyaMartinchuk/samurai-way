import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs, {DialogPagePropsType} from "./components/ Dialogs/Dialogs";
import s from "./components/ Dialogs/Dialogs.module.css";
import {BrowserRouter, Route} from "react-router-dom";
import {MyPostsPropsType} from "./components/Profile/MyPosts/MyPosts";


const App = (props ) => {


    return (
        <BrowserRouter>
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className ="app-wrapper-content">
                <Route path = "/profile" render = {()=><Profile posts={props.posts}/>} />
                <Route path = "/dialogs"  render = {()=><Dialogs dialogs={props.dialogs} messages={props.messages}/>}/>
                <Route path = "/news" component ={Profile}/> {/*Пока нет необходимой компоненты вставила Profile*/}
                <Route path = "/music" component ={Profile}/> {/*Пока нет необходимой компоненты вставила Profile*/}
                <Route path = "/settings" component ={Profile}/> {/*Пока нет необходимой компоненты вставила Profile*/}

            </div>


        </div>
        </BrowserRouter>
    );
}

export default App;
