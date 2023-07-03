import React from 'react';
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {setUserProfile} from "../../redux/actions/profileActions";
import {InitialStateType, ProfileType} from "../../redux/reducers/profileReducer";

type MapStateToPropsType = {
    profilePage: InitialStateType
    profile: ProfileType | null
}

type MapDispatchToPropsType = {
    setUserProfile: (profile: ProfileType | null) => void
}

export type ProfilePropsType = MapStateToPropsType & MapDispatchToPropsType

export class ProfileContainerAPI extends React.Component<ProfilePropsType> {
    componentDidMount() {
        const userId = 2
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

export const ProfileContainer = connect(mapStateToProps, {
    setUserProfile
})(ProfileContainerAPI as any)

