import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {Route} from "react-router-dom";
import Dialogs from "./components/ Dialogs/Dialogs";
import {ActionsTypes, RootStateType} from './redux/store'

type AppProps = {
    // store:StoreType
    state: RootStateType
    // addPost: () => void
    // updateNewPostText: (newText: string) => void
    dispatch: (action:ActionsTypes)=> void
}


const App: React.FC <AppProps> = (props) => {
    // const  state = props.store.getState()

    return (

            <div className="app-wrapper">
                <Header/>
                <Navbar sidebar={props.state.sidebar}/>
                <div className="app-wrapper-content">
                    <Route path="/profile" render={() => <Profile
                        profilePage={props.state.profilePage}
                        dispatch={props.dispatch}
                    />}
                    />
                    <Route path="/dialogs" render={() => <Dialogs
                        dialogsPage={props.state.dialogsPage}
                        dispatch={props.dispatch}
                    />}/>
                    {/*    // dialogs={ state.dialogsPage.dialogs}*/}
                    {/*    // messages={state.dialogsPage.messages}*/}
                    {/*/>}/>*/}
                    {/*<Route path = "/news" render = {()=><Profile />}/> /!*Пока нет необходимой компоненты вставила Profile*!/*/}
                    {/*<Route path = "/music" render = {()=><Profile />}/> /!*Пока нет необходимой компоненты вставила Profile*!/*/}
                    {/*<Route path = "/settings" render = {()=><Profile />}/> /!*Пока нет необходимой компоненты вставила Profile*!/*/}

                </div>


            </div>

    );
}

export default App;
