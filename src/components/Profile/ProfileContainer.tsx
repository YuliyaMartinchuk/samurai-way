import React from 'react';
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {
    InitialStateType,
    ProfileType
} from "../../redux/reducers/profileReducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {compose} from "redux";
import {withAuthRedirectComponent} from "../../hok/withAuthRedirect";
import {
    getUserProfileTC,
    getUserStatusTC, updateUserStatusTC
} from "../../redux/thunks/profileThunks";
import {Profile} from "./Profile";


type PathParamsType = {
    userId: string
}

type MapStateToPropsType = {
    profilePage: InitialStateType
    profile: ProfileType | null
    status: string

}

type MapDispatchToPropsType = {
    getUserProfile: (userId: string) => void
    getUserStatus: (userId: string) => void
    updateStatus: (status: string) => void
}

export type OwnPropsType = MapStateToPropsType & MapDispatchToPropsType
export type ProfilePropsType =
    RouteComponentProps<PathParamsType> & OwnPropsType

 class ProfileContainerAPI extends React.Component<ProfilePropsType> {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = "29089"
        }
        this.props.getUserProfile(userId)
        this.props.getUserStatus(userId)
    }

    render() {
        return (
            <Profile
                {...this.props}
                profile={this.props.profile}
                status={this.props.status}
                updateStatus={this.props.updateStatus}
            />
        )
    }
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        profilePage: state.profilePage,
        profile: state.profilePage.profile,
        status: state.profilePage.status
    }
}

export const ProfileContainer = compose<any>(
    connect(mapStateToProps,
        {
            getUserProfile: getUserProfileTC,
            getUserStatus: getUserStatusTC,
            updateStatus: updateUserStatusTC
        }),
    withRouter,
    withAuthRedirectComponent)
(ProfileContainerAPI)
