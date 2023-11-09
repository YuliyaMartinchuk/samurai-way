import React from 'react';
import './App.module.css';
import {Redirect, Route, Switch, withRouter} from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import {
    HeaderContainer
} from "../components/Header/HeaderContainer";
import {AppStateType} from "../redux/redux-store";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeAppTC} from "../redux/thunks/appThunks";
import {Preloader} from "../components/common/Preloader/Preloader";
import {withSuspense} from "../hok/withSuspense/withSuspense";
import s from "./App.module.css"

const DialogsContainer = React.lazy(() => import("../components/ Dialogs/DialogsContainer"))
const ProfileContainer = React.lazy(() => import("../components/Profile/ProfileContainer"))
const UsersContainer = React.lazy(() => import("../components/Users/UsersContainer"))
const LoginContainer = React.lazy(() => import("../components/Login/Login"))

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
            <div className={s.root}>
                <HeaderContainer/>
                <div className={s.container}>
                <Navbar/>
                <div className={s.content}>
                    <Switch>
                        <Route exact path="/" render={() => <Redirect to={'/profile'}/>}/>
                        <Route path="/profile/:userId?" render={withSuspense(ProfileContainer)}/>
                        <Route path="/dialogs" render={withSuspense(DialogsContainer)}/>
                        <Route path="/users" render={withSuspense(UsersContainer)}/>
                        <Route path="/login" render={withSuspense(LoginContainer)}/>
                        <Route path="*" render={() => <div>404 NOT FOUND</div>}/>
                    </Switch>
                </div>
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

