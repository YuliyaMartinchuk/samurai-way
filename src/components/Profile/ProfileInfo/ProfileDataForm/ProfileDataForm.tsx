import {
    ProfileContactsType,
    ProfileType
} from "../../../../redux/reducers/profileReducer";
import React from "react";
import s from "../Profileinfo.module.css";
import {
    createField, GetStringKeys, Input, Textarea
} from "../../../common/FormsControls/FormsControls";
import {InjectedFormProps, reduxForm} from "redux-form";
import style from "../../../common/FormsControls/FormsControls.module.css";


type PropsType = {
    profile: ProfileType | null
    onSubmit: (formData: ProfileDataFormType) => void
}


export type ProfileDataFormType = {
    fullName: string;
    aboutMe: string;
    lookingForAJob: boolean;
    lookingForAJobDescription: string;
    contacts: ProfileContactsType
}
type ProfileDataFormValuesTypeKeys = GetStringKeys<ProfileDataFormType>;
type AllSampleFormProps =
    PropsType
    & InjectedFormProps<ProfileDataFormType, PropsType>;

 const ProfileDataForm: React.FC<AllSampleFormProps> = ({
                                                                  profile,
                                                                  handleSubmit, error
                                                              }) => {
    return <form className={s.descriptionBlock} onSubmit={handleSubmit}>
        {error && <div className={style.formSummaryError}>
            {error}
        </div>}
        <div>
            <span>Full name: </span> {createField<ProfileDataFormValuesTypeKeys>("Full name", "fullName", [], Input)}
        </div>

        <div className={s.description}>
            <div>
                <span>Looking for a job: </span>
                {createField<ProfileDataFormValuesTypeKeys>( "","lookingForAJob",[], Input, {type: 'checkbox'})}
            </div>
                <div>
                    <span>My professional skills: </span>
                    {createField<ProfileDataFormValuesTypeKeys>("My professional skills", "lookingForAJobDescription", [], Textarea)}
                </div>
            <div>
                <span>About me: </span>
                {createField<ProfileDataFormValuesTypeKeys>("About me", "aboutMe", [], Textarea)}
            </div>
            {profile?.contacts &&
                <div className={s.contacts}>
                    <span>Contacts: </span> {Object.keys(profile.contacts).map(key => {
                    return <div key={key}>
                        <span>{key}: </span>
                        {createField(key, 'contacts.' + key, [], Input)}
                    </div>
                })}
                </div>}

        </div>
        <div>
            <button>save</button>
        </div>
    </form>

}
export default reduxForm<ProfileDataFormType, PropsType>({form: 'edit-profile'})(ProfileDataForm)

