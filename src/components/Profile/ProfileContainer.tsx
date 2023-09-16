import React from 'react';
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {InitialStateType, ProfileType} from "../../redux/reducers/profileReducer";
import { RouteComponentProps, withRouter} from "react-router-dom";
import {
    getUserProfileTC,
    getUserStatusTC, updateUserStatusTC
} from "../../redux/thunks/profileThunks";
import {compose} from "redux";
import {withAuthRedirectComponent} from "../../hok/withAuthRedirect";



type PathParamsType = {
    userId:string
}

type MapStateToPropsType = {
    profilePage: InitialStateType
    profile: ProfileType | null
    status: string
    updateStatus: (status:string)=>void
}

type MapDispatchToPropsType = {
    getUserProfileTC: (userId:string) => void
    getUserStatusTC: (userId:string) => void
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
        this.props.getUserStatusTC(userId)
    }

    render() {
        return (
            <Profile
                {...this.props} profile={this.props.profile}
                status = {this.props.status}
                updateStatus = {this.props.updateStatus}

            />
        )
    }
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        profilePage: state.profilePage,
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        updateStatus: state.profilePage.status
    }
}


export const ProfileContainer= compose<any>(
        connect(mapStateToProps,
            {getUserProfileTC,getUserStatusTC, updateUserStatusTC}),
        withRouter,
        withAuthRedirectComponent)
    (ProfileContainerAPI )


