import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import {Route} from "react-router-dom";
import {DialogsContainer} from "./components/ Dialogs/DialogsContainer";
import Navbar from "./components/Navbar/Navbar";
import {UsersContainer} from "./components/Users/UsersContainer";



const App = () => {
    return (

            <div className="app-wrapper">
                <Header/>
                <Navbar />
                <div className="app-wrapper-content">
                    <Route path="/profile" render={() => <Profile/>}/>
                    <Route path="/dialogs" render={() => <DialogsContainer />}/>
                    <Route path="/users" render={() => <UsersContainer />}/>

                    {/*<Route path = "/news" render = {()=><Profile />}/> /!*Пока нет необходимой компоненты вставила Profile*!/*/}
                    {/*<Route path = "/music" render = {()=><Profile />}/> /!*Пока нет необходимой компоненты вставила Profile*!/*/}
                    {/*<Route path = "/settings" render = {()=><Profile />}/> /!*Пока нет необходимой компоненты вставила Profile*!/*/}

                </div>


            </div>

    );
}

export default App;
