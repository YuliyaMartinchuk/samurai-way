import {
    ProfileContactsType,
    ProfileType
} from "../../../../redux/reducers/profileReducer";
import React from "react";

import {
    createField, GetStringKeys, Input, Textarea
} from "../../../common/FormsControls/FormsControls";
import {InjectedFormProps, reduxForm} from "redux-form";
import style from "../../../common/FormsControls/FormsControls.module.css";
import s from "../ProfileData/ProfileData.module.css";


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
    return <form className={s.container} onSubmit={handleSubmit}>
        <div>
                <div className={s.description}>Full name: </div> {createField<ProfileDataFormValuesTypeKeys>("Full name", "fullName", [], Input, {className:s.textarea})}
            <div >
                <div>
                    <div className={s.description}>Looking for a job: </div>
                    {createField<ProfileDataFormValuesTypeKeys>("", "lookingForAJob", [], Input, {type: 'checkbox', className: s.checkbox})}
                </div>
                <div>
                    <div className={s.description}>My professional skills: </div>
                    {createField<ProfileDataFormValuesTypeKeys>("My professional skills", "lookingForAJobDescription", [], Textarea, {className:s.textarea})}
                </div>
                <div>
                    <div className={s.description}>About me: </div>
                    {createField<ProfileDataFormValuesTypeKeys>("About me", "aboutMe", [], Textarea, {className:s.textarea})}
                </div>
                {profile?.contacts &&
                    <div className={s.description}>
                        <div className={s.description}>Contacts: </div> {Object.keys(profile.contacts).map(key => {
                        return <div key={key}>
                            <div className={s.description}>{key}: </div>
                            {createField(key, 'contacts.' + key, [], Input, {className:s.textarea})}
                        </div>
                    })}
                    </div>}

            </div>
        </div>


        <div>
            <button className={s.editButton}>save</button>
        </div>
        {error && <div className={style.formSummaryError}>
            {error}
        </div>}
    </form>

}
export default reduxForm<ProfileDataFormType, PropsType>({form: 'edit-profile'})(ProfileDataForm)

