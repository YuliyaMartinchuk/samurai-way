import React from 'react';
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {InitialStateType, ProfileType} from "../../redux/reducers/profileReducer";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";
import {getUserProfileTC} from "../../redux/thunks/profileThunks";

type PathParamsType = {
    userId:string
}

type MapStateToPropsType = {
    profilePage: InitialStateType
    profile: ProfileType | null
    isAuth:boolean
}

type MapDispatchToPropsType = {
    getUserProfileTC: (userId:string) => void
}

export type OwnPropsType = MapStateToPropsType & MapDispatchToPropsType
export type ProfilePropsType = RouteComponentProps<PathParamsType> & OwnPropsType

export class ProfileContainerAPI extends React.Component<ProfilePropsType> {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = "2"
        }
       this.props.getUserProfileTC(userId)
    }

    render() {
        if (!this.props.isAuth) return <Redirect to={"/login"}/>
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        profilePage: state.profilePage,
        profile: state.profilePage.profile,
        isAuth: state.auth.isAuth
    }
}


const WithUrlDataProfileContainer = withRouter(ProfileContainerAPI as any)

export const ProfileContainer = connect(mapStateToProps, {
    getUserProfileTC
})(WithUrlDataProfileContainer)

