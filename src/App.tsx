import React from 'react';
import './App.css';
import {Route} from "react-router-dom";
import {DialogsContainer} from "./components/ Dialogs/DialogsContainer";
import Navbar from "./components/Navbar/Navbar";
import {UsersContainer} from "./components/Users/UsersContainer";
import {HeaderContainer} from "./components/Header/HeaderContainer";
import { LoginContainer} from "./components/Login/Login";
import {ProfileContainer} from "./components/Profile/ProfileContainer";






const App = () => {
    return (

            <div className="app-wrapper">
                 <HeaderContainer/>
                <Navbar />
                <div className="app-wrapper-content">
                    <Route path="/profile/:userId?" render={() => <ProfileContainer/>}/>
                    <Route path="/dialogs" render={() => <DialogsContainer />}/>
                    <Route path="/users" render={() => <UsersContainer />}/>
                    <Route path="/login" render={() => <LoginContainer/>}/>


                    {/*<Route path = "/news" render = {()=><Profile />}/> /!*Пока нет необходимой компоненты вставила Profile*!/*/}
                    {/*<Route path = "/music" render = {()=><Profile />}/> /!*Пока нет необходимой компоненты вставила Profile*!/*/}
                    {/*<Route path = "/settings" render = {()=><Profile />}/> /!*Пока нет необходимой компоненты вставила Profile*!/*/}
                </div>
            </div>

    );
}

export default App;
