import React from 'react';
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {
    InitialStateType,
    ProfileType
} from "../../../redux/reducers/profileReducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {compose} from "redux";
import {withAuthRedirectComponent} from "../../../hok/withAuthRedirect/withAuthRedirect";
import {
    getUserProfileTC,
    getUserStatusTC, savePhotoTC, saveProfileTC, updateUserStatusTC
} from "../../../redux/thunks/profileThunks";
import {Profile} from "../Profile";
import {
    ProfileDataFormType
} from "../ProfileInfo/ProfileDataForm";
import {FilterType, UserType} from "../../../redux/reducers/usersReducer";
import {getUsers} from "../../../redux/selectors/usersSelectors";
import {getUsersTC} from "../../../redux/thunks/usersThunks";


type PathParamsType = {
    userId: string
}

type MapStateToPropsType = {
    profilePage: InitialStateType
    profile: ProfileType | null
    status: string
    authorizedUserId: number| null
    isAuth: boolean
    users: UserType[]
}

type MapDispatchToPropsType = {
    getUserProfile: (userId: string) => void
    getUserStatus: (userId: string) => void
    updateStatus: (status: string) => void
    savePhoto: (file: File) => void
    saveProfile:(profile: ProfileDataFormType) =>Promise<any>
    getUsers: (currentPage: number, pageSize: number, filter: FilterType) => void

}

export type OwnPropsType = MapStateToPropsType & MapDispatchToPropsType
export type ProfilePropsType =
    RouteComponentProps<PathParamsType> & OwnPropsType

 class ProfileContainerAPI extends React.Component<ProfilePropsType> {
    refreshProfile () {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = String(this.props.authorizedUserId)
            if (!userId) {
                this.props.history.push("/login")
            }
        }
        this.props.getUserProfile(userId)
        this.props.getUserStatus(userId)
    }
    componentDidMount() {
        this.refreshProfile()
        this.props.getUsers(1,  10, {term: '', friend: true} )
    }

    componentDidUpdate(prevProps: Readonly<ProfilePropsType>, prevState: Readonly<{}>, snapshot?: any) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.refreshProfile()
        }
    }

     render() {
        return (
            <Profile
                {...this.props}
                isOwner = {!this.props.match.params.userId}
                profile={this.props.profile}
                status={this.props.status}
                updateStatus={this.props.updateStatus}
                savePhoto={this.props.savePhoto}
                saveProfile={this.props.saveProfile}
                users={this.props.users}
            />
        )
    }
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        profilePage: state.profilePage,
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorizedUserId: state.auth.userId,
        isAuth: state.auth.isAuth,
        users: getUsers(state)
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps,
        {
            getUserProfile: getUserProfileTC,
            getUserStatus: getUserStatusTC,
            updateStatus: updateUserStatusTC,
            savePhoto: savePhotoTC,
            saveProfile:saveProfileTC,
            getUsers: getUsersTC,
        }),
    withRouter,
    withAuthRedirectComponent)
(ProfileContainerAPI)
