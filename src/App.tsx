import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import s from "./components/ Dialogs/Dialogs.module.css";
import {BrowserRouter, Route} from "react-router-dom";
import Dialogs from "./components/ Dialogs/Dialogs";
import {RootStateType} from './redux/state'

type AppProps = {
    state: RootStateType
    addPost: () => void
    updateNewPostText: (newText: string) => void
}


const App = (props: AppProps) => {

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route path="/profile" render={() => <Profile
                        profilePage={props.state.profilePage}
                        addPostProfile={props.addPost}
                        updateNewPostText={props.updateNewPostText}
                    />}
                    />
                    <Route path="/dialogs" render={() => <Dialogs
                        dialogsPage={props.state.dialogsPage}/>}/>
                    {/*    // dialogs={ state.dialogsPage.dialogs}*/}
                    {/*    // messages={state.dialogsPage.messages}*/}
                    {/*/>}/>*/}
                    {/*<Route path = "/news" render = {()=><Profile />}/> /!*Пока нет необходимой компоненты вставила Profile*!/*/}
                    {/*<Route path = "/music" render = {()=><Profile />}/> /!*Пока нет необходимой компоненты вставила Profile*!/*/}
                    {/*<Route path = "/settings" render = {()=><Profile />}/> /!*Пока нет необходимой компоненты вставила Profile*!/*/}

                </div>


            </div>
        </BrowserRouter>
    );
}

export default App;
