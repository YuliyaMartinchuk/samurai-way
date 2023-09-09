import React from 'react';
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {InitialStateType, ProfileType} from "../../redux/reducers/profileReducer";
import { RouteComponentProps, withRouter} from "react-router-dom";
import {getUserProfileTC} from "../../redux/thunks/profileThunks";
import {withAuthRedirect} from "../../hok/withAuthRedirect";



type PathParamsType = {
    userId:string
}

type MapStateToPropsType = {
    profilePage: InitialStateType
    profile: ProfileType | null
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


const AuthRedirectComponent = (props: ProfilePropsType) => {
    return <ProfileContainerAPI {...props}/>
}

let withURLDataContainerComponent = withRouter(AuthRedirectComponent)

export const ProfileContainer = withAuthRedirect(connect(mapStateToProps, {
    getUserProfileTC
})(withURLDataContainerComponent))

