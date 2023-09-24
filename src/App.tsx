import React from 'react';
import './App.css';
import {Route, withRouter} from "react-router-dom";
import {DialogsContainer} from "./components/ Dialogs/DialogsContainer";
import Navbar from "./components/Navbar/Navbar";
import {UsersContainer} from "./components/Users/UsersContainer";
import {
    HeaderContainer
} from "./components/Header/HeaderContainer";
import {LoginContainer} from "./components/Login/Login";
import {
    ProfileContainer
} from "./components/Profile/ProfileContainer";
import {AppStateType} from "./redux/redux-store";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeAppTC} from "./redux/thunks/appThunks";
import {Preloader} from "./components/common/Preloader/Preloader";

type MapStateToPropsType = {
    initialized: boolean
}
type MapDispatchToPropsType = {
    initializeApp: () => void
}

type AppPropsType = MapStateToPropsType & MapDispatchToPropsType


class App extends React.Component<AppPropsType> {
    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route path="/profile/:userId?"
                           render={() => <ProfileContainer/>}/>
                    <Route path="/dialogs" render={() => <DialogsContainer/>}/>
                    <Route path="/users" render={() => <UsersContainer/>}/>
                    <Route path="/login" render={() => <LoginContainer/>}/>
                </div>
            </div>

        );
    }
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        initialized: state.app.initialized
    }
}


export default compose<any>(
    withRouter,
    connect(mapStateToProps, {initializeApp: initializeAppTC}))(App);

