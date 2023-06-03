import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import {Route} from "react-router-dom";
import DialogsContainer from "./components/ Dialogs/DialogsContainer";
import {ActionsTypes} from "./redux/store";
import {reducersType} from "./redux/redux-store";
import {Store} from "redux";
import Navbar from "./components/Navbar/Navbar";



type AppProps = {
    store: Store<reducersType, ActionsTypes>

}

const App: React.FC <AppProps> = (props) => {
    // const  state = props.store.getState()
    return (

            <div className="app-wrapper">
                <Header/>
                <Navbar sidebar={props.store}/>
                <div className="app-wrapper-content">
                    <Route path="/profile" render={() => <Profile store={props.store }/>}/>
                    <Route path="/dialogs" render={() => <DialogsContainer store={props.store}/>}/>

                    {/*<Route path = "/news" render = {()=><Profile />}/> /!*Пока нет необходимой компоненты вставила Profile*!/*/}
                    {/*<Route path = "/music" render = {()=><Profile />}/> /!*Пока нет необходимой компоненты вставила Profile*!/*/}
                    {/*<Route path = "/settings" render = {()=><Profile />}/> /!*Пока нет необходимой компоненты вставила Profile*!/*/}

                </div>


            </div>

    );
}

export default App;
