import React from 'react';
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {setUserProfile} from "../../redux/actions/profileActions";
import {InitialStateType, ProfileType} from "../../redux/reducers/profileReducer";
import {RouteComponentProps, withRouter} from "react-router-dom";

type PathParamsType = {
    userId:string
}

type MapStateToPropsType = {
    profilePage: InitialStateType
    profile: ProfileType | null
}

type MapDispatchToPropsType = {
    setUserProfile: (profile: ProfileType | null) => void
}

export type OwnPropsType = MapStateToPropsType & MapDispatchToPropsType
export type ProfilePropsType = RouteComponentProps<PathParamsType> & OwnPropsType

export class ProfileContainerAPI extends React.Component<ProfilePropsType> {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = "2"
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then((res) => {
                this.props.setUserProfile(res.data)
            })
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        profilePage: state.profilePage,
        profile: state.profilePage.profile
    }
}


const WithUrlDataProfileContainer = withRouter(ProfileContainerAPI as any)

export const ProfileContainer = connect(mapStateToProps, {
    setUserProfile
})(WithUrlDataProfileContainer)

